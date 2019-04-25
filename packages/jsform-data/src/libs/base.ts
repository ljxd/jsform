import invariant from "invariant";

import {JSFormData, JSFormDataModel} from "../models/data";
import {TreeMap} from "../../../jsform-core/src/libs/tree";



// const checkJSFormData

// export class JSFormDataBase<GD, GM> implements JSFormData<GD, GM> {
// 	/**
// 	 * Creates an instance of JSFormDataBase.
// 	 * @param {JSFormData<GD, GM>} actualJSFormData 传入实际的
// 	 * @memberof JSFormDataBase
// 	 */
// 	constructor(private actualJSFormData: JSFormData<GD, GM>) {}
// 	/**
// 	 * 判定是否传入了真实的JSFormData
// 	 * @private
// 	 * @returns {boolean}
// 	 * @memberof JSFormDataBase
// 	 */
// 	private checkJSFormData(): JSFormData<GD, GM> {
// 		invariant(!!this.actualJSFormData, "JSFormData没有初始化!");

// 		return this.actualJSFormData;
// 	}
// 	public getFormStore(): {[key: string]: JSFormDataModel<GD, GM>} {
// 		return this.checkJSFormData().getFormStore();
// 	}
// 	public createForm(_formKey: string, defaultData?: GD, defaultMeta?: TreeMap<GM>): JSFormDataModel<GD, TreeMap<GM>> {
// 		return {
// 			data: defaultData || (null) as any,
// 			meta: defaultMeta || new TreeMap<GM>("root", {})
// 		};
// 	}
// 	public removeForm(_formKey: string) {}
// 	public resetForm(formKey: string, defaultData?: GD, defaultMeta?: TreeMap<GM>): JSFormDataModel<GD, GM> {
// 		return this.checkJSFormData().resetForm(formKey, defaultData, defaultMeta);
// 	}
// 	public updateItemData<D>(formKey: string, keys: Array<string | number>, data: D): JSFormDataModel<GD, GM> {
// 		return this.checkJSFormData().updateItemData<D>(formKey, keys, data);
// 	}
// 	public updateItemMeta<M>(formKey: string, keys: Array<string | number>, meta: TreeMap<M>, isMerge = true): JSFormDataModel<GD, GM> {
// 		return this.checkJSFormData().updateItemMeta<M>(formKey, keys, meta, isMerge);
// 	}
// 	public removeItem(formKey: string, keys: Array<string | number>, keepData: boolean, keepMeta: boolean): JSFormDataModel<GD, GM> {
// 		return this.checkJSFormData().removeItem(formKey, keys, keepData, keepMeta);
// 	}
// 	public addArrayItem<D, M>(formKey: string, keys: Array<string | number>, data?: D, meta?: TreeMap<M>): JSFormDataModel<GD, GM> {
// 		return this.checkJSFormData().addArrayItem<D, M>(formKey, keys, data, meta);
// 	}
// 	public removeArrayItem(formKey: string, keys: Array<string | number>, index: number): JSFormDataModel<GD, GM> {
// 		return this.checkJSFormData().removeArrayItem(formKey, keys, index);
// 	}
// 	public moveArrayItem(formKey: string, keys: Array<string | number>, currentIndex: number, toIndex: number): JSFormDataModel<GD, GM> {
// 		return this.checkJSFormData().moveArrayItem(formKey, keys, currentIndex, toIndex);
// 	}
// 	public getFormData(formKey: string): JSFormDataModel<GD, GM> {
// 		return this.checkJSFormData().getFormData(formKey);
// 	}
// 	public getItemData<D>(formKey: string, keys: Array<string | number>): D {
// 		return this.checkJSFormData().getItemData<D>(formKey, keys);
// 	}
// 	public getItemMeta<M>(formKey: string, keys: Array<string | number>): TreeMap<M> {
// 		return this.checkJSFormData().getItemMeta<M>(formKey, keys);
// 	}
// 	public getItemDataAndMeta<D, M>(formKey: string, keys: Array<string | number>): JSFormData<D, M> {
// 		return this.checkJSFormData().getItemDataAndMeta<D, M>(formKey, keys);
// 	}
// }