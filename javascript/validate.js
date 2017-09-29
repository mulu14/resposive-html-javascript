          
function validateForm(){
    
    var firstName = document.formvalidation.userName.value; // user first name 
    var validatepassword = document.formvalidation.password.value; // user password
    var validateage = document.formvalidation.age.value; // user age 
    var message = document.formvalidation.message.value; // user message 
    var subject = document.formvalidation.subject.value; // user subject of message 
  
    if(firstName === "" || firstName === null){ // check if the first name input field is not empty 
        window.alert("name is required please enter your name.");    // convert user input field border style to rea
        firstName.focus();
        return false;   // display message 
     
       }

       else if (validatepassword.length <=5) { // check if the length of password is less than or equal to 5 
       window.alert("Minimum required charcter is 6.");    // convert user input field border style to rea
       validatepassword.focus();  
       return false;
       }

       else if(validateage < 15) { // check if the user age is below 15
       window.alert("You have to be older than 15"); // display the message 
       validateage.focus();  // change the user input border style to red
       return false;
       }
       else if(message === ""){
        window.alert("text field is required.");    // convert user input field border style to rea
        firstName.focus();
        return false;   //  
       }
       
    

       };


     function sendMessage(){
         if(this.validateForm == true){
            document.location.href = "mailto:muzefo03@gmail.com?subject="    // if the user input field is provided send message to user
            + encodeURIComponent(subject)
            + "&body=" + encodeURIComponent(message);
          document.userData.submit();
          return true; 
         }
     }


  


$(document).ready(function(){
    
     validateForm(); 
  
 });
 
 
       
