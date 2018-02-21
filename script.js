$(document).ready(function() {
	$('#fullpage').fullpage();

	$(".down-arrow").click(function() {
  		$.fn.fullpage.moveSectionDown();
	});

	$(".up-arrow").click(function() {
  		$.fn.fullpage.moveTo(1);
	});
	
});