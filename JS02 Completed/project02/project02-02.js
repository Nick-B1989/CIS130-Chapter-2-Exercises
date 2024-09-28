/*    JavaScript 7th Edition
      Chapter 2
      Project 02-02

      Application to test for completed form
      Author: Nick Baum
      Date: 9/27/2024  

      Filename: project02-02.js
 */

      //Function to declare the name, email, and phone variables
      function verifyForm () {
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let phone = document.getElementById("phone").value;

        //A conditional operator to test if value is true or false
        (name && email && phone) ? window.alert("Thank you!") : window.alert("Please fill in all fields.");
      }

      //An event listener to run verifyForm function
      document.getElementById("submit").addEventListener("click", verifyForm);