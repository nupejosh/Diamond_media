$(document).ready(function() {
	var icons = $('#icons');

// slide down animation 
/*	var icon = $('.slideDown');

	icons.animate({
		top: '200px'
	}, 2000, 'swing'); */

	
	$(".large-3").on('mouseenter', function() {
		$(this).animate(
		{
			top: '-=40px'
		},
		{
			duration: '200',
			complete: function hi() 
			{
				//console.log('hi');
				$(this).animate(
				{
					top: '+=40px'
				},
				{
				duration: 200,
				complete: function(){
					//console.log('bye');
					$(this).animate(
					{
						top: '-=20px'
					}, {duration: '200', complete:function(){$(this).animate({top:'+=20px'});}});
				}});


			}
			});
		});
	


});
