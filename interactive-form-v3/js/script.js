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


