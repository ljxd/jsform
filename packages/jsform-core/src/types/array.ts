import {JSONSchema6} from "json-schema";

import {resolve, getDataKeys} from "../libs/resolve";

const itemsName = "items";

/**
 * 解析schema中的type=array的结构
 * 如果存在items,则继续解析schema.item
 * @param  {JSONSchema6} schema    当前的schema
 * @param  {String}      schemaKey 当前的schemaKey
 * @return {JSONSchema6}           返回处理过后的schema
 */
export default (schemaKey: string, schema: JSONSchema6) => {
    let {items} = schema;

    if (items) {
        const mergeSchema = resolve(items as JSONSchema6, [schemaKey, itemsName].join("/")),
            keys: string[] = getDataKeys([schemaKey, itemsName].join("/"));

        Object.assign(mergeSchema, {
            keys
        });
    }

    return schema;
};
