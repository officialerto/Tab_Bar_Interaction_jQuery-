$(document).ready(function() {

	$(".tab").on("click", function(){
		$(this).addClass("is_active").siblings().removeClass("is_active");
	
		var indicator = $(".tab_indicator");
		var tapPosition = $(this).position();
		console.log("Left: "+tapPosition.left)

		indicator.css({
			left:tapPosition.left+"px",
		})
	});

});