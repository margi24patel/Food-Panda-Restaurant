//alert("");

	//var allGalleryImgs = document.getElementByClassName("food_gallery");
	//var img1 = document.getElementById("pic1");
	
	//img1.onmouseover = chageImgSize();
	
	//allGalleryImgs(this).onmouseover = chageImgSize(this);
	$(function(){
		$('.food_gallery').hover(function() {
			$('body').addClass('food_gallery_size');
		}, function() {
		$('body').removeClass('food_gallery_size');
		})
	})
