(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{167:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"circleprogress-圆形进度条"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#circleprogress-圆形进度条"}},[t._v("#")]),t._v(" CircleProgress 圆形进度条")]),t._v(" "),s("p",[t._v("展示操作或任务的当前进度，比如上传文件，是一个圆形的进度条。"),s("br"),t._v("\n注意：此组件的"),s("code",[t._v("percent")]),t._v("值只能动态增加，不能动态减少，否则无效。")]),t._v(" "),s("h3",{attrs:{id:"内部实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内部实现"}},[t._v("#")]),t._v(" 内部实现")]),t._v(" "),s("p",[t._v("组件内部通过uni的"),s("code",[t._v("canvas")]),t._v("组价实现，有更好的性能和通用性。")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("说明")]),t._v(" "),s("p",[t._v("圆形进度条用简单的css也能实现，为何要用复杂的canvas？这跟uView的愿景相关，我们希望后面扩展出仪表盘，其他复杂图表类的组件，\n而这些组件的实现，不归css管。")])]),t._v(" "),s("h3",{attrs:{id:"平台差异说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#平台差异说明"}},[t._v("#")]),t._v(" 平台差异说明")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("App")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("H5")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("微信小程序")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("支付宝小程序")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("百度小程序")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("头条小程序")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("QQ小程序")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("√")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("√")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("√")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("√")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("√")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("√")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("√")])])])]),t._v(" "),s("h3",{attrs:{id:"基本使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本使用"}},[t._v("#")]),t._v(" 基本使用")]),t._v(" "),s("ul",[s("li",[t._v("通过"),s("code",[t._v("percent")]),t._v("设置当前的进度值，该值区间为0-100.")]),t._v(" "),s("li",[t._v("通过"),s("code",[t._v("active-color")]),t._v("设置圆环的颜色，也可以直接设置"),s("code",[t._v("type")]),t._v("主题颜色，使用预置值")]),t._v(" "),s("li",[t._v("通过默认"),s("code",[t._v("slot")]),t._v("传入内容，将会显示在圆环的内部")])]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("u-circle-progress")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("active-color")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("#2979ff"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":percent")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("80"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("u-progress-content"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("u-progress-dot"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("text")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("u-progress-info"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("查找中"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("text")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("u-circle-progress")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("lang")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("scss"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("scoped")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token style"}},[s("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".u-progress-content")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("align-items")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" center"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("justify-content")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" center"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\n\t"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".u-progress-dot")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 16rpx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 16rpx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-radius")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #fb9126"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\n\t"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".u-progress-info")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 28rpx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding-left")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 16rpx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("letter-spacing")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 2rpx\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h3",{attrs:{id:"设置圆环的动画时间"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置圆环的动画时间"}},[t._v("#")]),t._v(" 设置圆环的动画时间")]),t._v(" "),s("p",[t._v("通过"),s("code",[t._v("duration")]),t._v("设置圆环从0递增到100%(也即一圆周)所需的时间，如需动态修改进度值时会用到，比如用户进行某一个操作之后，\n需要把进度值从30%改为80%，所需的时间将会以"),s("code",[t._v("duration")]),t._v("为依据")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("u-circle-progress")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("primary"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":percent")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("30"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("duration")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("2000"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("u-circle-progress")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h3",{attrs:{id:"api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),s("h3",{attrs:{id:"props"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#props"}},[t._v("#")]),t._v(" Props")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数")]),t._v(" "),s("th",[t._v("说明")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("默认值")]),t._v(" "),s("th",[t._v("可选值")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("percent")]),t._v(" "),s("td",[t._v("圆环进度百分比值，为数值类型，0-100")]),t._v(" "),s("td",[t._v("String | Number")]),t._v(" "),s("td",[t._v("-")]),t._v(" "),s("td",[t._v("-")])]),t._v(" "),s("tr",[s("td",[t._v("un-active-color")]),t._v(" "),s("td",[t._v("圆环的底色，默认为灰色")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("#ececec")]),t._v(" "),s("td",[t._v("-")])]),t._v(" "),s("tr",[s("td",[t._v("active-color")]),t._v(" "),s("td",[t._v("圆环激活部分的颜色")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("#19be6b")]),t._v(" "),s("td",[t._v("-")])]),t._v(" "),s("tr",[s("td",[t._v("width")]),t._v(" "),s("td",[t._v("整个圆环组件的宽度，高度默认等于宽度值，单位rpx")]),t._v(" "),s("td",[t._v("String | Number")]),t._v(" "),s("td",[t._v("200")]),t._v(" "),s("td",[t._v("-")])]),t._v(" "),s("tr",[s("td",[t._v("border-width")]),t._v(" "),s("td",[t._v("圆环的边框宽度，单位rpx")]),t._v(" "),s("td",[t._v("String | Number")]),t._v(" "),s("td",[t._v("14")]),t._v(" "),s("td",[t._v("-")])]),t._v(" "),s("tr",[s("td",[t._v("duration")]),t._v(" "),s("td",[t._v("整个圆环执行一圈的时间，单位ms")]),t._v(" "),s("td",[t._v("String | Number")]),t._v(" "),s("td",[t._v("1500")]),t._v(" "),s("td",[t._v("-")])]),t._v(" "),s("tr",[s("td",[t._v("type")]),t._v(" "),s("td",[t._v("如设置，"),s("code",[t._v("active-color")]),t._v("值将会失效")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("-")]),t._v(" "),s("td",[t._v("success / primary / error / info / warning")])]),t._v(" "),s("tr",[s("td",[t._v("bg-color")]),t._v(" "),s("td",[t._v("整个组件背景颜色，默认为白色")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("#ffffff")]),t._v(" "),s("td",[t._v("-")])])])])])}),[],!1,null,null,null);a.default=e.exports}}]);