(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3fa960c9"],{"695e":function(t,e,l){t.exports={currentColor:"#1890ff"}},ada3:function(t,e,l){"use strict";var a=l("695e"),n=l.n(a);n.a},e6e2:function(t,e,l){"use strict";l.r(e);var a=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("app-view",{staticClass:"app-product"},[l("app-filter",{scopedSlots:t._u([{key:"query",fn:function(){return[l("el-form",{staticClass:"product-form",attrs:{inline:!0,model:t.listQuery,"label-width":"140px",size:"small","label-position":"right"}},[l("el-form-item",{attrs:{label:"输入搜索"}},[l("el-input",{attrs:{placeholder:"商品名称"},model:{value:t.listQuery.keyword,callback:function(e){t.$set(t.listQuery,"keyword",e)},expression:"listQuery.keyword"}})],1),l("el-form-item",{attrs:{label:"商品货号"}},[l("el-input",{attrs:{placeholder:"商品货号"},model:{value:t.listQuery.productSn,callback:function(e){t.$set(t.listQuery,"productSn",e)},expression:"listQuery.productSn"}})],1),l("el-form-item",{attrs:{label:"商品分类"}},[l("el-cascader",{attrs:{clearable:"",options:t.productCateOptions},model:{value:t.selectProductCateValue,callback:function(e){t.selectProductCateValue=e},expression:"selectProductCateValue"}})],1),l("el-form-item",{attrs:{label:"商品品牌"}},[l("el-select",{attrs:{placeholder:"请选择品牌",clearable:""},model:{value:t.listQuery.brandId,callback:function(e){t.$set(t.listQuery,"brandId",e)},expression:"listQuery.brandId"}},t._l(t.brandOptions,function(t){return l("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1),l("el-form-item",{attrs:{label:"上架状态"}},[l("el-select",{attrs:{placeholder:"全部",clearable:""},model:{value:t.listQuery.publishStatus,callback:function(e){t.$set(t.listQuery,"publishStatus",e)},expression:"listQuery.publishStatus"}},t._l(t.publishStatusOptions,function(t){return l("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1),l("el-form-item",{attrs:{label:"审核状态"}},[l("el-select",{attrs:{placeholder:"全部",clearable:""},model:{value:t.listQuery.verifyStatus,callback:function(e){t.$set(t.listQuery,"verifyStatus",e)},expression:"listQuery.verifyStatus"}},t._l(t.verifyStatusOptions,function(t){return l("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1)],1)]},proxy:!0},{key:"left",fn:function(){return[l("el-button",{staticClass:"btn-reset",attrs:{icon:"el-icon-plus",type:"text",size:"small"},on:{click:function(e){return t.addProduct()}}},[t._v("添加商品")])]},proxy:!0},{key:"right",fn:function(){return[l("el-button",{staticClass:"btn-reset",attrs:{icon:"el-icon-back",size:"small"}},[t._v("重置")]),l("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"small"},on:{click:function(e){return t.handleSearch()}}},[t._v("搜索")])]},proxy:!0}])}),l("div",{staticClass:"table-container"},[l("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"productTable",staticClass:"app-table",staticStyle:{width:"100%"},attrs:{data:t.list,border:""},on:{"selection-change":t.handleSelectionChange}},[l("el-table-column",{attrs:{type:"selection",width:"60",align:"center"}}),l("el-table-column",{attrs:{label:"编号",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.id))]}}])}),l("el-table-column",{attrs:{label:"商品图片",width:"120",align:"center"},scopedSlots:t._u([{key:"default",fn:function(t){return[l("el-popover",{attrs:{placement:"right",title:"",trigger:"hover"}},[l("img",{attrs:{src:t.row.pic}}),l("img",{staticStyle:{"max-height":"50px","max-width":"130px"},attrs:{slot:"reference",src:t.row.pic,alt:t.row.pic},slot:"reference"})])]}}])}),l("el-table-column",{attrs:{label:"商品名称",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[l("p",[t._v(t._s(e.row.name))]),l("p",[t._v("品牌："+t._s(e.row.brandName))])]}}])}),l("el-table-column",{attrs:{label:"价格/货号",width:"120",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[l("p",[t._v("价格：￥"+t._s(e.row.price))]),l("p",[t._v("货号："+t._s(e.row.productSn))])]}}])}),l("el-table-column",{attrs:{label:"排序",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.sort))]}}])}),l("el-table-column",{attrs:{label:"销量",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.sale))]}}])}),l("el-table-column",{attrs:{label:"操作",width:"160",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[l("div",{staticClass:"handle-icon"},[l("el-tooltip",{attrs:{placement:"top"}},[l("div",{attrs:{slot:"content"},slot:"content"},[t._v("预览")]),l("i",{staticClass:"el-icon-document",on:{click:function(l){return t.showProduct(e.$index,e.row)}}})]),l("el-tooltip",{attrs:{placement:"top"}},[l("div",{attrs:{slot:"content"},slot:"content"},[t._v("编辑")]),l("i",{staticClass:"el-icon-edit",on:{click:function(l){return t.updateProduct(e.$index,e.row)}}})]),l("el-tooltip",{attrs:{placement:"top"}},[l("div",{attrs:{slot:"content"},slot:"content"},[t._v("删除")]),l("i",{staticClass:"el-icon-delete",on:{click:function(l){return t.handleDelete(e.$index,e.row)}}})])],1)]}}])})],1)],1),l("div",{staticClass:"pagination-container"},[l("el-pagination",{attrs:{background:"",layout:"total, sizes,prev, pager, next,jumper","page-size":t.listQuery.pageSize,"page-sizes":[5,10,15],"current-page":t.listQuery.pageNum,total:t.total},on:{"update:currentPage":function(e){return t.$set(t.listQuery,"pageNum",e)},"update:current-page":function(e){return t.$set(t.listQuery,"pageNum",e)},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)},n=[],r=l("b775");function o(t){return Object(r["a"])({url:"/product/list",method:"get",params:t})}var i={keyword:null,pageNum:1,pageSize:5,publishStatus:null,verifyStatus:null,productSn:null,productCategoryId:null,brandId:null},s={name:"ProductList",data:function(){return{listQuery:Object.assign({},i),list:[],total:0,loading:!0,selectProductCateValue:null,multipleSelection:[],productCateOptions:[],brandOptions:[],publishStatusOptions:[{value:1,label:"上架"},{value:0,label:"下架"}],verifyStatusOptions:[{value:1,label:"审核通过"},{value:0,label:"未审核"}]}},created:function(){this.getList()},methods:{getList:function(){var t=this;this.loading=!0,o(this.listQuery).then(function(e){t.loading=!1,t.list=e.data.list,t.total=e.data.total}).catch(function(e){t.loading=!1})},addProduct:function(){this.$router.push({path:"/product/add"})},handleSearch:function(){},showProduct:function(){},updateProduct:function(){},handleDelete:function(){},handleSelectionChange:function(){},handleSizeChange:function(){},handleCurrentChange:function(){}}},u=s,c=(l("ada3"),l("2877")),d=Object(c["a"])(u,a,n,!1,null,"647572da",null);e["default"]=d.exports}}]);