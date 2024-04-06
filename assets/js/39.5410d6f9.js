(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{481:function(t,s,a){t.exports=a.p+"assets/img/1.9f59b3ed.png"},482:function(t,s,a){t.exports=a.p+"assets/img/2.ca0b43f8.png"},509:function(t,s,a){"use strict";a.r(s);var r=a(2),e=Object(r.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"vue3中的v-bind-in-css的基本情况"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue3中的v-bind-in-css的基本情况"}},[t._v("#")]),t._v(" vue3中的v-bind() in CSS的基本情况")]),t._v(" "),s("h3",{attrs:{id:"概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[t._v("#")]),t._v(" 概念")]),t._v(" "),s("p",[t._v("首先，说明一下 指令"),s("a",{attrs:{href:"https://cn.vuejs.org/api/built-in-directives.html#v-bind",target:"_blank",rel:"noopener noreferrer"}},[t._v("v-bind"),s("OutboundLink")],1),t._v(" 和 "),s("a",{attrs:{href:"https://cn.vuejs.org/api/sfc-css-features.html#v-bind-in-css",target:"_blank",rel:"noopener noreferrer"}},[t._v("v-bind in CSS"),s("OutboundLink")],1),t._v("是两个不同的概念，点击链接可以看官网详细的解释，以下是我的理解：")]),t._v(" "),s("p",[t._v("前者是用在template模板中，用来动态绑定参数的内置指令，一般我们用的是"),s("code",[t._v(":")]),t._v("简写。")]),t._v(" "),s("p",[t._v("而后者是用在style标签中，来获取在script中定义css属性值的变量，即我们能够在style标签中引入动态的css变量了。")]),t._v(" "),s("blockquote",[s("p",[t._v("注意，v-bind in css 是vue3新提出的属性，vue2并没有")])]),t._v(" "),s("h3",{attrs:{id:"使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),s("p",[t._v("以组合式的写法为例，在script标签中定义变量，在style标签中通过"),s("code",[t._v("v-bind(变量名)")]),t._v("，就可将css属性值动态设置了")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script setup"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" color "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'skyblue'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("template"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("p"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("hello"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("p"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("template"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("style scoped"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\np "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("color")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" v"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("color"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("style"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("h2",{attrs:{id:"vue2该怎么做"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue2该怎么做"}},[t._v("#")]),t._v(" vue2该怎么做")]),t._v(" "),s("p",[t._v("讲原理之前，先讲一下，在vue3的"),s("code",[t._v("v-bind()")]),t._v("出现前，vue2要想实现这这一功能是该怎么做的")]),t._v(" "),s("h3",{attrs:{id:"核心var"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#核心var"}},[t._v("#")]),t._v(" 核心var()")]),t._v(" "),s("p",[t._v("核心在于"),s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/var",target:"_blank",rel:"noopener noreferrer"}},[t._v("var()函数"),s("OutboundLink")],1),t._v("，注意区别于声明变量的"),s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/var",target:"_blank",rel:"noopener noreferrer"}},[t._v("关键字var"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("p",[t._v("这是一个css函数，在style标签中使用。可以插入一个自定义属性的值，用来代替非自定义属性中值的任何部分。")]),t._v(" "),s("h3",{attrs:{id:"var-的用法示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#var-的用法示例"}},[t._v("#")]),t._v(" var()的用法示例")]),t._v(" "),s("ol",[s("li",[t._v("根元素上设置：")])]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("// 在根元素上定义样式 \n:root")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("--main-bg-color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pink"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("// 其他元素就能使用了，这里就相当于给body的background-color设为pink \nbody")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("var")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("--main-bg-color"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("注意： var()接收两个参数，第一个是定义名，必须以 -- 开头。第二个是后备值，即定义函数不存在时，将取后备值生效，如下的var(--header-color, blue)")])]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("也可在父元素上定义，子元素上使用。")])]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 在父元素样式中定义一个值 */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".component")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("--text-color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #080"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 在 component 的子元素中使用它： */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".component .text")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("var")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("--text-color"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" black"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 此处 color 正常取值 --text-color */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".component .header")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("var")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("--header-color"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" blue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* header-color 没有被设置，将使用回退值 blue */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"在vue2中可以这么做"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在vue2中可以这么做"}},[t._v("#")]),t._v(" 在vue2中可以这么做")]),t._v(" "),s("p",[t._v("在data定义变量"),s("code",[t._v("color")]),t._v("，然后在template模板中，该组件根标签设置style属性对象，定义属性名为css变量名"),s("code",[t._v("--test-color")]),t._v("，属性值为"),s("code",[t._v("color")]),t._v("。这样在style标签中就可以通过var函数传入css变量名"),s("code",[t._v("--test-color")]),t._v("，获得css变量了。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("template"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("style"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'{\"--test-color\":color}'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("template"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" \n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n            "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("color")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'red'")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" \n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("style scoped"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 100px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 100px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n    background"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("color"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("test"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("color"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("yellow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("style"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("h2",{attrs:{id:"原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[t._v("#")]),t._v(" 原理")]),t._v(" "),s("p",[t._v("下图就是"),s("a",{attrs:{href:"#%E4%BD%BF%E7%94%A8"}},[t._v("上面例子")]),t._v("中vue3使用 v-bind() in css 元素检查器的截图")]),t._v(" "),s("p",[s("img",{attrs:{src:a(481),alt:"image"}})]),t._v(" "),s("p",[t._v("可以看到，在使用v-bind in css后，vue3自动在组件根标签生成了"),s("code",[t._v("--7a7a37b1-color")]),t._v("自定义属性，值为我们定义的"),s("code",[t._v("skyblue")]),t._v("，然后在"),s("code",[t._v("p")]),t._v("标签上通过"),s("code",[t._v("var()")]),t._v("函数传入"),s("code",[t._v("--7a7a37b1-color")]),t._v("获取到我们定义的变量。")]),t._v(" "),s("p",[t._v("这就和上面在vue2中的做法一致，只不过在vue3中我们不用手动定义自定义属性到根标签，且不用"),s("code",[t._v("var()")]),t._v("函数。这些都是vue3内部做的，在使用"),s("code",[t._v("v-bind()")]),t._v("后，vue3内部将定义的变量名"),s("code",[t._v("x")]),t._v("生成 "),s("code",[t._v("--hash值-x")]),t._v("自定义属性，设置到根标签style中，然后在v-bind的部分实际上是使用"),s("code",[t._v("var()")]),t._v("传入生成的 "),s("code",[t._v("--hash值-x")]),t._v("自定义属性。可以说"),s("code",[t._v("v-bind()")]),t._v("是vue3出的语法糖。")]),t._v(" "),s("h2",{attrs:{id:"扩展"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#扩展"}},[t._v("#")]),t._v(" 扩展")]),t._v(" "),s("p",[t._v("上面说的核心"),s("code",[t._v("var()")]),t._v("函数插入自定义属性（也称为css变量），在element-plus中有大量使用，"),s("a",{attrs:{href:"https://element-plus.org/zh-CN/guide/theming.html#%E9%80%9A%E8%BF%87-css-%E5%8F%98%E9%87%8F%E8%AE%BE%E7%BD%AE",target:"_blank",rel:"noopener noreferrer"}},[t._v("文档"),s("OutboundLink")],1),t._v("有说明其使用css 变量来重构了几乎所有组件的样式系统。")]),t._v(" "),s("p",[t._v("所以在使用element-plus的项目中，我们可以看到在"),s("code",[t._v(":root")]),t._v("中定义了大量的css变量")]),t._v(" "),s("img",{attrs:{src:a(482),alt:"image.png",width:"30%"}}),t._v(" "),s("p",[t._v("在实际开发中，有这样一个功能，用户通过颜色选择器修改主题颜色。当我们使用的是element-plus作为UI库时，可以这么做：在主题颜色选择器"),s("code",[t._v("change")]),t._v("事件中，获取到想要修改的主题颜色属性，然后进行相应赋值即可。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" htmlEl "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("documentElement"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("handleThemeColorChange")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getComputedStyle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("htmlEl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getPropertyValue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("--el-color-primary")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n  htmlEl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setProperty")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"--el-color-primary"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" color"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("Vssue",{staticClass:"theme-default-content content__default"})],1)}),[],!1,null,null,null);s.default=e.exports}}]);