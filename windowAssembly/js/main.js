//因为jquery的名字很可能不是jquery所以要配置一下
//main.js应用层
require.config({
	paths:{
		jquery:'jquery-1.7.2.min',
		jqueryUI:'jquery-ui-1.9.2.min'
	}
});

require(['jquery','jqueryUI','widget','window'], function($,$UI,widget,w){

	$('#a').click(function(){
		// alert窗口
		var win = new w.Window();
		win.alert({
			title:'提示',
			content:'welcome',
			handler:function(){
				//可以不要
				alert('you click the button');
			},
			width: 300,
			height: 150,
			y: 50,
			hasCloseBtn: true,
			skinClassName: "window_skin_a",
			dragHandle:'.window_header',	
			handler4AlertBtn: function(){
				alert('you click the alert btn');
			},
			handler4CloseBtn: function(){
				alert('you click the close button');
			}
		}).on('alert',function(){
			alert('the second alert handler');
		}).on('alert',function(){
			alert('the third alert handler');
		}).on('alert',function(){
			alert('the second close handler');
		})
	})

	$('#b').click(function(){
		//confirm窗口
		new w.Window().confirm({
			title:'系统消息',
			content:'您确定要删除这个文件吗',
			width: 300,
			height: 150,
			y: 50,
			text4ConfirmBtn: '是',
			text4CancelBth: '否',
			dragHandle: '.window_header'
		}).on('confirm',function(){
			alert('确定');
		}).on('cancel',function(){
			alert('取消');
		})
	})

	$('#c').click(function(){
		new w.Window().prompt({
			title: '请输入您的名字',
			content: '我们将会为您保密您输入的信息',
			width: 300,
			height: 150,
			y: 50,
			text4PromptBtn: '输入',
			text4CancelBtn: '取消',
			defaultValue4PromptInput: '张三',
			dragHandle: '.window_header',
			handler4PromptBtn: function(inputValue){
				alert('您输入的内容是'+inputValue);
			},
			handler4CancelBtn: function(){
				alert('取消');
			}
		})
	})

	$('#d').click(function(){
		new w.Window().common({
			content: '我是一个通用弹窗',
			width: 300,
			height: 50,
			y: 50,
			hasCloseBtn: true
		})
	})
})