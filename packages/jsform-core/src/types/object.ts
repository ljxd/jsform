import { JSONSchema6 } from "json-schema";
import invariant from "invariant"

import { resolve, getDataKeysBySchemaKeys } from "../libs/resolve";
// import {warn, isProd} from "../utils";

const pro = "properties";

/**
 * 解析schema中的type=object的结构
 * 如果存在schema.properties,则遍历properties，继续解析schema.properties[key]
 * @param  {JSONSchema6} schema    当前的schema
 * @param  {String}      schemaKey 当前的schemaKey
 * @return {JSONSchema6}           返回处理过后的schema
 */
export default (schemaKey: string, schema: JSONSchema6) => {
    const { properties, required = [], $ref } = schema;

    if (properties && !$ref) {
        Object.keys(properties).forEach((key: string) => {
            if ([pro, "items"].indexOf(key) >= 0) {
                // if (!isProd) {
                //     warn(`${key}can not be key words.`);
                // }

                invariant(false, `${key}can not be key words.`);

                return;
            }

            if (!properties || !properties[key]) {
                return;
            }

            Object.assign(properties[key], {
                isRequired: required.indexOf(key) >= 0
            });

            const mergeSchema = resolve(properties[key] as JSONSchema6, [schemaKey, pro, key].join("/")),
                keys: string[] = getDataKeysBySchemaKeys([schemaKey, pro, key].join("/"));

            Object.assign(mergeSchema, {
                keys
            });
        });
    }

    return schema;
};
