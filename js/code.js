(function() {

    /* ***************************************************************
                  Do not edit the lines above here!

                     Introduction to JavaScript

       You mist write code to make all of the tests pass. Open the
       index.html file in a web browser and open the developer tools
       to see if there are any errors! If there are no errors, you
       will see a message like this:
                     No errors! Congratulations!
     *************************************************************** */


     // TODO 1: Declare and instantiate a variable called `firstName` to store
     // your first name.
     // Also DECLARE (but do not instantiate) a `lastName` variable.

     var firstName = 'Josiah';
     var lastName;




     // TODO 2: Create a `greeting` variable as a string which says:
     //    "Hello there _____!"
     // Replace the _____ above with the value of the `firstName` variable.
     // NOTE: Do NOT simply retype your first name in the `greeting` value.

     var greeting = 'Hello there ' + firstName + '!';




     // TODO 3: Create two variables: one for the year you were born, and one
     // for the current year. Then create a third variable to store your age!
     // Name these: `birthYear`, `currentYear`, and `age`

     var birthYear = 1988;
     var currentYear = 2016;
     var age = currentYear - birthYear;



     // TODO 4: Create a new variable called `style` - if your age is under 35,
     // store "hip" in this variable, but if your age is 35 or over, store
     // "classic" in this variable.


     var style;
     if (age < 35){
       console.log('hip');
       style='hip';
     }else{
       console.log('classic');
      style='classic';
     }



     // TODO 5: Create a variable indicating that your instructor is awesome
     // and call it `instructorIsAwesome`. This variable should be a boolean
     // (you can choose the value yourself).
     // Next, create a variable called `review` and, if the instructor is
     // awesome, set `review` to "good", otherwise set the `review` variable to "bad"


     var instructorIsAwesome = true;
     var review;
     if (instructorIsAwesome === true){
      review='good';
     }
     else{
       review ='bad';
     }




     // TODO 6: Create a function called `math` which accepts to numbers as
     // arguments and returns the result of adding them together, mutliplying
     // by 10, then dividing by the first number.

     function math(y,x){
       return (y+x) * 10 / y
     }





     // TODO 7: Write a function called `madlib` that takes 3 separate words as
     // arguments. The function should insert the words into this sentence:
     // "I prefer __1__ while I __2__ so that I don't __3__ on the __4__."
     // Finally, the function should return that new sentence.

     function madlib(word1, word2, word3, word4){
       return 'I prefer ' + word1 + ' while I ' + word2  + ' so that I don\'t ' + word3 + ' on the ' + word4 + '.'
     }









     /* ***************************************************************
                              EPIC Mode

      You only need to write these functions if you're doing EPIC mode!
      Note that there are no tests for these functions, so you'll need
      to confirm they work yourself!
      *************************************************************** */

     // TODO 8: Define a function called `reverse` that returns the reverse of
     // a string provided as an argument. For example, reverse("jag testar")
     // should return the string "ratset gaj".

     //reverse the (str) for string .split the (str) ''for spacing | .reverse for that | join the '' spacing
     function reverse(str){
       return str.split('').reverse().join('');
     }

     reverse('Josiah');




     // TODO 9: Write a function called `translate` that will translate text
     // passed in as an argument into "Rovarspraket". "Rovarspraket" is a new
     // language where you double every consonant and place an "o" in between.
     // For example, translate("this is fun") should return the string:
     // "tothohisos isos fofunon".


    // translate the (str) (/all below leters replaced/) | g is global replace | i is for insesitive case | $& 'o' $& string replace with below letter and o inbetween
    function translate(str) {
    return str.replace(/[bcdfghjklmnpqrstvxzw]/gi, '$&o$&');
    }
    
    translate('Josiah');
