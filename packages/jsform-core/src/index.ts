import { ref, oneof, anyof, definitions } from "./keywords";
import { array, none, object } from "./types";
import { schemaFieldFactory, schemaKeyWordFactory, schemaTypeFactory, schemaKeysFactory } from "./factory";

export * from "./models";
export * from "./libs";
export { typeOf, isArray, isNumber, mergeKeys } from "./utils";

schemaKeyWordFactory.add("definitions", definitions)
                    .add("oneof", oneof)
                    .add("anyof", anyof)
                    .add("ref", ref);

schemaTypeFactory.add("array", array)
                .add("string", none)
                .add("undefined", none)
                .add("number", none)
                .add("null", none)
                .add("any", none)
                .add("integer", none)
                .add("boolean", none)
                .add("object", object);

export {
    schemaKeysFactory,
    schemaFieldFactory,
    schemaKeyWordFactory,
    schemaTypeFactory
};
