
$(function() {
    $('.datepicker').daterangepicker(
	{
		locale: {
		  format: 'YYYY-MM-DD'
		}
		 
	});
	$('.datepicker').on('apply.daterangepicker', function(ev, picker) {
		var date = $('.datepicker').val();
		var first = date.slice(0,10);
		var last = date.slice(13,23);
		window.location.href = "?type=dailyproduction&date="+first+"$"+last;
	});
});
    