import invariant from "invariant";

import {UiSchema} from "../models/uischema";
import {schemaFieldFactory, schemaKeysFactory} from "../factory";
import {getDataKeysBySchemaKeys, getSchemaId} from "./resolve";
import {FxJsonSchema} from "../models/jsonschema";

/**
* 根据给出的parentKeys和uiSchemaKeys来获取uiSchema的key
* 1. 遍历uiSchemaKeys，分别于parentKeys做合并
* 2. 合并后的keys去仓库里面找，如果为找到则报错
* 3. 判断找到的schema中是否带有 $ref
* 4. 如果有$ref，则更改parentKeys为$ref的路径
* 5. 如果没有，则更改parentKeys为当前合并的keys
* @param  {String[]} uiSchemaKeys      当前的keys
* @param  {String} parentSchemaPath    父亲的schemaPath
* @return {String}                     返回的key
*/
const getUiSchemaKeyRecursion = (uiSchemaKeys: string[], parentSchemaPath: string): string => {
    let parentKeysWithDef = getDataKeysBySchemaKeys(parentSchemaPath, true);

    while (uiSchemaKeys.length) {
        const key: string = uiSchemaKeys.shift() || "";

        parentKeysWithDef = parentKeysWithDef.concat(key ? [key] : []);

        const keysStr: string = parentKeysWithDef.join("/").replace(/\/$/, "");

        if (!schemaKeysFactory.has(keysStr)) {
            // if (!isProd) {
            //     // console.log(schemaFieldFactory, schemaKeysFactory);
            //     warn(`${keysStr} did not found.`);
            // }

            invariant(false, `${keysStr} did not found.`);

            return "";
        }

        const schema: FxJsonSchema = schemaFieldFactory.get(schemaKeysFactory.get(keysStr));

        if (schema.$ref) {
            parentKeysWithDef = getDataKeysBySchemaKeys(schema.$ref, true);
        }
    }

    return parentKeysWithDef.join("/");
};
/**
  * 获取父亲的keys
  * @param  {UiSchema}               parent 父亲schema
  * @return {Array<string | number>}
  */
const getParentSchemaKeys = (parent?: UiSchema): Array<string | number> => {
    if (parent && parent.keys) {
        return parent.keys;
    }

    return [];
};

/**
 * 获取当前uiSchema的key
 * 如果没有父亲节点
 * 默认返回父亲的key+当前uiSchema的key
 * @param  {UiSchema} parent      父亲schema
 * @param  {string}   schemaPath  schema的路径
 * @param  {UiSchema} uiSchema    uiSchma
 * @return {String}               返回的key
 */
const getCurrentSchemaKey = (parent: UiSchema | undefined, schemaPath: string, uiSchema: UiSchema): string => {
    const $id = getSchemaId(schemaPath);
    let uiSchemaKeys = uiSchema.key.split("/");

    // 如果父亲节点的shcemaId不是传入的schemaId，则不使用父亲的key做计算
    if (parent && getSchemaId(parent.key) === $id) {
        return getUiSchemaKeyRecursion(uiSchemaKeys, parent.schemaPath || "");
    }

    // const keys = getDataKeysBySchemaKeys(schemaPath, true);
    // console.log("计算得出的keys", $id, schemaPath, getDataKeysBySchemaKeys(schemaPath), getDataKeysBySchemaKeys(schemaPath, true));

    // keys.pop();

    return getUiSchemaKeyRecursion(uiSchemaKeys, schemaPath);
};

/**
 * 如果在【schemaKeysFactory】中没有发现uiSchema.key,则报错
 * 从【schemaKeysFactory】获取对应的schema，与uiSchema合并之后返回
 * @param  {UiSchema} uiSchema uiSchema
 * @return {UiSchema}          返回uiSchema
 */
