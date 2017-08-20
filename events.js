console.log("Guinea Piggy!!");

// When any section is clicked the output target text should be "You clicked on the {text of the section} section"

var output = document.getElementById("output-target"); 
var guineaPigDiv = document.getElementById("guinea-pig");

//add event listener to entire body and create the function in that line of code passing the event as the argument. 
document.body.addEventListener('click', function(event) {
	console.log(event);
//write if statement saying "If the event (or, 'click') occurs on the element with the class name 'article-section', then the HTML of the variable 'output' should include 'You clicked on {the HTML content of the of the target element}'".
	if(event.target.className === 'article-section'){
	output.innerHTML = `<p>You clicked on ${event.target.innerHTML}.</p>`;}
// When you click the "Add color" button, the guinea-pig element's text color should change to blue.
	else if(event.target.id === 'add-color'){
	guineaPigDiv.style.cssText = 'color: blue;';}
// When you click the "Hulkify" button, the guinea-pig element's font size should become much larger.
	else if(event.target.id === 'make-large'){
	guineaPigDiv.style.cssText = 'font-size: 5em;';}
// When you click the "Capture it" button, the guinea-pig element should have a border added to it.
	else if(event.target.id === 'add-border'){
	guineaPigDiv.style.cssText = 'border: 5px dotted pink;';}
// When you click the "Rounded" button, the guinea-pig element's border should become rounded.
	else if(event.target.id === 'add-rounding'){
	guineaPigDiv.style.cssText = 'border: 5px solid pink; border-radius: 15%;';}
});

// When the mouse is over the h1 tag, the output element should contain the text "You moved your mouse over the header".
var pageTitle = document.getElementById("page-title");

pageTitle.addEventListener('mouseover', function(ev) {
	console.log(ev);
	output.innerHTML = `<p>You moved your mouse over the header.</p>`;
});


// When the mouse leaves the h1 tag, the output element should contain the text "You left me!!".
pageTitle.addEventListener('mouseout', function(evt) {
	console.log(evt);
	output.innerHTML = `<p>You left me!!</p>`;
});

// When you type characters into the input field, the output element should mirror the text in the input field.
var input = document.getElementById("keypress-input");

input.addEventListener('keypress', function(e) {
	console.log(e);
	output.innerHTML = `<p>${input.value}</p>`;
});
	
// The first section's text should be bold.
//use console.dir to view directory of element - [0] is the location of the first section in the Dom article array
console.dir(document.getElementsByClassName('article-section')[0].);

document.getElementsByClassName('article-section')[0].className += ' introduction ';//all sections have the been assigned the class name "article-section", [0] is the location of the first section, use dot notation next because the contents of an array are objects, className is the property, use += to add an additional class name without deleting the existing class name, sectionOne is the additional class to use to style in CSS

// The last section's text should be bold and italicized.
document.getElementsByClassName('article-section')[5].className += ' conclusion ';

// Make the buttons stop appearing next to each other as inline elements. Change them into block elements.
