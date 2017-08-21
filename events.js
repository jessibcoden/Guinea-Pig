console.log("Guinea Piggy!!");

// ***** When any section is clicked the output target text should be "You clicked on the {text of the section} section" *****

//1. add event listener to entire body and create the function in that line of code passing the event as the argument.   2.write if statement saying "If the event (or, 'click') occurs on the element with the class name 'article-section', then the HTML of the variable 'output' should include 'You clicked on {the HTML content of the of the target element}'".
var output = document.getElementById("output-target"); 

document.body.addEventListener('click', function(event) {
	console.log(event);
	if(event.target.className === 'article-section'){
	output.innerHTML = `<p>You clicked on ${event.target.innerHTML}.</p>`;}
});


// ***** When the mouse is over the h1 tag, the output element should contain the text "You moved your mouse over the header". *****
var pageTitle = document.getElementById("page-title");

pageTitle.addEventListener('mouseover', function(ev) {
	console.log(ev);
	output.innerHTML = `<p>You moved your mouse over the header.</p>`;
});


// ***** When the mouse leaves the h1 tag, the output element should contain the text "You left me!!". *****
pageTitle.addEventListener('mouseout', function(eve) {
	console.log(eve);
	output.innerHTML = `<p>You left me!!</p>`;
});


// ***** When you type characters into the input field, the output element should mirror the text in the input field. *****
var input = document.getElementById("keypress-input");

input.addEventListener('keypress', function(even) {
	console.log(even);
	output.innerHTML = `<p>${input.value}</p>`;
});


// ***** When you click the "Add color" button, the guinea-pig element's text color should change to blue. *****
//classList is a property of the object 'guineaPigDiv', .add is a method which is adding the css styling of the class 'color-it' to guineaPigDiv
var guineaPigDiv = document.getElementById("guinea-pig");

document.body.addEventListener('click', function(e) {
	console.log(e);
	if(event.target.id === 'add-color'){
	guineaPigDiv.classList.add('color-it');}
});


// ***** When you click the "Hulkify" button, the guinea-pig element's font size should become much larger. *****
document.body.addEventListener('click', function(crap) {
	console.log(crap);
	if(event.target.id === 'make-large'){
	guineaPigDiv.classList.add('bigger');}
});


// ***** When you click the "Capture it" button, the guinea-pig element should have a border added to it. *****
document.body.addEventListener('click', function(poo) {
	console.log(poo);
	if(event.target.id === 'add-border'){
	guineaPigDiv.classList.add('pig-border');}
});


// ***** When you click the "Rounded" button, the guinea-pig element's border should become rounded. *****
document.body.addEventListener('click', function(event) {
	console.log(event);
	if(event.target.id === 'add-rounding'){
	guineaPigDiv.classList.add('border-round');}
});

	
// ***** The first section's text should be bold. *****
//1. use console.dir to view directory of element - [0] is the location of the first section in the Dom article array. All sections have the been assigned the class name "article-section" and [0] is the location of the first section.   2. use dot notation next because the contents of an array are objects - className is the property.  3. use += to add an additional class name without deleting the existing class name, sectionOne is the additional class to use to style in CSS
console.dir(document.getElementsByClassName('article-section')[0].className);
document.getElementsByClassName('article-section')[0].classList.add('introduction');


// ***** The last section's text should be bold and italicized. *****
document.getElementsByClassName('article-section')[5].classList.add('conclusion');


// ***** Make the buttons stop appearing next to each other as inline elements. Change them into block elements.*****
//1. create an array consisting of each button's id.  2. forEach id run the annonomys function which assigns each button a class of 'button-display'
['add-color', 'make-large', 'add-border', 'add-rounding'].forEach(function(id) {
	document.getElementById(id).classList.add('button-display');
});