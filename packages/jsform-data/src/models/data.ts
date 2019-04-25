import {TreeMap} from "../../../jsform-core/src/libs/tree";

export interface JSFormDataModel<D, M> {
	data: D;
	meta: TreeMap<M>;
}

/**
 * JSFormData 接口类
 * @export
 * @interface JSFormData
 * @template GD 数据的类型
 * @template GM Meta的类型
 */
export interface JSFormData<GD, GM> {
	/**
	 * 获取所有的表单存储数据
	 * @returns {{[key:string]:JSFormDataModel<GD, GM>}}
	 * @memberof JSFormData
	 */
	getFormStore(): {[key: string]: JSFormDataModel<GD, GM>};
	/**
	 * 创建Form，初始化Form数据
	 * 返回创建Form的数据结构
	 * @param 	 {GD}        [defaultData] 				默认Data
	 * @param 	 {GM}        [defaultMeta]				默认Meta
	 * @returns  {JSFormDataModel<D, M>}                表单的数据
	 * @memberof JSFormData
	 */
	createForm(defaultData?: GD, defaultMeta?: TreeMap<GM>): JSFormDataModel<GD, GM>;
	/**
	 * 删除Form，以及所有的数据
	 * @param    {string}    formKey                    表单唯一标志，如果重复，则使用同一份数据
	 * @memberof JSFormData
	 */
	removeForm(formKey: string): void;
	/**
	 * 重置表单数据
	 * 返回更新后的表单数据结构
	 * @param    {JSFormDataModel<GD, GM>}    formData                  表单数据
	 * @param 	 {GD}                         [defaultData] 			默认Data
	 * @param 	 {GM}                         [defaultMeta]				默认Meta
	 * @returns {JSFormDataModel<GD, GM>}								表单的数据
	 * @memberof JSFormData
	 */
	resetForm(formData: JSFormDataModel<GD, GM>, defaultData?: GD, defaultMeta?: TreeMap<GM>): JSFormDataModel<GD, GM>;
	/**
	 * 更新Form中单个元素的数据
	 * 返回更新后的表单数据结构
	 * @template D data的类型
	 * @param   {JSFormDataModel<GD, GM>}   formData    表单数据
	 * @param   {(Array<string | number>)}  keys        元素的json路径
	 * @param   {D} 						data        需要更新的数据
	 * @returns {JSFormDataModel<D, M>}                 表单的数据
	 * @memberof JSFormData
	 */
	updateItemData<D>(formData: JSFormDataModel<GD, GM>, keys: Array<string | number>, data: D): JSFormDataModel<GD, GM>;
	/**
	 * 更新Form中单个元素的Meta
	 * 返回更新后的表单数据结构
	 * @template M meta的类型
	 * @param   {JSFormDataModel<GD, GM>}   formData    表单数据
	 * @param   {(Array<string | number>)}  keys        元素的json路径
	 * @param   {D} 						meta        需要更新的meta
	 * @param   {boolean}					isMerge     需要合并Meta
	 * @returns {JSFormDataModel<D, M>}                 表单的数据
	 * @memberof JSFormData
	 */
	updateItemMeta<M>(formData: JSFormDataModel<GD, GM>, keys: Array<string | number>, meta: TreeMap<M>, isMerge: boolean): JSFormDataModel<GD, GM>;
	/**
	 * 删除一个元素
	 * 删除元素的Data和Meta
	 * 返回更新后的表单数据结构
	 * @param    {JSFormDataModel<GD, GM>}      formData    表单数据
	 * @param    {(Array<string | number>)}     keys        元素的json路径
	 * @param    {boolean}  					keepData    是否保留Data
	 * @param    {boolean}  					keepMeta    是否保留Meta
	 * @returns  {JSFormDataModel<D, M>}                    返回更新后的表单数据结构
	 * @memberof JSFormData
	 */
	removeItem(formData: JSFormDataModel<GD, GM>, keys: Array<string | number>, keepData: boolean, keepMeta: boolean): JSFormDataModel<GD, GM>;
	/**
	 * 数组元素中添加一个子元素
	 * 返回更新后的表单数据结构
	 * @template D
	 * @template M
	 * @param    {JSFormDataModel<GD, GM>}   formData    表单数据
	 * @param    {(Array<string | number>)}  keys        父元素的json路径
	 * @param    {D}                         [data]      子元素的Data
	 * @param    {M}                         [meta]      子元素的Meta
	 * @returns  {JSFormDataModel<GD, GM>}				 返回更新后的表单数据结构
	 * @memberof JSFormData
	 */
	addArrayItem<D, M>(formData: JSFormDataModel<GD, GM>, keys: Array<string | number>, data?: D, meta?: TreeMap<M>): JSFormDataModel<GD, GM>;
	/**
	 * 数组元素中添加一个子元素
	 * 返回更新后的表单数据结构
	 * @template D
	 * @template M
	 * @param    {JSFormDataModel<GD, GM>}   formData    表单数据
	 * @param    {(Array<string | number>)}  keys        父元素的json路径
	 * @param    {number}                    index       子元素的Meta
	 * @returns  {JSFormDataModel<GD, GM>}				 返回更新后的表单数据结构
	 * @memberof JSFormData
	 */
	removeArrayItem(formData: JSFormDataModel<GD, GM>, keys: Array<string | number>, index: number): JSFormDataModel<GD, GM>;
	/**
	 * 数组元素移动位置
	 * 返回更新后的表单数据结构
	 * @param    {JSFormDataModel<GD, GM>}   formData     表单数据
	 * @param    {(Array<string | number>)}  keys         父元素的json路径
	 * @param    {number} 					currentIndex  当前元素的索引
	 * @param    {number} 					toIndex       需要移动到的索引
	 * @returns  {JSFormDataModel<GD, GM>}				  返回更新后的表单数据结构
	 * @memberof JSFormData
	 */
	moveArrayItem(formData: JSFormDataModel<GD, GM>, keys: Array<string | number>, currentIndex: number, toIndex: number): JSFormDataModel<GD, GM>;
	/**
	 * 获取单个表单的数据
	 * 包括Data和Meta
	 * @param    {string}    				formKey      表单唯一标志，如果重复，则使用同一份数据
	 * @returns  {JSFormDataModel<GD, GM>}
	 * @memberof JSFormData
	 */
	getFormData(formKey: string): JSFormDataModel<GD, GM>;
	/**
	 * 获取单个元素的Data
	 * 返回数据类型
	 * @template D
	 * @param    {JSFormDataModel<GD, GM>}   formData    表单数据
	 * @param    {(Array<string | number>)}  keys        父元素的json路径
	 * @returns  {D}
	 * @memberof JSFormData
	 */
	getItemData<D>(formData: JSFormDataModel<GD, GM>, keys: Array<string | number>): D;
	/**
	 * 获取单个元素的Meta
	 * 返回数据类型
	 * @template M
	 * @param    {JSFormDataModel<GD, GM>}   formData    表单数据
	 * @param    {(Array<string | number>)}  keys        父元素的json路径
	 * @returns  {M}
	 * @memberof JSFormData
	 */
	getItemMeta<M>(formData: JSFormDataModel<GD, GM>, keys: Array<string | number>): TreeMap<M>;
	/**
	 * 获取单个元素的Data和Meta
	 * @template D
	 * @template M
	 * @param    {JSFormDataModel<GD, GM>}   formData    表单数据
	 * @param    {(Array<string | number>)}  keys        父元素的json路径
	 * @returns  {JSFormData<D, M>}
	 * @memberof JSFormData
	 */
	getItemDataAndMeta<D, M>(formData: JSFormDataModel<GD, GM>, keys: Array<string | number>): JSFormData<D, M>;
}
