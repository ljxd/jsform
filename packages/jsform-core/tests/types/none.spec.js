import { assert, expect } from "chai";

import { schemaTypeFactory, schemaFieldFactory, schemaKeysFactory, resolve } from "../../dist/index.dev";

describe("普通类型的解析", () => {
    let schema, test;

    before(() => {
        schemaFieldFactory.clear();
        schemaKeysFactory.clear();
        resolve({
            $id: "test1",
            type: "number",
            title: "测试的schema"
        });

        resolve({
            $id: "test2",
            type: "string",
            title: "测试的schema"
        });

        test = resolve({
            $id: "test",
            title: "测试oneof的schema",
            oneOf: [
                {
                    $ref: "test2#"
                },
                {
                    $ref: "test1#"
                }
            ]
        });

        schema = schemaTypeFactory.get("undefined")("test#", test);
    });

    it("oneOf中的schema被替换成了正确的schema;数量为2；$ids = [test2,test1]", () => {
        expect(schema).to.be.a("object");
        expect(schema.oneOf.length).to.equal(2);
        expect(schema.oneOf[0].$ref).to.equal("test2#");
        expect(schema.oneOf[1].$ref).to.equal("test1#");
    });

    it("验证schemaFieldFactory中的key是否正确", () => {
        expect(schemaFieldFactory.has("test#")).to.equal(true);
        expect(schemaFieldFactory.has("test1#")).to.equal(true);
        expect(schemaFieldFactory.has("test2#")).to.equal(true);
    });

    it("验证schemaKeysFactory中的key是否正确", () => {
        expect(schemaKeysFactory.get("test")).to.equal("test#");
        expect(schemaKeysFactory.get("test1")).to.equal("test1#");
        expect(schemaKeysFactory.get("test2")).to.equal("test2#");
    });
});
