//LAB 9 - 1 FAQ PAGE
//alert("1 - connected");

jQuery(document).ready(function() {
// on the page load the content boxes will be hidden	
$(".contentBox").hide();	

//on the click of any header of section it will open the content box	
$("h2").click(function(){
	$(".contentBox").hide();
	$(this).next('div').slideToggle(3000);
		
});
// this will change the colour of background as well as text on mouse hover of content box.
$(".contentBox").hover(
	function(){$(this).css({'background':'#000', 'color':'#D4D6C7'});},
	function(){$(this).css({'background':'#D4D6C7', 'color':'#000'});},
);

});
