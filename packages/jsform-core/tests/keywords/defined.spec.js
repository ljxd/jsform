import { expect } from "chai";

import { schemaKeyWordFactory, schemaKeysFactory, resolve } from "../../dist/index.dev";

describe("key word of definitions", () => {
    const testSchema = {
        $id: "test",
        type: "object",
        title: "测试的schema",
        definitions: {
            dt: {
                type: "string",
                title: "测试的定义"
            }
        },
        properties: {
            dt: {
                $ref: "test#/definitions/dt"
            }
        }
    };

    before(() => {
        resolve(testSchema);
    });

    it("使用definitions关键字", () => {
        let schema = schemaKeyWordFactory.get("definitions")("", testSchema);

        console.log("djlfkjlakdjflalksdjfklajkldjflkajld")

        expect(schema).to.be.a("object");
        expect(schemaKeysFactory.has("test/definitions/dt")).to.eq(true);
        expect(schemaKeysFactory.get("test/definitions/dt")).to.eq("test#/definitions/dt");
    });
});
