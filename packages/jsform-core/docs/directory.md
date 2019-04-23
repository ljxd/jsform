### 一.  目录结构

``` js
├── README.md
├── dist             // 编译结果
├── docs             // 文档
├── karma.conf.js    // 单元测试配置文件
├── license
├── package.json
├── src              // 源码部分
│   ├── factory      // 工厂
│   ├── index.ts    
│   ├── keywords     // 关键字解析
│   ├── libs         // TODO
│   ├── models       // TODO
│   ├── types        // 类型解析
│   └── utils        // 工具方法
├── tests            // 单元测试
│   └── utils        // TODO
├── tsconfig.json   
├── tslint.json
└── webpack
    ├── devserver.js
    ├── webpack.dev.config.js   
    └── webpack.prod.config.js
```
---- 
###  二.源码部分
 >  1.  factory : 工厂 

> 2.  keywords：关键字解析
- anyof
- defined
- oneof
- ref

> 3. libs：TODO
- factory
- merge
- resolve
- tree

> 4. models：TODO
- jsonschema
- uischema

> 5. types: 类型解析
- array
- none
- object

> 6. utils：工具方法
：TODO
