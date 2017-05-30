// 1) What is the difference between jQuery and JavaScript?
// jQuery is a type of shorthand for JS


// 2a) How do you create a new <h1> element with JavaScript?
document.createElement("h1");
// 2b) How do you create a new <div> element with jQuery?
$("").append("<div></div>")


// 3a) How do you create a new <p> element with text "hello" in JavaScript?
document.createElement("P").innerHTML = "hello";
// 3b) How do you create a new <p> element with text "hello" with jQuery?
$("").append("<p>Hello</p>")
// 4) What is the difference between the following 2 lines of jQuery code?
$('button');
$('<button>');
one is a string, the other is an element button


// 5a) How would you select the a div with a class name of "container" with plain
// javascript?
getElementsByClassName('container')
// 5b) How would you select that same element with jQuery?
$('.container')
// 6) How do you create a new <p> element with text of "hello" and add it do the DOM?
document.createElement("P").innerHTML = "hello";
