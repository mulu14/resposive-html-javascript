/* This is code for the assignment*/




/* validate function accept input from user and check its validity using Javascript 
 * if all the user inputs are correct, the function send mail
 * four conditional statement
 * if the any of the user inputfield is not inserted  it display error message
 *  
 * 
       
 
       
 /* the function send mail to provided mail address using HTML validation 
  */
       
function sendMail(){
   var message = document.userD.message1.value; // message variable 
   var subject = document.userD.subject1.value;  // message subject
    document.location.href = "mailto:muzefo03@gmail.com?subject="+ encodeURIComponent(subject)
 + "&body=" + encodeURIComponent(message); 

}
  
  
   var ArrayList = [1,20, 6, 7, 45, 10, 100, 3, 21, 70];  // array element declaration 
    var sortArray = ArrayList.sort(function (a, b){ // use library built in function to sort  array 
        return a - b; 
    }); 
    
    /*The function print array 
     * 
     * @returns {String}
     */
 function printArray(){    
        
        var contener = '';   // declearing empty string 
        for(i = 0; i < sortArray.length; ++i){ //forloop iteration 
         contener +="<br>" + sortArray[i];   // append each array element on string
        }
        return contener; // return concatenated string
    }

$(document).ready(function(){
   
    // get element by id and change the content with print array 
   document.getElementById('printarr').innerHTML = printArray();
   sendMail(); // function call sendmail 
});