const mergeUiSchemaToArray = (uiSchema: UiSchema): UiSchema => {
    if (!schemaKeysFactory.has(uiSchema.key)) {
        // if (!isProd) {
        //     console.log(schemaKeysFactory);
        //     warn(`${uiSchema.key} did not found. do you forget to resolve schema first.`);
        // }

        invariant(false, `${uiSchema.key} did not found. do you forget to resolve schema first.`);

        return uiSchema;
    }

    const schemaKey: string = schemaKeysFactory.get(uiSchema.key);
    const schema = schemaFieldFactory.get(schemaKey);

    return Object.assign({}, schema, uiSchema);
};

/**
 * 初始化uiSchema
 * 如果是字符串；用$id合并之后，获取schema
 * 如果是【UiSchema】；合并key之后，获取schema
 * @param  {UiSchema} parent      父亲schema
 * @param  {string}   schemaPath  schema的路径
 * @param  {UiSchema} uiSchema    uiSchma
 * @return {UiSchema}            返回uiSchema
 */
const initUiSchema = (parent: UiSchema | undefined, schemaPath: string, uiSchema: UiSchema): UiSchema => {
    let parentKeys = getParentSchemaKeys(parent),
        key = getCurrentSchemaKey(parent, schemaPath, uiSchema),
        keys,
        isRequired = false,
        originSchema: FxJsonSchema = {},
        schemaKey;

    keys = parentKeys.concat(uiSchema.key ? uiSchema.key.split("/") : []);

    // if (parent.type === "object" && parent.required) {
    //     const keys1 = keys.concat([]);

    //     isRequired = parent.required.indexOf((keys1.pop() || "").toString()) >= 0;
    // }

    if (schemaKeysFactory.has(key)) {
        schemaKey = schemaKeysFactory.get(key);
        if (schemaFieldFactory.has(schemaKey)) {
            originSchema = schemaFieldFactory.get(schemaKey);
            // isRequired = originSchema.isRequired;
        }
    }

    return Object.assign({isRequired}, originSchema, uiSchema, {
        key,
        keys
    });
};

/**
 * 合并后的数据添加到数组中去
 * 这里因为可以使用*,所有拆成了前面和后面以及*三个部分
 * @param  {UiSchema[]} uiSchemasFirst 前面部分
 * @param  {UiSchema[]} uiSchemasLast  后面部分
 * @param  {UiSchema}   uiSchema       需要处理的uiSchema
 * @return {Void}
 */
const pushMergeResult = (uiSchemasFirst: UiSchema[], uiSchemasLast: UiSchema[], uiSchema: UiSchema): void => {
    if (
        !uiSchemasFirst.concat(uiSchemasLast).filter((val: UiSchema) => {
            return val.key === uiSchema.key;
        }).length
    ) {
        uiSchema = mergeUiSchemaToArray(uiSchema);
        uiSchemasFirst.push(uiSchema);
    }
};

/**
 * 合并uiSchema
 * 1. 先判断uiSchema中是否存在*
 * 2. 如果没有*号，则遍历uiSchema，合并数据
 * 3. 如果存在*号；先合并*之前和*之后的uiSchema
 * 4. 遍历当前的schema：
 *    如果是object，则遍历properties，然后合并数据
 *    如果是array，则直接返回items，然后合并数据
 * @param  {UiSchema}                    parent      父亲的uiSchema
 * @param  {string}                      schemaPath  当前的schema路径
 * @param  {Array<UiSchema | string>}    uiSchemas   全部的uiSchemas
 * @param  {FxJsonSchema}                curSchema   当前的Schema
 * @return {UiSchema[]}                              合并后的uiSchemas
 */
