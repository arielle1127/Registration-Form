/*TechDegree Project  3
Interactive Form 
*/


//NAME FIELD HIGHLIGHT

    //puts focus on name input field as default

const name = document.querySelector('input');
name.focus();

//JOBROLE + OTHER DISPLAY

    //input field for "other" job role is hidden by default

const jobRole = document.querySelector('select');
const otherRole  =  document.getElementById('other-job-role');
otherRole.style.display =  'none';

    //input field for "other" job role appears only when selected in menu, disappears when deselected   

jobRole.addEventListener('change', () => {
    if (jobRole.value === 'other'){
        otherRole.style.display = 'block';
    } else {
        otherRole.style.display =  'none';
    }
});

//TSHIRT DESIGN SELECTION
    //colors menu is disabled by default 

const color = document.getElementById('color');
const design = document.getElementById('design');
const colorOptions = document.getElementById('color').children;
color.disabled = true;

    //color field updates with available colors when Tshirt design is selected

design.addEventListener('change', (e) => {
    color.disabled = false;
    for(let i=1; i<colorOptions.length; i++) {
    const eventT = e.target.value;
    const attribute = colorOptions[i].getAttribute('data-theme');

    if (attribute === eventT) {
        colorOptions[i].hidden = false;
        colorOptions[i].selected = true;
    } else {
        colorOptions[i].hidden = true;
        colorOptions[i].selected = false;
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
    //credit card displayed as default

const paymentMethod = document.getElementById('payment');
const creditCard = document.getElementById('credit-card');
const paypal = document.getElementById('paypal');
const bitcoin = document.getElementById('bitcoin');

paypal.style.display = 'none';
bitcoin.style.display = 'none';

const creditCardDefault = paymentMethod.children[1]
creditCardDefault.setAttribute('selected', 'selected');

    //when one payment method is selected, it is displayed and all other payment methods are hidden

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

    //functions that check if the value of each field is valid determined by /regex/.test method

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
    //when user clicks 'submit', the validator functions are called
    //conditional statements checking to see if each input field has a valid value
    //if the value is not valid, prevents page from refreshing automatically and displays validation error message
    //if value is valid, no error message is displayed and page is refreshed 

form.addEventListener('submit', (e) => {
    if (!nameValidator()) {
        e.preventDefault();
        name.parentElement.classList.add('not-valid');
        name.parentElement.classList.remove('valid');
        name.parentElement.lastElementChild.style.display = 'block';

     } else {
        name.parentElement.classList.add('valid');
        name.parentElement.classList.remove('not-valid');
        name.parentElement.lastElementChild.style.display = 'none';

     }
     
    if (!emailValidator()) {
        e.preventDefault();
        email.parentElement.classList.add('not-valid');
        email.parentElement.classList.remove('valid');
        email.parentElement.lastElementChild.style.display = 'block';
     } else {
        email.parentElement.classList.add('valid');
        email.parentElement.classList.remove('not-valid');
        email.parentElement.lastElementChild.style.display = 'none';

     }

    if (!activitiesValidator()) {
        e.preventDefault();
       activitiesBox.parentElement.classList.add('not-valid');
       activitiesBox.parentElement.classList.remove('valid');
       activitiesBox.parentElement.lastElementChild.style.display = 'block';
    } else {
        activitiesBox.parentElement.classList.add('valid');
        activitiesBox.parentElement.classList.remove('not-valid');
        activitiesBox.parentElement.lastElementChild.style.display = 'none';
     }
     
     //ONLY if credit card is the selected payment method, card detail validators are called

    if (paymentMethod.value === 'credit-card') {      
        if (!cardNumberValidator()) {
            e.preventDefault();
            cardNumber.parentElement.classList.add('not-valid');
            cardNumber.parentElement.classList.remove('valid');
            cardNumber.parentElement.lastElementChild.style.display = 'block';
        } else {
            cardNumber.parentElement.classList.add('valid');
            cardNumber.parentElement.classList.remove('not-valid');
            cardNumber.parentElement.lastElementChild.style.display = 'none';
        }
        if (!zipcodeValidator()) {
            e.preventDefault();
            zipcode.parentElement.classList.add('not-valid');
            zipcode.parentElement.classList.remove('valid');
            zipcode.parentElement.lastElementChild.style.display = 'block';
        } else {
            zipcode.parentElement.classList.add('valid');
            zipcode.parentElement.classList.remove('not-valid');
            zipcode.parentElement.lastElementChild.style.display = 'none';
        }
        if (!cvvValidator()) {
            e.preventDefault();
            cvv.parentElement.classList.add('not-valid');
            cvv.parentElement.classList.remove('valid');
            cvv.parentElement.lastElementChild.style.display = 'block';
        } else {
            cvv.parentElement.classList.add('valid');
            cvv.parentElement.classList.remove('not-valid');
            cvv.parentElement.lastElementChild.style.display = 'none';
        } 

    }
})


// ACCESSIBILITY
    //to improve visibility, each input field gets an obvious focus one at a time as user tabs through fields

const checkboxes = document.querySelectorAll("input[type='checkbox']");
const activitiesBox = document.getElementById('activities-box');

for (let i=0; i<checkboxes.length; i++) {

  
checkboxes[i].addEventListener('focus', () => {   
     activitiesBox.children[i].classList.add('focus');
     })

checkboxes[i].addEventListener('blur', () => {    
    activitiesBox.children[i].classList.remove('focus');    
    })
}