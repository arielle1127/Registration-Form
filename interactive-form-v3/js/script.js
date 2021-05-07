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
 for(let i=0; i<=colorOptions.length; i++) {
const eventT = e.target.value;
console.log(eventT);

const attribute = color.getAttribute('data-theme');
console.log(attribute);

if (attribute === eventT) {
    colorOptions.hidden = false;
    colorOptions.setAttribute = true;
} else {
    colorOptions.hidden = true;
    colorOptions.setAttribute = false;
}

 }

})


// Still in the loop, create a conditional that checks if the two variables that were just created are equal to one another. 
// If they are, set the hidden property of the loop’s current option element to false,
//  and set the selected attribute of the loop’s current option element to true. 
//  And if the two variables are not equal to one another, set the hidden property of the loop’s current option element to true,
//   and set the selected attribute of the loop’s current option element to false.
// You can use dot notation to update the hidden property. But you’ll need to use the setAttribute or removeAttribute methods to update the selected attribute.
// Using dot notation or the getAttribute method, the hidden property and the selected attribute of an element can be logged out to the console for inspection.
// Now save and refresh the page, and when a theme is selected, the "Color" field should be enabled and it’s value should update along with the options in the "Color" drop-down menu.




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