// tslint:disable-next-line:max-line-length
const initMergeSchema = (parent: UiSchema | undefined, schemaPath: string, uiSchemas: Array<UiSchema | string>, curSchema: FxJsonSchema): UiSchema[] => {
    let idx: number = uiSchemas.indexOf("*"),
        uiSchemasFirst: UiSchema[] = [],
        uiSchemasLast: UiSchema[] = [],
        types = ["object", "array"];

    // 如果存在多个*，则报错
    if (uiSchemas.lastIndexOf("*") !== idx) {
        // if (!isProd) {
        //     // throw new Error("uiSchema can only has one *.");
        //     warn("uiSchema can only has one *.");
        // }

        invariant(false, "uiSchema can only has one *.");

        return [];
    }

    // 不存在*号的情况
    if (idx < 0) {
        uiSchemas.slice(idx + 1).map((us: string | UiSchema) => {
            let uiSchema = initUiSchema(parent, schemaPath, us.constructor === String ? {key: us} as UiSchema : us as UiSchema);

            uiSchemasFirst.push(mergeUiSchemaToArray(uiSchema));
        });

        return uiSchemasFirst;
    }

    // 处理*之前的数据
    uiSchemas.slice(0, idx).forEach((us: string | UiSchema) => {
        let uiSchema = initUiSchema(parent, curSchema.schemaPath || schemaPath, us.constructor === String ? {key: us} as UiSchema : us as UiSchema);

        uiSchemasFirst.push(mergeUiSchemaToArray(uiSchema));
    });

    // 处理*之后的数据
    uiSchemas.slice(idx + 1).forEach((us: string | UiSchema) => {
        let uiSchema = initUiSchema(parent, curSchema.schemaPath || schemaPath, us.constructor === String ? {key: us} as UiSchema : us as UiSchema);

        uiSchemasLast.push(mergeUiSchemaToArray(uiSchema));
    });

    // 如果是object类型，遍历properties属性，与之前的数据去重后添加到数组
    if (curSchema.type === types[0] && curSchema.properties) {
        Object.keys(curSchema.properties).forEach((us: string) => {
            const uiSchema = initUiSchema(parent, curSchema.schemaPath || schemaPath, {
                key: us,
                isRequired: curSchema.required ? curSchema.required.indexOf(us) >= 0 : false
            } as UiSchema);

            pushMergeResult(uiSchemasFirst, uiSchemasLast, uiSchema);
        });
    }

    // 如果是数组，获取下一级的key，然后做对比处理
    if (curSchema.type === types[1] && curSchema.items) {
        const uiSchema = initUiSchema(parent, curSchema.schemaPath || schemaPath, {
            key: "-"
        });

        pushMergeResult(uiSchemasFirst, uiSchemasLast, uiSchema);
    }

    // 是普通对象
    if (types.indexOf(curSchema.type as string) < 0) {
        let uiSchema = initUiSchema(parent, schemaPath, {
            key: getDataKeysBySchemaKeys(curSchema.schemaPath || "", false).join("/")
        });

        pushMergeResult(uiSchemasFirst, uiSchemasLast, uiSchema);
    }

    return uiSchemasFirst.concat(uiSchemasLast);
};

/**
 * 用来转换uiSchema的类, 如果有$ref，则直接使用
 * @param schemaPath {String}                     schema的路径
 * @param parent     {UiSchema}                   父scehma
 * @param uiSchemas  {Array<UiSchema | string>}   需要合并的uiSchemas
 */
export const merge = (schemaPath: string, parent?: UiSchema, uiSchemas?: Array<UiSchema | string>): UiSchema[] => {
    // 获取schemaPath对应的schemaId
    let keyPath: string = getDataKeysBySchemaKeys(schemaPath, true).join("/");

    // 如果keyPath还没有解析，则报错
    if (!schemaKeysFactory.has(keyPath)) {
        // if (!isProd) {
        //     warn(`${keyPath} not exist or ${keyPath} did not resolve yet.`);
        // }

        invariant(false, `${keyPath} not exist or ${keyPath} did not resolve yet.`);

        return [];
    }

    // 获取当前的schemaField
    const curSchema = schemaFieldFactory.get(schemaKeysFactory.get(keyPath));

    // 去掉$id这个字段
    if (curSchema.$id) {
        if (!curSchema.$ref) {
            curSchema.$ref = curSchema.$id;
        }
        curSchema.$id = undefined;
        delete curSchema.$id;
    }

    // 合并schema
    return initMergeSchema(parent, schemaPath, uiSchemas || ["*"], curSchema);
}
