import { UiSchema } from "../models/uischema";
/**
 * 用来转换uiSchema的类, 如果有$ref，则直接使用
 * @param schemaPath {String}                     schema的路径
 * @param parent     {UiSchema}                   父scehma
 * @param uiSchemas  {Array<UiSchema | string>}   需要合并的uiSchemas
 */
export declare const merge: (schemaPath: string, parent?: UiSchema | undefined, uiSchemas?: (string | UiSchema)[] | undefined) => UiSchema[];
//# sourceMappingURL=merge.d.ts.map