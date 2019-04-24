import { assert, expect } from "chai";

import { schemaFieldFactory, schemaKeysFactory, resolve, getDataKeysBySchemaKeys, getSchemaId } from "../../dist/index.dev";
// import { resolve } from "../../dist/index.dev";

describe("测试resolve文件", () => {
    before(() => {
        schemaFieldFactory.clear();
        schemaKeysFactory.clear();
    });

    it("resolve方法测试，返回正确的schema", () => {
        let schema = resolve({
            $id: "test",
            type: "string"
        });

        expect(schema).to.be.a("object");
    });

    it("resolve方法测试，返回错误信息：'id is required by fx-schema-form-core'", () => {
        assert.throw(() => {
            resolve({
                type: "string"
            });
        });
    });

    it("getDataKeysBySchemaKeys方法测试", () => {
        expect(getDataKeysBySchemaKeys("test#/properties/name").join("")).to.equal("name");
        expect(getDataKeysBySchemaKeys("test#/properties/name", true).join(".")).to.equal("test.name");
        // expect(getDataKeysBySchemaKeys("test/properties/name")).to.equal("test");
    });

    it("getSchemaId测试", () => {
        expect(getSchemaId("test#/properties/name")).to.equal("test");
        expect(getSchemaId("test#/properties/names/items")).to.equal("test");
        // assert.throw(() => {
        //     getSchemaId("properties/names/items");
        // });
    });

    it("测试isRequired", () => {
        let schema = {
            type: "object",
            $id: "dnd-oneof",
            title: "oneof测试schema",
            default: {},
            required: [ "type" ],
            properties: {
                type: {
                    type: "number",
                    enum: [ 1, 2, 3, 4 ],
                    title: "类型选择",
                    description: "1:数字,2:字符串,3:bool,4:object"
                },
                value: {
                    oneOf: [
                        {
                            $id: "dnd-oneof-number",
                            type: "number",
                            title: "这是一个数字类型"
                        },
                        {
                            $id: "dnd-oneof-string",
                            type: "string",
                            title: "这是一个字符串类型"
                        },
                        {
                            $id: "dnd-oneof-boolean",
                            type: "boolean",
                            title: "这是一个bool类型"
                        },
                        {
                            $id: "dnd-oneof-object",
                            type: "object",
                            title: "这是一个object类型",
                            default: {},
                            required: [ "a", "b" ],
                            properties: {
                                a: {
                                    type: "string",
                                    default: "nick"
                                },
                                b: {
                                    type: "boolean",
                                    default: true
                                }
                            }
                        }
                    ]
                }
            }
        };

        resolve(schema);

        expect(schemaFieldFactory.get("dnd-oneof#/properties/type").isRequired).to.eq(true);
        expect(schemaFieldFactory.get("dnd-oneof#/properties/value").isRequired).to.eq(false);
    });
});
