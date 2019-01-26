(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{350:function(t,e,n){"use strict";n.r(e);var o=n(495),a=n(392);for(var s in a)"default"!==s&&function(t){n.d(e,t,function(){return a[t]})}(s);var i=n(0),r=Object(i.a)(a.default,o.a,o.b,!1,null,null,null);r.options.__file="src/views/articles/frontend/canvas/CanvasBasis.vue",e.default=r.exports},392:function(t,e,n){"use strict";n.r(e);var o=n(393),a=n.n(o);for(var s in o)"default"!==s&&function(t){n.d(e,t,function(){return o[t]})}(s);e.default=a.a},393:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{toTop:this.$util.toTop,rectMethodsInfo:[{method:"fillRect",description:"在画布上绘制的矩形会填充指定的颜色。填充的颜色通过 fillStyle 属性指定。"},{method:"strokeRect",description:"在画布上绘制的矩形会使用指定的颜色描边。描边颜色通过 strokeStyle 属性指定。"},{method:"clearRect",description:"用于清除画布上的矩形区域。本质上，这个方法可以把绘制上下文中的某一矩形区域变透明。"}],pathMethodsInfo:[{method:"arc(x, y, radius, startAngle, endAngle, counterclockwise)",description:"：以(x,y)为圆心绘制一条弧线，弧线半径为 radius，起始和结束角度（用弧度表示）分别为 startAngle 和endAngle。最后一个参数表示 startAngle 和 endAngle 是否按逆时针方向计算，值为 false表示按顺时针方向计算。"},{method:"arcTo(x1, y1, x2, y2, radius)",description:"从上一点开始绘制一条弧线，到(x2,y2)为止，并且以给定的半径 radius 穿过(x1,y1)。"},{method:"bezierCurveTo(c1x, c1y, c2x, c2y, x, y)",description:"从上一点开始绘制一条曲线，到(x,y)为止，并且以(c1x,c1y)和(c2x,c2y)为控制点。"},{method:"lineTo(x, y)",description:"从上一点开始绘制一条直线，到(x,y)为止。"},{method:"moveTo(x, y)",description:"将绘图游标移动到(x,y)，不画线。"},{method:"quadraticCurveTo(cx, cy, x, y)",description:"从上一点开始绘制一条二次曲线，到(x,y)为止，并且以(cx,cy)作为控制点。"},{method:"rect(x, y, width, height)",description:"从点(x,y)开始绘制一个矩形，宽度和高度分别由 width 和height 指定。这个方法绘制的是矩形路径，而不是 strokeRect()和 fillRect()所绘制的独立的形状。"}],textMethodsInfo:[{method:"fillText",description:"使用 fillStyle 属性绘制文本。"},{method:"strokeText",description:"使用 strokeStyle 属性为文本描边。"},{method:"measureText",description:"利用 font、textAlign 和 textBaseline 的当前值计算指定文本的大小。"}],textRelativeInfo:[{property:"font",description:'表示文本样式、大小及字体，用 CSS 中指定字体的格式来指定，例如"10px Arial"。'},{property:"textAlign",description:'表示文本对齐方式。可能的值有"start"、"end"、"left"、"right"和"center"。'},{property:"textBaseline",description:'表示文本的基线。可能的值有"top"、"hanging"、"middle"、"alphabetic"、"ideographic"和"bottom"。'}]}},mounted:function(){var t=document.querySelector("#canvas-basis");if(t.getContext){var e=t.getContext("2d");e.strokeStyle="#000",e.fillStyle="#c0c0c0",e.beginPath(),e.moveTo(194,100),e.arc(100,100,94,0,2*Math.PI,!1),e.moveTo(100,100),e.lineTo(100,25),e.moveTo(100,100),e.lineTo(45,100),e.stroke();var n=12;for(e.font=n+"px Arial";e.measureText("12").width>200;)n--,e.font=n+"px Arial";e.textAlign="center",e.textBaseline="middle",e.fillText("12",100,12)}}}},495:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("BoWen",[n("div",{staticClass:"p-1",attrs:{slot:"catalog"},slot:"catalog"},[n("Steps",{attrs:{direction:"vertical"}},[n("Step",{attrs:{title:"基本概念",content:"基本概念",status:"wait"},nativeOn:{click:function(e){t.toTop("#CanvasBasis-1",30)}}})],1),n("Steps",{attrs:{direction:"vertical"}},[n("Step",{attrs:{title:"基本API",content:"基本API",status:"wait"},nativeOn:{click:function(e){t.toTop("#CanvasBasis-2",30)}}})],1),n("Steps",{attrs:{direction:"vertical"}},[n("Step",{attrs:{title:"绘制时钟",content:"绘制时钟",status:"wait"},nativeOn:{click:function(e){t.toTop("#CanvasBasis-3",30)}}})],1)],1),n("div",{staticClass:"px-1"},[n("div",{staticClass:"py-3 text-center"},[n("h1",[n("Icon",{attrs:{type:"ios-book-outline"}}),t._v(" 初识canvas")],1),n("p",{staticClass:"pt-1"},[t._v("HTML5 新添加<canvas>元素，这个元素负责在页面中设定一个区域，然后就可以通过 JavaScript 动态地在这个区域中绘制图形。")])]),n("h3",{staticClass:"ml-1",attrs:{id:"CanvasBasis-1"}},[n("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 基本概念")],1),n("Divider"),n("p",[t._v("<canvas> 由几组 API 构成，但并非所有浏览器都支持所有这些 API。除了具备基本绘图能力的 2D 上下文，<canvas> 还建议了一个名为 WebGL 的 3D 上下文。目前，支持该元素的浏览器都支持 2D 上下文及文本 API，但对 WebGL 的支持还不够好。")]),n("p",[t._v("要使用 <canvas> 元素，必须先设置其 width 和 height 属性，指定可以绘图的区域大小。出现在开始和结束标签中的内容是后备信息，如果浏览器不支持 <canvas> 元素，就会显示这些信息。当然，我们也能通过 CSS 为该元素添加样式。")]),n("p",[t._v('要在画布（canvas）上绘图，需要调用 getContext() 方法并传入上下文的名字来取得绘图上下文。传入"2d"，就可以取得 2D 上下文对象。')]),n("p",[t._v("使用 toDataURL()方法，可以导出在 <canvas> 元素上绘制的图像。这个方法接受一个参数，即图像的 MIME 类型格式，而且适合用于创建图像的任何上下文。")]),n("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[n("code",{staticClass:"js"},[t._v('let drawing = document.getElementById("drawing");\n//确定浏览器支持<canvas>元素\nif (drawing.getContext){\n    //取得图像的数据 URI\n    let imgURI = drawing.toDataURL("image/png");\n    //显示图像\n    let image = document.createElement("img");\n    image.src = imgURI;\n    document.body.appendChild(image);\n}')])]),n("p",[t._v("接下来我们简单的看一下其基础 API 并实现一个行走的时钟。")]),n("h3",{staticClass:"ml-1",attrs:{id:"CanvasBasis-2"}},[n("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 基本API")],1),n("Divider"),n("p",[t._v("绘制矩形的相关API：这三个方法都能接收 4 个参数：矩形的 x 坐标、矩形的 y 坐标、矩形宽度和矩形高度，这些参数的单位都是像素。")]),n("table",{staticClass:"table table-hover"},[n("thead",[n("tr",[n("th",{attrs:{scope:"col"}},[t._v("#")]),n("th",{attrs:{scope:"col"}},[t._v("方法")]),n("th",{attrs:{scope:"col"}},[t._v("描述")])])]),n("tbody",t._l(t.rectMethodsInfo,function(e,o){return n("tr",[n("th",{attrs:{scope:"row"}},[t._v(t._s(o+1))]),n("td",[t._v(t._s(e.method))]),n("td",[t._v(t._s(e.description))])])}))]),n("p",[t._v("绘制路径的相关API：要绘制路径，首先必须调用 beginPath()方法，表示要开始绘制新路径，。如果想绘制一条连接到路径起点的线条，可以调用closePath()。")]),n("table",{staticClass:"table table-hover"},[n("thead",[n("tr",[n("th",{attrs:{scope:"col"}},[t._v("#")]),n("th",{attrs:{scope:"col"}},[t._v("方法")]),n("th",{attrs:{scope:"col"}},[t._v("描述")])])]),n("tbody",t._l(t.pathMethodsInfo,function(e,o){return n("tr",[n("th",{attrs:{scope:"row"}},[t._v(t._s(o+1))]),n("td",[t._v(t._s(e.method))]),n("td",[t._v(t._s(e.description))])])}))]),n("p",[t._v("绘制文本的相关API：前两个两个方法都可以接收 4 个参数：要绘制的文本字符串、x 坐标、y 坐标和可选的最大像素宽度。")]),n("table",{staticClass:"table table-hover"},[n("thead",[n("tr",[n("th",{attrs:{scope:"col"}},[t._v("#")]),n("th",{attrs:{scope:"col"}},[t._v("属性")]),n("th",{attrs:{scope:"col"}},[t._v("描述")])])]),n("tbody",t._l(t.textMethodsInfo,function(e,o){return n("tr",[n("th",{attrs:{scope:"row"}},[t._v(t._s(o+1))]),n("td",[t._v(t._s(e.method))]),n("td",[t._v(t._s(e.description))])])}))]),n("p",[t._v("绘制文本的这前两个两个方法都以下列 3 个属性为基础：")]),n("table",{staticClass:"table table-hover"},[n("thead",[n("tr",[n("th",{attrs:{scope:"col"}},[t._v("#")]),n("th",{attrs:{scope:"col"}},[t._v("方法")]),n("th",{attrs:{scope:"col"}},[t._v("描述")])])]),n("tbody",t._l(t.textRelativeInfo,function(e,o){return n("tr",[n("th",{attrs:{scope:"row"}},[t._v(t._s(o+1))]),n("td",[t._v(t._s(e.property))]),n("td",[t._v(t._s(e.description))])])}))]),n("h3",{staticClass:"ml-1",attrs:{id:"CanvasBasis-3"}},[n("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 绘制时钟")],1),n("Divider"),n("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[n("code",{staticClass:"js"},[t._v('/*\n * HTML结构\n * <canvas id="drawing" width=" 200" height="200">A drawing of something.</canvas>\n */\nlet drawing = document.querySelector("#drawing");\n// 调用 getContext() 方法并传入上下文的名字\nif (drawing.getContext) {\n    // 传入"2d"，就可以取得 2D 上下文对象\n    let context = drawing.getContext(\'2d\');\n\n    // 设置默认样式\n    context.strokeStyle = "#000000";\n    context.fillStyle = "#c0c0c0";\n\n    // 开始路径\n    context.beginPath();\n    // 绘制圆\n    context.moveTo(194, 100);\n    context.arc(100, 100, 94, 0, 2 * Math.PI, false); \n    // 绘制分针\n    context.moveTo(100, 100);\n    context.lineTo(100, 25);\n    // 绘制时针\n    context.moveTo(100, 100);\n    context.lineTo(45, 100);\n    // 描边路径\n    context.stroke(); \n\n    // 绘制文本\n    let fontSize = 12;\n    context.font = fontSize + "px Arial";\n    while(context.measureText("12").width > 200){\n        fontSize--;\n        context.font = fontSize + "px Arial";\n    }\n    context.textAlign = "center";\n    context.textBaseline = "middle";\n    context.fillText("12", 100, 12);\n}')])]),n("canvas",{attrs:{id:"canvas-basis",width:" 200",height:"200"}},[t._v("Sorry,There is a drawing about a clock,But your browser does not support Canvas.")]),n("p",[t._v("canvas的简单学习记录于此，更多内容请点击查看。")]),n("p",{staticClass:"text-right"},[t._v("参考资料："),n("a",{staticClass:"mr-1",attrs:{href:"#"}},[t._v("JavaScript高级程序设计(第三版)")])])],1)])},a=[];o._withStripped=!0,n.d(e,"a",function(){return o}),n.d(e,"b",function(){return a})}}]);