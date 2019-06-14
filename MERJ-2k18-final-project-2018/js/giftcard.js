/** LAB 6-1 IMAGE MOUSEOVER GALLERY*/
//CREATE AN ONLOAD LISTENER
window.onload = pageReady;
var bigImage = document.getElementById("mainImg");
function changeImage(event){
		event =event || window.event;
		var targetElement = event.target || event.srcElement;
		
		if(targetElement.tagName == "IMG") {
			bigImage.src = targetElement.getAttribute("src");
		}
	}
	var imgs = document.getElementById("gallery");
	
	for(let i=0; i< imgs.length; i++){
		imgs[i].onmouseover = function() {
			this.style.cursor = 'hand';
			this.style.borderColor = 'red';
		}
		imgs[i].onmouseout = function() {
			this.style.cursor = 'pointer';
			this.style.borderColor = 'black';
		}
	}

function pageReady(){

	//Get value from amount tab and put it into textbox
	$('input:radio').change(function(){
		var value = $("form input[type='radio']:checked").val();
		//alert("Value of Changed Radio is : " +value);
		var amt = document.getElementById('card_amt');
		amt.value = value;
	});
	
	//Form Varification plus thank you message
	var formHandle = document.forms[0];
	var confirmHandle = document.getElementById("thanks_msg");
	console.log(formHandle);
	
	
	formHandle.onsubmit = onSubmitForm;
	function onSubmitForm(){
		var amount = formHandle.card_amt;
		var quantity = formHandle.qty;
		var receipient = formHandle.receipient_name;
		var sender = formHandle.sender_name;
		var dl_address = formHandle.address;
		var dl_option = formHandle.delivery_option.options[delivery_option.selectedIndex].value;
		var dl_date = formHandle.delivery_date;
		var postal = formHandle.pc;
		var thankCus = document.getElementById("thanksCustomer");
		var rec = document.getElementById("cReceipient");
		var sen = document.getElementById("cSender");
		var del = document.getElementById("cDeliveryBy");
		var del_date = document.getElementById("cDeliveryDate");
		var total = document.getElementById("total");
		var postalRegEx = /\w\d\w\s\d\w\d/;
		
		thankCus.innerHTML = "Thank you " + sender.value + " for your purchase.";
		rec.innerHTML = "To, " + receipient.value;
		sen.innerHTML = "From, " + sender.value;
		del_date.innerHTML = "On, " + dl_date.value;
		del.innerHTML = "By, " + dl_option;
		total.innerHTML = "Your total : "+ amount.value*quantity.value;
		//Validation for reciepient name
		if(receipient.value === "" || receipient.value === null){
			receipient.style.background = "red";
			receipient.focus();
			
			return false;
		}	
		//Validation for Postal code with regex
		if(!postalRegEx.test(postal.value)|| postal.value ==="" || postal.value ===null){
			postal.style.background = "red";
			postal.focus();
			
			return false;
		}

		formHandle.style.display = "none";
		confirmHandle.style.display = "block";
		
		return false;
	}
	
	
}//END onload FUNCTION