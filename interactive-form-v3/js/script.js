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
console.log(eventT);

const attribute = colorOptions[i].getAttribute('data-theme');
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





// If the user selects "Theme - JS Puns" then the "Color"
//      menu should only display "Cornflower Blue," "Dark Slate Grey," and "Gold."
// If the user selects "Theme - I ♥ JS" then the "Color" 
//     menu should only display "Tomato," "Steel Blue," and "Dim Grey."

// A select element is used for the color selection. 
// There are two parts to a select element display: 
//     the element field
//      and the drop down menu which opens after clicking on the field. 
// Both the "Color" field and drop down menu must correctly update when the user selects a new theme. 
// Neither should be empty or display unavailable colors.

// Pro Tip:
// The selected attribute can determine which option element is displayed in the select field.
// The hidden attribute can prevent option elements from being displayed in the drop down menu.




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