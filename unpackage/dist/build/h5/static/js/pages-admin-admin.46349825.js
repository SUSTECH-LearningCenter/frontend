(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-admin-admin"],{3370:function(e,a,t){"use strict";t.r(a);var n=t("7e8f"),r=t.n(n);for(var o in n)"default"!==o&&function(e){t.d(a,e,(function(){return n[e]}))}(o);a["default"]=r.a},"644b":function(e,a,t){var n=t("24fb");a=n(!1),a.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 头条小程序组件内不能引入字体 */\nuni-page-body[data-v-7298b50c]{display:flex;flex-direction:column;box-sizing:border-box;background-color:#efeff4;min-height:100%;height:auto}uni-view[data-v-7298b50c]{font-size:14px;line-height:inherit}.example[data-v-7298b50c]{padding:0 15px 15px}.example-info[data-v-7298b50c]{padding:15px;color:#3b4144;background:#fff}.example-body[data-v-7298b50c]{\ndisplay:flex;\nflex-direction:row;flex-wrap:wrap;justify-content:center;padding:0;font-size:14px;background-color:#fff}\n.example[data-v-7298b50c]{padding:0 15px}.example-info[data-v-7298b50c]{\ndisplay:block;\npadding:15px;color:#3b4144;background-color:#fff;font-size:14px;line-height:20px}.example-info-text[data-v-7298b50c]{font-size:14px;line-height:20px;color:#3b4144}.example-body[data-v-7298b50c]{flex-direction:column;padding:15px;background-color:#fff}.word-btn-white[data-v-7298b50c]{font-size:18px;color:#fff}.word-btn[data-v-7298b50c]{\ndisplay:flex;\nflex-direction:row;align-items:center;justify-content:center;border-radius:6px;height:48px;margin:15px;background-color:#007aff}.word-btn--hover[data-v-7298b50c]{background-color:#4ca2ff}.example[data-v-7298b50c]{padding:15px;background-color:#fff}.segmented-control[data-v-7298b50c]{margin-bottom:15px}.button-group[data-v-7298b50c]{margin-top:15px;display:flex;justify-content:space-around}.form-item[data-v-7298b50c]{display:flex;align-items:center}.button[data-v-7298b50c]{display:flex;align-items:center;height:35px;margin-left:10px}body.?%PAGE?%[data-v-7298b50c]{background-color:#efeff4}',""]),e.exports=a},6641:function(e,a,t){"use strict";t.d(a,"b",(function(){return r})),t.d(a,"c",(function(){return o})),t.d(a,"a",(function(){return n}));var n={uniSection:t("c9e3").default,uniForms:t("eb57").default,uniFormsItem:t("fe7f").default,uniEasyinput:t("1571").default},r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-uni-view",[t("uni-section",{attrs:{title:"注意,本页面仅限导生填写",type:"line"}}),t("v-uni-view",{staticClass:"example"},[t("uni-forms",{ref:"form",attrs:{modelValue:e.baseFormData,rules:e.rules}},[t("uni-forms-item",{attrs:{label:"姓名",required:!0,name:"name"}},[t("uni-easyinput",{attrs:{placeholder:"请输入姓名"},model:{value:e.baseFormData.name,callback:function(a){e.$set(e.baseFormData,"name",a)},expression:"baseFormData.name"}})],1),t("uni-forms-item",{attrs:{label:"学号",required:!0,name:"id"}},[t("uni-easyinput",{attrs:{placeholder:"请输入学号"},model:{value:e.baseFormData.id,callback:function(a){e.$set(e.baseFormData,"id",a)},expression:"baseFormData.id"}})],1),t("uni-forms-item",{attrs:{label:"周次",required:!0,name:"week"}},[t("uni-easyinput",{attrs:{placeholder:"请输入周次(1-16)"},model:{value:e.baseFormData.week,callback:function(a){e.$set(e.baseFormData,"week",a)},expression:"baseFormData.week"}})],1),t("uni-forms-item",{attrs:{label:"天次",required:!0,name:"day"}},[t("uni-easyinput",{attrs:{placeholder:"请输入天次(1-7)"},model:{value:e.baseFormData.day,callback:function(a){e.$set(e.baseFormData,"day",a)},expression:"baseFormData.day"}})],1),t("uni-forms-item",{attrs:{label:"时间段",required:!0,name:"time"}},[t("uni-easyinput",{attrs:{placeholder:"请输入时间(9-20),example:输入10,则预约时间为10~11点"},model:{value:e.baseFormData.time,callback:function(a){e.$set(e.baseFormData,"time",a)},expression:"baseFormData.time"}})],1),t("uni-forms-item",{attrs:{label:"密钥",required:!0,name:"code"}},[t("uni-easyinput",{attrs:{placeholder:"请输入管理员密钥"},model:{value:e.baseFormData.code,callback:function(a){e.$set(e.baseFormData,"code",a)},expression:"baseFormData.code"}})],1)],1),t("v-uni-button",{staticStyle:{"background-color":"#DC7004",color:"white"},on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.submit.apply(void 0,arguments)}}},[e._v("提交")])],1)],1)},o=[]},"7e8f":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={data:function(){return{baseFormData:{name:"",id:"",week:"",day:"",time:"",code:""},rules:{name:{rules:[{required:!0,errorMessage:"姓名不能为空"}]},id:{rules:[{required:!0,errorMessage:"学号不能为空"},{format:"number",errorMessage:"只能输入数字"}]},week:{rules:[{required:!0,errorMessage:"周次不能为空"},{format:"number",errorMessage:"只能输入数字"},{maximum:16,minimum:1,errorMessage:"输入的周次有误"}]},day:{rules:[{required:!0,errorMessage:"天数不能为空"},{format:"number",errorMessage:"只能输入数字"},{maximum:7,minimum:1,errorMessage:"输入的天数有误"}]},time:{rules:[{required:!0,errorMessage:"时间不能为空"},{format:"number",errorMessage:"只能输入数字"},{maximum:20,minimum:9,errorMessage:"输入的时间有误"}]}}}},computed:{alignment:function(){return 0===this.current?"left":1===this.current?"top":"left"}},onLoad:function(){},onReady:function(){},methods:{onClickItem:function(e){console.log(e),this.current=e.currentIndex},submit:function(){this.$refs.form.validate().then((function(e){console.log("表单数据信息："+e),uni.request({url:getApp().globalData.url+"api/reserve/post-2",method:"POST",data:{advisorName:e.name,advisorId:e.id,semesterId:1,weekId:e.week,dayId:e.day,timeId:e.time,code:e.code,type:1},success:function(e){console.log("getMachineNum success:"+JSON.stringify(e)),"400"==e.data.code?uni.showToast({title:e.data.message,mask:!1,duration:1500}):uni.showToast({title:"录入导生信息成功",mask:!1,duration:1500})},fail:function(e){console.log("getMachineNum fail:"+JSON.stringify(e))},complete:function(){}})})).catch((function(e){console.log("表单错误信息：",e)}))}}};a.default=n},8589:function(e,a,t){"use strict";t.r(a);var n=t("6641"),r=t("3370");for(var o in r)"default"!==o&&function(e){t.d(a,e,(function(){return r[e]}))}(o);t("fd2d");var i,s=t("f0c5"),u=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"7298b50c",null,!1,n["a"],i);a["default"]=u.exports},d156:function(e,a,t){var n=t("644b");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var r=t("4f06").default;r("5a773b7e",n,!0,{sourceMap:!1,shadowMode:!1})},fd2d:function(e,a,t){"use strict";var n=t("d156"),r=t.n(n);r.a}}]);