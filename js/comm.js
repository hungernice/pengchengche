$(function() {
	$("#J_headerCategory").mouseover(function() {
		$(this).find(".nav-left-tab").stop().slideDown();
	});
	$("#J_headerCategory").mouseout(function() {
		$(this).find(".nav-left-tab").stop().slideUp();
	});

	$(".clearfix li a.link").click(function() {
		$(this).addClass("on").siblings("a").removeClass("on");
	});

});

$(document).on("click", "#J_brandbtn a", function(){
	var _val = $(this).attr("data-val");
	$(this).addClass("selected-on").parent().siblings("li").find("a").removeClass("selected-on");
	0 != _val ? ($("#J_brandlist li").hide(), $('#J_brandlist a[data-alpha="' + _val + '"]').parent().show()) : $("#J_brandlist li").show()
});
