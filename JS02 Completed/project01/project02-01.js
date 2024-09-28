/*    JavaScript 7th Edition
      Chapter 2
      Project 02-01

      Celsius <-> Farenheit Coverter
      Author: Nick Baum
      Date: 9/26/2024  

      Filename: project02-01.js
 */

      //Function to turn Fahrenheit to Celsius
      function FarhenheitToCelsius (degree) {
        return (degree - 32) / 1.8;
      }

      //Function to turn Celsius to Farhenheit
      function CelsiusToFarhenheit (degree) {
        return (degree * 1.8) + 32;
      }

      //Event handler to change Celsius to Farhenheit
      document.getElementById("cValue").onchange = function () {
        let cDegree = document.getElementById("cValue").value;
        document.getElementById("fValue").value = CelsiusToFarhenheit(cDegree);
      }

      //Event handler to change Farhenheit to Celsius
      document.getElementById("fValue").onchange = function () {
        let fDegree = document.getElementById("fValue").value;
        document.getElementById("cValue").value = FarhenheitToCelsius(fDegree);
      }