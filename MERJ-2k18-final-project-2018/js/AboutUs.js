//code for AboutUs.ks Page Margi Patel
window.onload = wrapper;

function wrapper(){
    
    //here DOM elements we will need
     var buttonBox1 = document.getElementById("aboutUs");
     var buttonBox2 = document.getElementById("oueChefs");
     var buttonBox3 = document.getElementById("ourGoodStory");
     
     var showbox = document.getElementById("show_info_box");
    
    
    //Here ONCLICK Events for Button
    buttonBox1.onclick = clickAboutUs;
    buttonBox2.onclick = clickOurChefs;
    buttonBox3.onclick = clickOurGoodStory;
    
    
    //here Function for About Us section
    function clickAboutUs(){
     
        
        buttonBox1.style.display = "block";
        showbox.style.display = "block";
            
        //showbox.style.width = "1100px";
        showbox.style.backgroundColor = "pink";
        showbox.innerHTML = "<h2>About Us</h2><h3>Welcome to the experience of Indian Cuisine which holds a proud place on the list of                              distinguished would cuisines. Indian food reflects the enormous geo-ethnic cultural diversity of its many                            ancient rulers.<br>Our menu has been carefully selected to meet two distinct objective: to represent the                            diversity mentioned above and to include most flavoured tasty dishes.<br>The art of Indian cooking makes a                          big difference in the taste. All food is cooked fresh upon order; food takes time to prepare! We do not use                          any preservatives, animal fat or MSG in our cooking.</h3>";
        
       
    }
    
    //here Function for Our Chefs section
    function clickOurChefs(){
     
        
        buttonBox2.style.display = "block";
        showbox.style.display = "block";
            
        //showbox.style.width = "1100px";
        showbox.style.backgroundColor = "pink";
        showbox.innerHTML = "<h2>Our Chefs</h2><h3>With a passion for tasty food and stunning presentation, our chefs have earned                                     endless praise from critic’s dinners alike. Our Chefs use all their talents and expertise to create a                                 new edge in healthy.</h3>";
       
       
    }
    
    //here Function for Our Good Story section
    function clickOurGoodStory(){
     
        
        buttonBox3.style.display = "block";
        showbox.style.display = "block";
            
        //showbox.style.width = "1100px";
        showbox.style.backgroundColor = "pink";
        showbox.innerHTML = "<h2>Our Good Story</h2><h3>Our award-winning restaurant has been recognized as the premier Indian establishment                        for the year 2012, and we are determined to keep it that way. We have been offering authentic regional Indian                        and North Indian, Vegetarian cuisine since 2008, without letting the clients sacrifice the taste and flavors                        of fine Indian Cuisine. </h3>";
      
       
    }
    
    
}//end window onload function