(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-home-home"],{"0933":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{}},onLoad:function(){},methods:{back:function(){uni.navigateTo({url:"../choose/choose"})}}};e.default=i},"1de5":function(t,e,n){"use strict";t.exports=function(t,e){return e||(e={}),t=t&&t.__esModule?t.default:t,"string"!==typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},"336e":function(t,e,n){"use strict";n.r(e);var i=n("0933"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"68f0":function(t,e,n){var i=n("24fb"),a=n("1de5"),o=n("c984");e=i(!1);var c=a(o);e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-06c5e2ac]{height:100%;width:100%}.content[data-v-06c5e2ac]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;\n  /* align-items: center; */-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:100%;height:100%;background-image:url('+c+");background-size:cover}.logo[data-v-06c5e2ac]{height:60%;width:60%;margin-top:10%;margin-left:auto;margin-right:auto;margin-bottom:0}.text_all[data-v-06c5e2ac]{height:30%;width:60%;margin-left:20%;margin-right:20%;line-height:%?60?%;font-weight:700;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.text1[data-v-06c5e2ac]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?80?%;margin-bottom:%?100?%;margin-top:%?50?%;text-align:center}.text2[data-v-06c5e2ac]{font-size:%?40?%}.wx_button[data-v-06c5e2ac]{margin-top:0;width:30%;height:10%;border-radius:15%;margin-bottom:0}.wx_button .my_button[data-v-06c5e2ac]{background-color:#1c83ae;color:#fff;font-size:50%}",""]),t.exports=e},"98f1":function(t,e,n){var i=n("68f0");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("e97d0d9c",i,!0,{sourceMap:!1,shadowMode:!1})},a41a:function(t,e,n){"use strict";var i=n("98f1"),a=n.n(i);a.a},c984:function(t,e,n){t.exports=n.p+"static/img/background.70ccf119.jpg"},ce34:function(t,e,n){"use strict";n.r(e);var i=n("f74b"),a=n("336e");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("a41a");var c,r=n("f0c5"),s=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"06c5e2ac",null,!1,i["a"],c);e["default"]=s.exports},f74b:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"text_all"},[n("v-uni-text",{staticClass:"text1"},[t._v("学习中心学业咨询预约程序\\n\\n")]),n("v-uni-text",{staticClass:"text2"},[t._v("“学生学业咨询”是由学工部学习中心主办的朋辈学生学习生活咨询项目，这里可以为你提供学业咨询和指导，使你能够有效地掌握知识和技能，形成解决问题的能力，培养良好的学习习惯。欢迎有需要的同学前来预约！")]),n("v-uni-view",{staticClass:"wx_button",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.back.apply(void 0,arguments)}}},[n("v-uni-button",{staticClass:"my_button",attrs:{type:"default"}},[t._v("返回选择界面")])],1)],1)],1)},o=[]}}]);