# 处理jsform中的数据

jsform核心组件，进行数据的整合处理。

## API

> createForm

创建Form并初始化Data和Meta。

```ts
createForm<D, M>(key: string, defaultData: D, defaultMeta: M): void;
```

> updateItemData

更新元素Data

```ts
updateItemData<D, M>(keys: Array<string|number>, data: D, meta: M): void;
```

> updateItemMeta

更新元素Meta

```ts
updateItemData<M>(keys: Array<string|number>, meta: M): void;
```

> addItem

数组格式Data中添加一个元素

```ts
addItem<D>(keys: Array<string|number>, data: D): void;
```

> removeItem

数组格式Data中删除一个元素

```ts
removeItem(keys: Array<string|number>, index: number): void;
```

> moveItemTo

数组格式Data中移动元素位置

```ts
moveItemTo(keys: Array<string|number>, currentIndex: number, toIndex: number): void;
```

> removeForm

删除Form并清除Form中的Data和Meta

```ts
removeForm(key: string): void;
```

> resetForm

初始化form，重置Form中的Data和Meta

```ts
resetForm<D, M>(key: string, defaultData: D, defaultMeta: M): void;
```

> removeMeta

删除Meta数据

```ts
removeMeta<M>(keys: Array<string|number>, metaKeys: Array<Array<string|number>): void;
```

> getItemData

获取元素的Data

```ts
getItemData<D>(keys: Array<string|number>): D;
```

> getItemMeta

获取元素的Meta

```ts
getItemMeta<M>(keys: Array<string|number>): D;
```