import {JSONSchema6} from "json-schema";
import invariant from "invariant";

import {schemaTypeFactory} from "../factory";
import {isString} from "util";

/**
* schema路径解析
* 把schemaPath解析成JsonPath
* 1. 去掉properties，items关键字转换成【 - 】
* 2. 第一个字符去掉末尾的【 # 】
* @example design#/properties/appType => ["appType']
* @example design#/properties/appType/type => ["appType','type']
* @example design#/properties/appType/items/properties/type => ["appType', '-', 'type']
* @param   {String}    schemaPath schemaPath
* @param   {Boolean}   keepFirst  是否需要保留schemaId
* @returns {String[]}             返回数据路径数组
*/
const getDataKeysBySchemaKeys = (schemaPath: string, keepFirst = false): string[] => {
    const regexp = /#$/g;

    return schemaPath.split("/").map((key: string, index: number) => {
        // 第一个替换末尾的#
        if (index === 0 && regexp.test(key)) {
            // 这里是regexp的陷阱,需要修改lastIndex = 0
            // 对于同一个正则表达式对象regex，不能重复调用：第一次返回true，第二次就返回false，很显然这种效果不是我们想要的。
            // 这是因为RegExp.test()方法，第一次从位置0开始查找，可以匹配；第二次的查找位置就不是0了，说以就不能匹配了。
            regexp.lastIndex = 0;

            return keepFirst ? key.replace(regexp, "") : null;
        }

        // 去掉properties
        if (key === "properties") {
            return null;
        }

        // 转换items成-
        if (key === "items") {
            return "-";
        }

        return key;
    }).filter((key: string | null) => {
        return key !== null;
    }) as string[];
};

/**
* 从schemaPath中获取$id
* @param   {String} schemaPath schemaPath
* @returns {String}
*/
const getSchemaId = (schemaPath: string): string => {
    const keys = schemaPath.split("/");
    const regexp = /#$/g;

    if (!keys.length) {
        invariant(false, `${schemaPath} not a valid schemaPath.`);
        return "";
    }

    // if(!regexp.test(keys[0])){
    //     invariant(false, `can not find schemaId`);
    //     return "";
    // }

    return keys[0].replace(regexp, "");
};


/**
* 初始化schema
* 1. 判断$id，如果不存在，报错
* 2. 验证schema的结构是否正确，不正确报错
* @param   {JSONSchema6}  schema  schema
* @returns {JSONSchema6}          处理完成的schema
*/
const initSchema = (schema: JSONSchema6): JSONSchema6 => {
    let $id: string | undefined = schema.$id;

    // 如果没有$id, 同时没有$ref的情况下直接报错
    if (!$id && !schema.$ref) {
        invariant(false, "id is required");
        return schema;
    }

    return schema;
}

/**
 * TODO
 * 遍历schema，生成map
 * 1. 如果schema.type不是string，报错
 * 2. 调用【schemaTypeFactory
 * @param {JSONSchema6} schema  schema
 * @param {String}      $id     id
 */
const compileSchema = ($id: string, schema: JSONSchema6): JSONSchema6 => {
    if (!schemaTypeFactory.has("normal")) {
        return schema;
    }

    const id = $id || (schema.$id || "") + "#";
    let schemaGenera = schemaTypeFactory.get("normal")(id, schema);

    // 如果不存在type，但是$ref则直接返回
    if (!schema.type || schema.$ref) {
        return schemaGenera;
    }

    // 这里只解析type为字符串的结构，不支持数组类型的type
    if (!isString(schema.type)) {
        invariant(false, `schema type[${schema.type}] can only be string.`);
        return schemaGenera;
    }

    const type: string = schema.type.toString();

    // 这里调用相对应的type的方法，来解析schema
    if (schemaTypeFactory.has(type) && ["array", "object"].indexOf(type) >= 0) {
        schemaGenera = schemaTypeFactory.get(type)(id, schema);
    }

    return schemaGenera;
}

/**
 * 解析schema
 * @param  {JSONSchema6}   schema      需要处理的JsonSchema
 * @param  {String}        $id         JsonSchema 的id
 * @returns {JSONSchema6}              返回处理过后的JsonSchema
 */
const resolve = (schema: JSONSchema6, $id = ""): JSONSchema6 => {
    const schemaGenera = !$id ? initSchema(schema) : schema;
    const id = $id || schema.$ref || "";

    // 生成map
    return compileSchema(id, schemaGenera);
}

export {
    getDataKeysBySchemaKeys,
    getSchemaId,
    resolve
}