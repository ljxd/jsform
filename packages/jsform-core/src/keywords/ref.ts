import {JSONSchema6} from "json-schema";
import invariant from "invariant";

import {getDataKeys, getSchemaId} from "../libs/resolve";
import {schemaFieldFactory} from "../factory";

/**
 * 解析schema中的关键字 ref
 * @param  {string}      $id    当前的schema的ID
 * @param  {JSONSchema6} schema 当前的schema
 * @return {JSONSchema6}        处理过后的schema
 */
export default ($id: string, schema: JSONSchema6) => {
    if (schema && schema.$ref) {
        const schemaId = getSchemaId(schema.$ref);
        let refName = schema.$ref;

        if (schema.$id) {
            refName = schema.$id + schema.$ref;
        } else if (!schemaId) {
            refName = getSchemaId($id) + schema.$ref;
        }
        schema.$ref = refName;

        if (!schemaFieldFactory.has(refName)) {
            // throw new Error(`不存在Key为[${refName}]的schema!`);
            schemaFieldFactory.add(refName, {});
        }

        const refSchema = schemaFieldFactory.get(refName);

        if (refSchema) {
            let schemaAjv = Object.assign({}, refSchema) as JSONSchema6;

            schemaAjv.$ref = refName;
            delete schemaAjv.$id;

            Object.assign(schemaAjv, {
                refKeys: getDataKeys(refName)
            });

            return schemaAjv;
        }

        invariant(false, `${refName} not exist.`);
    }

    return schema;
};
