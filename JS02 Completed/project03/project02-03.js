/*    JavaScript 7th Edition
      Chapter 2
      Project 02-03

      Application to return the shape of a clicked object
      Author: Nick Baum
      Date: 9/28/2024  

      Filename: project02-03.js
 */
        //Create an event handler for square that makes a hover over tooltip
        document.getElementById("square").onmouseover = function() {
            document.getElementById("feedback").innerHTML = "You're hovering over the square.";
        }
        
        //Create an event handler for square that makes an empty string tooltip
        document.getElementById("square").onmouseout = function() {
            document.getElementById("feedback").innerHTML = "";
        }

        //Create an event handler for triangle that makes a hover over tooltip
        document.getElementById("triangle").onmouseover = function () {
            document.getElementById("feedback").innerHTML = "You're hovering over the triangle.";
        }

        //Create an event handler for triangle that makes an empty string tooltip
        document.getElementById("triangle").onmouseout = function () {
            document.getElementById("feedback").innerHTML = "";
        }

        //Create an event handler for circle that makes a hover over tooltip
        document.getElementById("circle").onmouseover = function () {
            document.getElementById("feedback").innerHTML = "You're hovering over the circle.";
        }

        //Create an event handler for circle that makes an empty string tooltip
        document.getElementById("circle").onmouseout = function () {
            document.getElementById("feedback").innerHTML = "";
        }