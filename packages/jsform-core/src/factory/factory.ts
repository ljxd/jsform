import {JSONSchema6} from "json-schema";

import {BaseFactory} from "../libs/factory";
import {FxJsonSchema} from "../models/jsonschema";

/**
 * 存放解析后的schema
 * @example {
 *  "test1#": {
 *      $id: "test1",
 *      type: "object",
 *      title: "测试的schema",
 *      properties:{
 *           a: {
 *              type: "number"
 *           }       
 *      }
 *  }
 * },
 * "test1#/properties/a": {
 *    type: "number"
 * }
 */
export const schemaFieldFactory = new BaseFactory<FxJsonSchema>();
/**
 * 存放关键字的工厂
 */
export const schemaKeyWordFactory = new BaseFactory<($id: string, schema: JSONSchema6) => JSONSchema6>();
/**
 * 存放类型的工厂
 */
export const schemaTypeFactory = new BaseFactory<($id: string, schema: JSONSchema6) => JSONSchema6>();
/**
 * 存放jsonkey与schemaPath的对应关系
 */
export const schemaKeysFactory = new BaseFactory<string>();