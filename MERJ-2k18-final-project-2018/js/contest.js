window.onload = pageloaded;

function pageloaded(){

	$(document).ready(function(){
		$("#started").hide();
// this function will show the progress bar.
		$("#btn").click(function(){
			$("#box").animate({
				width:"1000px"
			},{
				duration: 3000,
				easing: "swing",
				step: function(x){
					$("#demo").text(Math.round(x * 100 / 1000) + "%");
				}
			});
		});
// when Click Me to start the game is clicked then the progress
// bar disappears.		
		$("#startGame").click(function(){
			window.location.href="MyGame/MyGame.html";
		});
	});

}