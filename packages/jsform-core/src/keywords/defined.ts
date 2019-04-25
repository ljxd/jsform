import {JSONSchema6} from "json-schema";

import {resolve} from "../libs/resolve";
import {isBoolean} from "util";

/**
 * 解析schema中的关键字 definitions
 * 如果发现有definitions关键字，解析schema
 * @param  {string}      $id    当前的schema的ID
 * @param  {JSONSchema6} schema 当前的schema
 * @return {JSONSchema6}        处理过后的schema
 */
const defined = (_$id: string, schema: JSONSchema6): JSONSchema6 => {
    const definitions = schema.definitions;

    if (!definitions) {
        return schema;
    }

    for (const key in definitions) {
        if (definitions.hasOwnProperty(key)) {
            const element: JSONSchema6 | boolean = definitions[key];

            if (!isBoolean(element)) {
                // tslint:disable-next-line:no-unused-expression
                resolve(element, `${schema.$id}#/definitions/${key}`);
            }
        }
    }

    return schema;
};

export default defined;