$(function(){
//		$("#J_headerCategory").mouseover(function(){
//			$(this).find(".nav-left-tab").slideDown()
//		},mouseout(function(){
//			$(this).find(".nav-left-tab").slideUp();
//		}));
		
		$("#J_headerCategory").mouseover(function(){
			$(this).find(".nav-left-tab").slideDown();
		});
		$("#J_headerCategory").mouseout(function(){
			$(this).find(".nav-left-tab").slideUp();
		});
		
		
	$(".clearfix li a.link").click(function(){
		$(this).addClass("selected").siblings("a").removeClass("selected");
	});
	
});