///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce((preItem, curItem) => (preItem + curItem.price), 0)
// console.log(summedPrice)

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
const calcFinalPrice = (carTotal, couponValue, tax) => ((carTotal - couponValue) * (1 + tax))
// console.log(calcFinalPrice(20, 5, .06))


//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    name: because we need to identify the customer
        it should be a string because it only needs to be text
    email: because we need comunicate with the customer
        it should be a string because it only needs to be text
    customerId: because we need uniquly identify the customer
        it needs to be unique and uniform and I would use a number because it uses slightly less space 
    phoneNumber: because we need a secondary way to communicate the customer
        I would save it as a number for size and validation purposes.

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

const customer1 = {name: "Jim Jones", email: "jimjones@supercool.com", customerId: 64718367, phoneNumber: 6059874562}
// console.log(customer1)