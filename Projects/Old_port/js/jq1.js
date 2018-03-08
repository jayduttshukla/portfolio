$(document).ready(function(){
		
		$(window).resize(function(){
      
			location.reload();	
		}); 

	if($(document).width() <= '800')
	{		
			
			$('.tgl').hide();	
			$('#nav-menui').click(function()
	{	
		
	$('.navimg').css('-webkit-transform', 'rotate(-180deg)');
		$('.tgl').toggle('swing 200');		
    });
	$('li').click(function()
	{
		$('.navimg').css('-webkit-transform', 'rotate(-90deg)');
		$('.tgl').toggle('swing 200');
	});
		}
		else if($(window).width() > '800')
		{
			
			$('li').click(function()
	{
		$('.navimg').css('-webkit-transform', 'rotate(-90deg)');
		$('.tgl').show(200);		 
	});
			$('.tgl').show();				
		}


});