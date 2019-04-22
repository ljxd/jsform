import { hasOwnProperty } from "../utils";

/**
 * 实例的工厂类
 */
export class BaseFactory<T> {
    protected i: { [id: string]: T; } = {};
    private pi: { [id: string]: boolean; } = {};

    /**
     * 添加一个实例
     * @param  {string}  name       实例的名称
     * @param  {T}       instance   实例
     * @param  {boolean} override   是否覆盖
     * @return {void | boolean}     是否添加成功
     */
    public add(name: string, instance: T, override = false): BaseFactory<T> {
        if (hasOwnProperty.call(this.pi, name) || !override && this.has(name)) {
            return this;
        }

        this.i[name] = instance;

        return this;
    }

    /**
     * 是否存在key值
     * @param  {String} key  key值
     * @return {Boolean}
     */
    public has(key: string): boolean {
        return hasOwnProperty.call(this.i, key);
    }

    /**
     * 获取一个实例
     * @param  {String} key   实例标志
     * @return {T}
     */
    public get(key: string): T {
        if (this.has(key)) {
            return this.i[key];
        }

        return null as any;
    }

    /**
     * 锁定实例
     * @param {String} key key
     */
    public lock(key: string): void {
        if (this.has(key)) {
            this.pi[key] = true;
        }
    }

    /**
     * 解锁实例
     * @param key key
     */
    public unLock(key: string): void {
        if (this.has(key)) {
            delete this.pi[key];
        }
    }

    /**
     * 遍历所有的元素
     * @param func 遍历方法
     */
    public forEach(func: (key: string, val: T) => any): void {
        if (!func) {
            return;
        }

        for (const key in this.i) {
            if (this.has(key)) {
                const element = this.i[key];

                if (func(key, element) === false) {
                    break;
                }
            }
        }
    }

    /**
     * 清空当前的hash
     */
    public clear(): void {
        this.i = {};
        this.pi = {};
    }
}
