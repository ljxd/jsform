import { FxJsonSchema } from "./jsonschema";
/**
 * uiSchema的模型schema
 */
export declare const uiSchemaSchema: {
    type: string;
    items: {
        anyOf: ({
            type: string;
            minLength: number;
            required?: undefined;
            properties?: undefined;
        } | {
            type: string;
            required: string[];
            properties: {
                key: {
                    type: string;
                };
            };
            minLength?: undefined;
        })[];
    };
};
export interface UiSchema extends FxJsonSchema {
    key: string;
    keys?: Array<string | number>;
    originKeys?: Array<string | number>;
    children?: Array<UiSchema | string>;
    refKeys?: string[];
}
//# sourceMappingURL=uischema.d.ts.map