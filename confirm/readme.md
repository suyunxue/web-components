confirm组件开发
现在没写样式，没写蒙板
初步可以用：
只需要new Confirm对象，将配置对象传入
配置对象所需参数：
config=｛title:"",content:"",true:fn｝
title: 为弹出框的表头提示，默认为“提示”
content：为弹出框内容文字，默认为‘空’
true: 弹窗点击确定时执行的回调函数，默认没有，有的话执行