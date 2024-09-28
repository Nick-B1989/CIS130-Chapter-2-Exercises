/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: Nick Baum
      Date: 9/28/2024  

      Filename: project02-04.js
 */
    //Creating constant variables and initializing them
    const CHICKEN_PRICE = 10.95;
    const HALIBUT_PRICE = 13.95;
    const BURGER_PRICE = 9.95;
    const SALMON_PRICE = 18.95;
    const SALAD_PRICE = 7.95;
    const SALES_TAX = 0.07;

    //Event handlers that runs the calcTotal function when the element is clicked
    document.getElementById("chicken").onclick = calcTotal;
    document.getElementById("halibut").onclick = calcTotal;
    document.getElementById("burger").onclick = calcTotal;
    document.getElementById("salmon").onclick = calcTotal;
    document.getElementById("salad").onclick = calcTotal;

    //Creating a calcTotal function
    function calcTotal () {
        let cost = 0;
        let buyChicken = document.getElementById("chicken").checked;
        let buyHalibut = document.getElementById("halibut").checked;
        let buyBurger = document.getElementById("burger").checked;
        let buySalmon = document.getElementById("salmon").checked;
        let buySalad = document.getElementById("salad").checked;

        //Comparison operator to increase the value of cost by the value of constant variable
        cost += buyChicken ? CHICKEN_PRICE : 0;
        cost += buyHalibut ? HALIBUT_PRICE : 0;
        cost += buyBurger ? BURGER_PRICE : 0;
        cost += buySalmon ? SALMON_PRICE : 0;
        cost += buySalad ? SALAD_PRICE : 0;

        //Set property of foodTotal to the value returned by the formatCurrency function using cost as the parameter
        document.getElementById("foodTotal").innerHTML = formatCurrency(cost);

        //Declaring tax variable and setting its value to equal cost times SALES_TAX
        let tax = cost * SALES_TAX;

        //Set property of foodTax to the value returned by the formatCurrency function using tax as the parameter
        document.getElementById("foodTax").innerHTML = formatCurrency(tax);

        //Declare the totalCost variable and setting its value to equal cost plus tax
        let totalCost = cost + tax;

        //Set property of totalBill to the value returned by the formatCurrency function using totalCost as the parameter
        document.getElementById("totalBill").innerHTML = formatCurrency(totalCost);

    }

// Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }
