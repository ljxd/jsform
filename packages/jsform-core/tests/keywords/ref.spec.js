import { assert, expect } from "chai";

import ref from "../../out/keywords/ref";

describe("key word of ref", () => {
    let testSchema = {
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
    };

    it("ref被替换成了对应的JsonSchema", () => {
        let schema = ref("", testSchema);

        expect(schema).to.be.a("object");
        expect(schema.oneOf.length).to.equal(2);
        expect(schema.oneOf[0].$ref).to.equal("test2#");
        expect(schema.oneOf[1].$ref).to.equal("test1#");
    });
});
