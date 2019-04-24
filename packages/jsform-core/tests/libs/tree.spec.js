import { assert, expect } from "chai";

import { TreeMap } from "../../out/libs/tree";

describe("测试treemap", () => {
    let tree,
        treeValue = {
            test: true
        };

    beforeEach(() => {
        tree = new TreeMap("root", treeValue);

        tree.addChild([ "root", "b", "c" ], {
            valid: true
        });
        tree.addChild([ "root", "b", "c", 0 ], {
            valid: 0
        });
        tree.addChild([ "root", "b", "c", 1 ], {
            valid: 1
        });
        tree.addChild([ "root", "b", "c", 2 ], {
            valid: 2
        });
        tree.addChild([ "root", "b", "c", 3 ], {
            valid: 3
        });
        tree.addChild([ "root", "b", "c", 4 ], {
            valid: 4
        });
        tree.addChild([ "root", "b", "d" ], {
            valid: true
        });
    });

    it("测试根节点数据", () => {
        expect(tree).to.be.a("object");
        expect(tree.value).to.equal(treeValue);
    });

    it("getCurrentKeys方法", () => {
        // let na = tree.addChild([ "root", "a" ], {
        //     valid: false
        // });

        // expect(na.getCurrentKeys().join(".")).eq("root.a");
        // expect(tree.contains("a")).eq(na);

        expect(tree.getCurrentKeys().join(".")).eq("root");
        expect(tree.containPath([ "root", "b", "c" ]).getCurrentKeys().join(".")).eq("root.b.c");
    });

    it("containPath方法", () => {
        // 传入空数组，返回自身
        expect(tree.containPath([])).eq(tree);
        // 传入不存在的key，返回null
        expect(tree.containPath([ 2 ])).eq(null);
    });

    it("getKey方法", () => {
        expect(tree.getKey([])).eq("root");
        expect(tree.containPath([ "b", "c" ]).getKey()).eq("c");
        expect(tree.containPath([ "b", "c", 0 ]).getKey()).eq("0");
    });

    it("addChild方法", () => {
        let root = tree.addChild([]);
        let na = tree.addChild([ "root", "a" ], {
            valid: false
        });
        let na0 = tree.addChild([ "root", "a", 0 ], {
            valid: false
        });
        let nd0 = tree.addChild([ "root", "d", 0 ], {
            valid: false
        });
        let nd1 = tree.addChild([ "root", "d", 0 ], {
            valid: false
        });

        expect(na.value.valid).eq(false);
        expect(root).eq(tree);
        expect(na.children.length).eq(1);
        expect(na.parent).eq(root);
        expect(na0.parent).eq(na);
        expect(nd0).eq(root.containPath([ "d", 0 ]));
        expect(nd0).eq(nd1);
    });

    it("getIndexFromParent方法", () => {
        let nac3 = tree.containPath([ "root", "b", "c", 3 ]);
        let nac5 = tree.containPath([ "root", "b", "c", 5 ]);

        expect(nac3.getIndexInParent()).eq(3);
        expect(nac5).eq(null);
        expect(tree.getIndexInParent()).eq(-1);
    });

    it("contains方法", () => {
        let nac = tree.containPath([ "root", "b", "c" ]);
        let nac3 = tree.containPath([ "root", "b", "c", 3 ]);

        nac3.insertToFromParent(9);

        expect(nac.contains(3)).equal(nac.containPath([ 3 ]));
        expect(nac.contains(8)).not.equal(null);
        expect(nac.contains(10)).equal(null);
    });

    it("removeFromParent方法", () => {
        let nac = tree.containPath([ "root", "b", "c" ]);
        let nac3 = tree.containPath([ "root", "b", "c", 3 ]);

        expect(nac.children.length).eq(5);
        nac3.removeFromParent();
        expect(nac.children.length).eq(4);

        tree.removeFromParent();
    });

    it("insertToFromParent，当前节点移动到小于当前节点的位置", () => {
        let nac3 = tree.containPath([ "root", "b", "c", 3 ]);
        let nbd = tree.containPath([ "root", "b", "d" ]);

        // 移动到位置1
        nac3.insertToFromParent(1);
        expect(nac3).eq(tree.containPath([ "root", "b", "c", 1 ]));

        // 移动到位置3
        nac3.insertToFromParent(3);
        expect(nac3).eq(tree.containPath([ "root", "b", "c", 3 ]));

        // 移动到异常位置
        nac3.insertToFromParent(-1);
        expect(nac3).eq(tree.containPath([ "root", "b", "c", 3 ]));

        // children.length 为 0的情况
        nbd.insertToFromParent(1);
        expect(nbd.children.length).eq(0);

        tree.insertToFromParent(1);
    });

    it("forEach，遍历节点", () => {
        let nodeCount = 0;
        let nbd = tree.containPath([ "root", "b", "d" ]);

        tree.forEach((node) => {
            nodeCount++;
            return node.value;
        }, false);

        expect(nodeCount).to.equal(8);
        nodeCount = 0;
        tree.forEach((node) => {
            nodeCount++;
            return node.value;
        }, true);

        expect(nodeCount).to.equal(9);

        nodeCount = 0;
        nbd.forEach(() => {
            nodeCount++;
        }, false);
        expect(nodeCount).to.equal(0);

        nbd.addChild([5]);
        nodeCount = 0;
        nbd.forEach(() => {
            nodeCount++;
        }, false);
        expect(nodeCount).to.equal(1);

    });
});
