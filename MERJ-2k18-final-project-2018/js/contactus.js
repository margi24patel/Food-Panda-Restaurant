
// To store data - Local Storage
window.onload = function () {
    
    // DOM element
    var save = document.getElementById("send"); 

	//on click of submit, Validations
	 save.onclick=function(){
		var emailID = document.getElementById("email");
		//For Email id
		if(emailID.value ==="" || emailID.value=== null)
		{
			emailID.style.background = "red";
			emailID.focus();
          return false;
		}
		
		
		
		var namePrint = document.getElementById("name");
		//For name value
		if(namePrint.value ==="" || namePrint.value=== null)
		{
			viewmessage.innerHTML ="Please enter your name."
			namePrint.style.background = "red";
			namePrint.focus();
          return false;
		}
		else{
			
			localStorage.setItem("userName", namePrint.value);
          localStorage.getItem("userName");	
          viewmessage.innerHTML="Thankyou for contactus  "+namePrint.value;
	     return false;
		}
		
	   
	  }
	  localStorage.clear();
	  document.getElementById("form").reset();
	
	}
    