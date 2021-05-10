/*TechDegree Project  3
Interactive Form 
*/


//name field highlight
//job role, make "other" appear when selected in menu

const nameField = document.querySelector('input');
nameField.focus();
const jobRole = document.querySelector('select');
const otherRole  =  document.getElementById('other-job-role');
otherRole.style.display =  'none';

jobRole.addEventListener('change', () => {
    if (jobRole.value === 'other'){
        otherRole.style.display = 'block';
    } else {
        otherRole.style.display =  'none';
    }
});

//tshirt info section
//after they choose design, then they choose available colors
//color options are default disabled until they choose design

const color = document.getElementById('color');
const design = document.getElementById('design');
const colorOptions = document.getElementById('color').children;
color.disabled = true;

//when they pick a design, then they get color choices

design.addEventListener('change', (e) => {
    color.disabled = false;
    for(let i=1; i<colorOptions.length; i++) {
    const eventT = e.target.value;
    const attribute = colorOptions[i].getAttribute('data-theme');

    if (attribute === eventT) {
        colorOptions[i].hidden = false;
        colorOptions[i].setAttribute = true;
    } else {
        colorOptions[i].hidden = true;
        colorOptions[i].setAttribute = false;
    }
  }
})

// activities section
//The total cost of the selected activities in the "Register for Activities" section should be totaled and displayed

const activities = document.getElementById('activities');
const activitiesCost = document.getElementById('activities-cost');
let totalCost = 0;

activities.addEventListener('change', (e) => {
    const dataCost = e.target.getAttribute('data-cost');
    if (e.target.checked === true) {
        activitiesCost.innerHTML = `Total: $${totalCost += +dataCost}`;
    } 
    if (e.target.checked === false) {
        activitiesCost.innerHTML = `Total: $${totalCost -= +dataCost}`;
    }
}) 

//Payment Section


//  The preferred or most common payment method option should be selected
//  and the corresponding payment form sections should be displayed by default,
//   while the other payment form sections should be hidden.

const paymentMethod = document.getElementById('payment');
const creditCard = document.getElementById('credit-card');
const paypal = document.getElementById('paypal');
const bitcoin = document.getElementById('bitcoin');
console.log(paymentMethod, creditCard, paypal, bitcoin);

paypal.style.display = 'none';
bitcoin.style.display = 'none';

paymentMethod.children[1].setAttribute.selected = true;

paymentMethod.addEventListener('change', (e) => {
    if (e.target.value === 'bitcoin') {
        bitcoin.style.display = 'block';
        creditCard.style.display = 'none';
        paypal.style.display = 'none';

        
    } else if (e.target.value === 'paypal'){
        paypal.style.display = 'block';
        bitcoin.style.display = 'none';
        creditCard.style.display = 'none';

        
    } else {
    creditCard.style.display = 'block';
    paypal.style.display = 'none';
    bitcoin.style.display = 'none';
    }
})


//QUESTION ==== there must be a better more concise way to do this besides listing all options if else if else if else
//QUESTION ==== What does this do? makes the attribute of 'credit card' = selected? paymentMethod.children[1].setAttribute.selected = true;


//FORM VALIDATION


const email =  document.getElementById('email');
const cardNumber =  document.getElementById('cc-num');
const zipCode =  document.getElementById('zip');
const cvv = document.getElementById('cvv');
const form = document.querySelector('form');



form.addEventListener('submit', () => {
const nameValue = nameField.value

})


//Inside the event listener, use the name variable, dot notation and the value property to create a new variable 
//that references the value of the “Name” field.

//Create another variable to store the results of testing the name value variable that was just created. 
//Regex will be helpful, and the regex course from this unit will demonstrate how to do this. 
//This variable will equal true if the test passes, and false otherwise.
