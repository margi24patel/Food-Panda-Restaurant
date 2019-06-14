//Careers.js File Page Margi Patel


window.onload = function()
{
    var formDis = document.forms[0];
    //console.log(formDis);
    formDis.onsubmit = processForm;
    
    var thanksMsg = document.getElementById("thanks_msg");

    function processForm()
    {
        var fname = formDis.f_fname;
        var lname = formDis.f_lname;
        var streetname = formDis.f_street;
        var cityname = formDis.f_city;
        
        var postalcode = formDis.f_pc;
        var phno = formDis.f_phone;
        var email = formDis.f_email;
        
        var slctBox = formDis.f_location;
        //console.log(slctBox);
        //slctBox.onchange = validate;
        /*slctBox.onchange = goDD;
        
        function goDD(){
            alert("dropdown changed");
            console.log(slctBox.value);
            
            if(f_location.value === "0" || slctBox.value  === null)
            {
                alert("vaughn");
                //return false;
            }
            return false;
        }
        //dropdown
       /* function Validate()
        {
            //var e = document.getElementById("ddlView");
            var strUser = slctBox.options[slctBox.selectedIndex].value;
            //if you need text to be compared then use
            var strUser1 = slctBox.options[slctBox.selectedIndex].text;
        if(strUser==0) //for text use if(strUser1=="Select")
        {
            alert("Please select a user");
        }
        } */
        /*function validate()
        {
           if(slctBox.value == "")
           {
              alert("Please select value"); // prompt user
              slctBox.focus(); //set focus back to control
              //return false;
           }
        }
        */
        var thnku = document.getElementById("thanksEmployee");
        var thnkumail = document.getElementById("mail");
        
        var patternPC = /\w\d\w\s\d\w\d/; //for postalcode
        var patternPhNo = /\d\d\d\d\d\d\d\d\d\d/; //for phone No
        var mailid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //for mail
        
        thnku.innerHTML = "Thank you " + fname.value +" "+ lname.value + " for your Interests! We will response you on  " + email.value + " soon!";
        
        //for first name
		//Validation for first name
        if(fname.value  === "" || fname.value  === null)
            {
                
                fname.style.background ="red";
                fname.focus();
                //formDis.in_Name.style.background = "red";
                //formDis.in_Name.focus();
                return false;
            }
        
        //Validation for last name
        if(lname.value  === "" || lname.value  === null)
            {
                
                lname.style.background ="red";
                lname.focus();
                //formDis.in_Name.style.background = "red";
                //formDis.in_Name.focus();
                return false;
            }
        
        //for postal code
        if(!patternPC.test(postalcode.value) || postalcode === null)
            {
                postalcode.style.background = "red";
                postalcode.focus();
                    return false;
            }
        
        
        
        //for phone
         if(!patternPhNo.test(phno.value) || phno.value===null)
            {
                phno.style.background = "red";
                phno.focus();
                    return false;
            }
        
        //for mail
         if(!mailid.test(email.value) || email.value===null)
            {
                email.style.background = "red";
                email.focus();
                    return false;
            }
        
        
        
       //formDis.style.display = "none";
       thanks_msg.style.display = "block";
        
        
        return false;
    }


}



