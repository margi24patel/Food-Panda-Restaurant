window.onload = pageLoaded;

function pageLoaded(){

	$(document).ready(function (){

		//This will hide the Overview content showing only the heading of the Overview.
		$("#overview-content").hide();
		//This will hide the event booking form content showing only the heading.
		$("#eventForm").hide();


		//when hover over OVERVEIW the color will change to the header color and when mouseout
		// the header will change its color back to black
		$("#heading1").hover(
			function(){$("#heading1").css("color","#9ca36f");},
			function(){$("#heading1").css("color","black");}
		);
		//when hover over Event Booking Form the color will change to the header color and when mouseout
		// the header will change its color back to black		
		$("#heading2").hover(
			function(){$("#heading2").css("color","#9ca36f");},
			function(){$("#heading2").css("color","black");}
		);
		//When clicking the OVERVIEW HEADING, the form content will show in 1 sec.
		$("#heading1").click(function(){
			$(this).next("#overview-content").slideToggle(1000);
		});
		//When clicking the EVENT BOOKING REQUEST FORM HEADING, the form content will show in 1 sec.
		$("#heading2").click(function(){
			$(this).next("#eventForm").slideToggle(1000);
		});

		//If we click on the image of booking a table, the content of the OVERVIEW will show in 1 sec
		$("#bookTable").click(function(){
			$("#overview-content").slideToggle(1000);
		});
		//If we click on the image of booking a table, the content of the Booking Form will show in 1 sec		
		$("#Reserve").click(function(){
			$("#eventForm").slideToggle(1000);
		});		
	});

	var formHandle = document.forms.myForm;
	// we need an event on submit to retrieve the data
	formHandle.onsubmit = processForm;

	function processForm(){
		//alert("form sent");
		
		var cust_fname = document.getElementById("f_name");
		var cust_lname = document.getElementById("l_name");
		var cust_email = document.getElementById("e_mail");
		var cust_phonenumber = document.getElementById("phone_number");
		var error_message = document.getElementById("Err_Msg");

		if(cust_fname.value === "" || cust_fname.value === null ){
			cust_fname.style.background = "red";
			cust_fname.focus();
			return false;
		}
		if(cust_lname.value === "" || cust_lname.value === null ){
			cust_lname.style.background = "red";
			cust_lname.focus();
			return false;
		}
		
		if(cust_email.value === "" || cust_email.value === null ){
			cust_email.style.background = "red";
			cust_email.focus();
			error_message.innerText = "Invalid Email";
			return false;
		}	
		/*ValidEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;	
		if(!ValidEmail.test(cust_email.value))
		{
			error_message.innerText = "Invalid Email!";
			return false;
		}*/
		if(cust_phonenumber.value === "" || cust_phonenumber.value === null ){
			cust_phonenumber.style.background = "red";
			cust_phonenumber.focus();
			return false;
		}
		ValidPhone = /^\d{10}$/;
		if(!ValidPhone.test(cust_phonenumber.value))
		{
			cust_phonenumber.style.background = "red";
			cust_phonenumber.focus();
			error_message.innerText = "Invalid Phone number";
			return false;
		}
		var nameMsg = document.getElementById("thnkmsg");
		nameMsg.style.display = "block";
		formHandle.style.display = "none";

		var customerName = document.getElementById("customer_f_name");
		customerName.innerHTML = cust_fname.value;

		//I hided all the contents to show only on the page the Thank you message.
		$("#main-event").hide();
		$("#overview").hide();
		$("#bookTable").hide();
		$("#Reserve").hide();

		$("#thnkmsg").click(function(){
			//$("#thnkmsg").slideToggle(5000);
			$("#thnkmsg").animate({left:'200px'},"slow");
		});

		return false;
	} 
}
