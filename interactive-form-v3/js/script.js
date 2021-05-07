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
console.log(color, design, colorOptions);
color.disabled = true;

//when they pick a design, then they get color choices

design.addEventListener('change', (e) => {
    color.disabled = false;
    for(let i=1; i<colorOptions.length; i++) {
    const eventT = e.target.value;
    const attribute = colorOptions[i].getAttribute('data-theme');
        console.log(eventT);
        console.log(attribute);

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

// const activities = document.getElementById('activities');
// const activitiesCost = document.getElementById('activities-cost');
// const totalCost = 0;
// console.log(activities, activitiesCost, totalCost);

// activities.addEventListener('change', (e) => {
//     const dataCost = e.target.getAttribute('data-cost');
//     parseInt(dataCost);
//     console.log(dataCost);
//     if (e.target === 'checked') {
//         totalCost = totalCost + dataCost;
//     }
// }) 



// Still inside the event listener, create a conditional to determine if the event.target was just checked or unchecked. 
// The checked property will be helpful here.
//  If the event.target was checked, then add the "data-cost" of the event.target to the total variable that was created earlier. 
//  If the event.target was unchecked, then subtract the “data-cost”.
// To test this, you can log out the total cost variable as well as the checked property of the event.target. 
//You’ll have to select activities to see this log statement as well.

// Lastly, update the innerHTML of the “Total:” <p> element with the new total cost, 
//but mind the formatting so that the end result still resembles the initial text: "Total: $0".