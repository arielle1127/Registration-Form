/*TechDegree Project  3
Interactive Form 
*/


//NAME FIELD HIGHLIGHT
//job role, make "other" appear when selected in menu

const name = document.querySelector('input');
name.focus();
const jobRole = document.querySelector('select');
const otherRole  =  document.getElementById('other-job-role');
otherRole.style.display =  'none';

//JOBROLE + OTHER DISPLAY

jobRole.addEventListener('change', () => {
    if (jobRole.value === 'other'){
        otherRole.style.display = 'block';
    } else {
        otherRole.style.display =  'none';
    }
});

//TSHIRT DESIGN SELECTION
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

//ACTIVITIES COST SECTION
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


//PAYMENT SELECTION


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

//FORM VALIDATION VARIABLES/FUNCTIONS DECLARED



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

const activitiesValidator = () => {                    
    const activitiesIsValid = totalCost > 0;
    return activitiesIsValid;
}

const cardNumberValidator = () => {
    const cardNumberValue = cardNumber.value;
    const cardNumberIsValid = /^\d{13,16}$/.test(cardNumberValue);   
    return cardNumberIsValid;
}

const zipcodeValidator = () => {
    const zipcodeValue = zipcode.value;
    const zipcodeIsValid = /^\d{5}$/.test(zipcodeValue);  
    return zipcodeIsValid;
}

const cvvValidator = () => {
    const cvvValue = cvv.value;
    const cvvIsValid = /^\d{3}$/.test(cvvValue);   
    return cvvIsValid;
}

//FORM VALIDATION FUNCTIONS CALLED 
//HINTS DISPLAYED/HIDDEN UPON INVALID/VALID 

form.addEventListener('submit', (e) => {
     e.preventDefault();
     nameValidator();
     emailValidator();
     activitiesValidator();

     cardNumberValidator();
     zipcodeValidator();
     cvvValidator();


    if (!nameValidator()) {
        e.preventDefault();
        name.parentElement.className.add = 'not-valid';
        name.parentElement.className.remove = 'valid';
        name.parentElement.lastElementChild.style.display = 'block';

     } else {
        name.parentElement.className.add = 'valid';
        name.parentElement.className.remove = 'not-valid';
        name.parentElement.lastElementChild.style.display = 'none';

     }
     
    if (!emailValidator()) {
        e.preventDefault();
        email.parentElement.className.add = 'not-valid';
        email.parentElement.className.remove = 'valid';
        email.parentElement.lastElementChild.style.display = 'block';
     } else {
        email.parentElement.className.add = 'valid';
        email.parentElement.className.remove = 'not-valid';
        email.parentElement.lastElementChild.style.display = 'none';

     }

    if (!activitiesValidator()) {
        e.preventDefault();
       activitiesBox.parentElement.className.add = 'not-valid';
       activitiesBox.parentElement.className.remove = 'valid';
       activitiesBox.parentElement.lastElementChild.style.display = 'block';
    } else {
        activitiesBox.parentElement.className.add = 'valid';
        activitiesBox.parentElement.className.remove = 'not-valid';
        activitiesBox.parentElement.lastElementChild.style.display = 'none';
     }



    if (creditCard.selected === true  && !cardNumberValidator()) {  
        e.preventDefault();
        alert('Invalid card number');
    } 
    if (creditCard.selected === true  && !zipcodeValidator()) {
        e.preventDefault();
        alert('Invalid zipcode');
    } 
    if (creditCard.selected === true  && !cvvValidator()) {
        e.preventDefault();
        alert('Invalid cvv');
    } 
   
})

    



// ACCESSIBILITY USING FOCUS AND BLUR

//puts the focus on each checkbox input element when user clicks tab
//loop iterates through each checkbox, one at a time

const checkboxes = document.querySelectorAll("input[type='checkbox']");
const activitiesBox = document.getElementById('activities-box');

for (let i=0; i<checkboxes.length; i++) {

  
checkboxes[i].addEventListener('focus', () => {   
     activitiesBox.children[i].classList.add('focus');
     })

checkboxes[i].addEventListener('blur', () => {    
    activitiesBox.children[i].classList.add('blur');
    activitiesBox.children[i].classList.remove('focus');    
    })
}
