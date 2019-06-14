
jQuery(document).ready(function(){
    $('.specialdish').hide();
	//On click of heading it will show the content part
	$('h3').click(function(){
		$(this).next('.specialdish').slideToggle(4000);
	});
	//Changes in text colour and background colour on mouse hover on content part
	$('.specialdish').hover(
	function(){$('.specialdish').css ('color','#FC6E08');},
	function(){$('.specialdish').css ('color','#0828FC');});
	
	var date = new Date();
	
	myDate=date.toDateString();
	
	today.innerHTML =   myDate + "  Today's Special";
	
});
