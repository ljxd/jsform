import { assert, expect } from "chai";

import { resolve, schemaFieldFactory, schemaKeysFactory } from "../../out/index";
import { merge } from "../../out/libs/merge";

describe("测试merge文件", () => {
    before(() => {
        schemaFieldFactory.clear();
        schemaKeysFactory.clear();

        let b = [
            resolve({
                type: "string",
                $id: "simpleString"
            }),
            resolve({
                type: "object",
                $id: "design1",
                required: [ "name", "dsModelIds" ],
                properties: {
                    name: {
                        type: "string",
                        title: "面板名称"
                    }
                }
            }),
            resolve({
                type: "object",
                $id: "design2",
                required: [ "name", "dsModelIds" ],
                properties: {
                    name: {
                        $ref: "design1#/properties/name"
                    }
                }
            }),
            resolve({
                type: "object",
                $id: "design",
                required: [ "name", "dsModelIds" ],
                properties: {
                    name: {
                        $ref: "design2#/properties/name"
                    },
                    description: {
                        type: "string",
                        title: "面板详情"
                    },
                    appType: {
                        oneOf: [
                            {
                                title: "应用类型",
                                $ref: "design-object#"
                            },
                            {
                                $ref: "design-string#",
                                title: "应用类型"
                            }
                        ]
                    },
                    dsModelIds: {
                        type: "array",
                        items: {
                            type: "object",
                            properties: {
                                name: {
                                    type: "string"
                                }
                            }
                        }
                    },
                    dsModelData: {
                        type: "object",
                        properties: {
                            data: {
                                type: "object"
                            },
                            ids: {
                                type: "object"
                            }
                        }
                    },
                    infoOptions: {
                        type: "array",
                        items: {
                            type: "object",
                            properties: {
                                label: {
                                    type: "string"
                                },
                                data: {
                                    oneOf: [
                                        {
                                            $id: "design-object",
                                            type: "object",
                                            properties: {
                                                name: {
                                                    type: "string"
                                                },
                                                password: {
                                                    type: "string"
                                                }
                                            }
                                        },
                                        {
                                            $id: "design-string",
                                            type: "string"
                                        }
                                    ]
                                },
                                infoOptions: {
                                    $ref: "design#/properties/infoOptions"
                                }
                            }
                        }
                    }
                }
            })
        ];
    });

    it("测试merge方法", () => {
        let merged = merge("design", null, [ "*" ]);
        let merged1 = merge("design", null, [ "name", "dsModelIds" ]);

        expect(merged).to.be.a("array");
        expect(merged.length).to.equal(6);
        expect(merged1.length).to.equal(2);
        expect(merged1[0].keys.join()).to.equal([ "name" ].join());
    });

    it("测试merge方法，填写错误的schemaPath=design1，返回错误：'design1 not exist or design1 did not resolve yet.'", () => {
        assert.throw(() => {
            merge("design1", [], [ "*" ]);
        });
    });

    it("测试uiSchema的数据合并", () => {
        let merged = merge("design", null, [
            "name",
            {
                key: "dsModelIds",
                title: "测试Title"
            },
            "*",
            "name"
        ]);

        expect(merged[1].title).to.equal("测试Title");
        expect(merged[0].schemaPath).eq(merged[merged.length-1].schemaPath);
    });

    it("schema取一个数组字段", () => {
        let merged = merge("design", null, [ "dsModelIds/-" ]);
        let merged1 = merge("design", null, [ "*" ]);
        let merged2 = merge("design", null, [ "dsModelIds/-/name" ]);

        expect(merged[0].keys.join()).to.equal([ "dsModelIds", "-" ].join());
        expect(merged2[0].keys.join()).to.equal([ "dsModelIds", "-", "name" ].join());
    });

    it("测试type为string", () => {
        let merged = merge("simpleString", null, [ "/" ]);

        expect(merged.length).to.equal(1);
        expect(merged[0].keys.join("")).to.equal("");
        // console.log(merge);
    });

    it("测试无限级数组", () => {
        let merged = merge("design", null, [ "infoOptions/-" ]);
        let merged1 = merge(merged[0].schemaPath, merged[0], [ "infoOptions" ]);
        let merged2 = merge(merged1[0].schemaPath, merged1[0], [ "-" ]);
        let merged3 = merge(merged2[0].schemaPath, merged2[0], [ "*" ]);
        let merged4 = merge(merged[0].schemaPath, merged[0], [ "infoOptions/-/label" ]);

        expect(merged3.length).to.equal(3);
        expect(merged3[0].keys.join()).to.equal([ "infoOptions", "-", "infoOptions", "-", "label" ].join());
        expect(merged3[1].keys.join()).to.equal([ "infoOptions", "-", "infoOptions", "-", "data" ].join());
        expect(merged3[2].keys.join()).to.equal([ "infoOptions", "-", "infoOptions", "-", "infoOptions" ].join());
        expect(merged3[0].keys.join()).to.equal(merged4[0].keys.join());
    });

    it("测试oneOf的合并", () => {
        let merged = merge("design", null, [ "appType" ]);
        let merged1 = merge(merged[0].oneOf[0].$ref, merged[0], [ "name", "password" ]);

        expect(merged1.length).to.equal(2);
        expect(merged1[0].keys.join()).to.equal([ "appType", "name" ].join());
    });
});
