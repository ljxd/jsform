import { JSONSchema6, JSONSchema6Definition } from "json-schema";

import { resolve, getSchemaId } from "../libs/resolve";
// import MergeLib from "../libs/merge";

/**
 * 解析schema中的关键字 oneOf
 * 如果发现有oneOf关键字，遍历替换成schema
 * @param  {string}      $id    当前的schema的ID
 * @param  {JSONSchema6} schema 当前的schema
 * @return {JSONSchema6}        处理过后的schema
 */
export default ($id: string, schema: JSONSchema6): JSONSchema6 => {
    let anyOf = schema.anyOf;

    if (anyOf && anyOf.constructor !== Array) {
        schema.anyOf = anyOf.map((schemaOfOne: JSONSchema6Definition) => {
            const id = schema.$id || getSchemaId(schema.$ref || "") ? undefined : getSchemaId($id);
            return resolve(schemaOfOne as JSONSchema6, id);
        });
    }

    return schema;
};
