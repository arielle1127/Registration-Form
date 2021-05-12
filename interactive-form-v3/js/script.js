/*TechDegree Project  3
Interactive Form 
*/


//name field highlight
//job role, make "other" appear when selected in menu

const name = document.querySelector('input');
name.focus();
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
//QUESTION ==== What does this do? -----> paymentMethod.children[1].setAttribute.selected = true;
//Question === How do I check the activitiesValidator to see if a box was checked?
//Question === Why do the number requirements for my regex not work? It takes the lower limit, but doens't work for the upper limit


//FORM VALIDATION


const email =  document.getElementById('email');
const cardNumber =  document.getElementById('cc-num');
const zipcode =  document.getElementById('zip');
const cvv = document.getElementById('cvv');
const form = document.querySelector('form');


const nameValidator = () => {
    const nameValue = name.value;
    const nameIsValid = /[a-zA-Z]{1,}/.test(nameValue);
    return nameIsValid;
}

const emailValidator = () => {
    const emailValue = email.value;
    const emailIsValid = /\w{3,}@\w{3,}(.com)/.test(emailValue);
    return emailIsValid;
}

const activitiesValidator = () => {                     //I don't know how to check this?

    const activitiesValue = activities.value;
    const activitiesIsValid = activitiesValue.checked;
    return activitiesIsValid;
}

const cardNumberValidator = () => {
    const cardNumberValue = cardNumber.value;
    const cardNumberIsValid = /\d{13,16}/.test(cardNumberValue);   //this is also not working for 16 limit?
    return cardNumberIsValid;
}

const zipcodeValidator = () => {
    const zipcodeValue = zipcode.value;
    const zipcodeIsValid = /\d{5}/.test(zipcodeValue);  //Why is my reg ex not working???
    return zipcodeIsValid;
}

const cvvValidator = () => {
    const cvvValue = cvv.value;
    const cvvIsValid = /\d{3}/.test(cvvValue);   //upper limit  also not working??
    return cvvIsValid;
}

form.addEventListener('submit', (e) => {
     //e.preventDefault();
     nameValidator();
     emailValidator();
    activitiesValidator();
    cardNumberValidator();
     zipcodeValidator();
     cvvValidator();

    if (!nameValidator()) {
        e.preventDefault();
        alert('Invalid name');
        // parent.classList.add('not-valid');
        // parent.classList.remove('valid');
        // parent.lastElementChild.style.display = 'block';
     } 
    if (!emailValidator()) {
        e.preventDefault();
        alert('Invalid email');
     } 
    if (!activitiesValidator()) {
        e.preventDefault();
        alert('Choose at least one');
    } 
    if (!cardNumberValidator()) {   // if CARD PAYMENT IS SELECTED  && 
        e.preventDefault();
        alert('Invalid card number');
    } 
    if (!zipcodeValidator()) {
        e.preventDefault();
        alert('Invalid zipcode');
    } 
    if (!cvvValidator()) {
        e.preventDefault();
        alert('Invalid cvv');
    } 
   
})



// const isChecked = e.target.checked;
// Accessibility


//QUESTION: WHy is the i undefined in this addEventListener?

// const checkboxes = document.querySelectorAll("input[type='checkbox']");

// for(let i = 0; i < checkboxes.length; i++); {
// console.log(checkboxes[1]);
  
// checkboxes[i].addEventListener('focus', () => {    //why is i undefined?
//     parentElement.classList.add('focus');
    
//     })

// checkboxes[i].addEventListener('blur', () => {    //why is i undefined?
//     parentElement.classList.add('blur');
        
//     })
// }
