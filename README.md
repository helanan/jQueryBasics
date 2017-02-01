#Introduction to jQuery
##Basic syntax and overview of how to implement jQuery into code over vanilla javascript

###Before you begin: 

- make sure jquery library has loaded and document is ready
- using cdn but can also use npm install

####Basics

- jQuery *always* returns an array of elements, EVEN when theres only one
	- therefore always need to specify which array object to select with selector for ex: [0]

#####Selecting By Tag Name
- $("button");
- button.html();

#####Selecting By Tag Name
- $(".element--name").each(function(arrayIndex, currentElement){});
- output: arrayIndex & current html element
	-Index values of items

#####Creating Your Own Attributes
- can create any attribute in jQuery by selecting its parent element and its assigned attribute

#####Find an element
- .find

#####AJAX Calls
- $.ajax ({url: "#"}).done(functionIWantjQueryToExecute);
- function functionIWantjQueryToExecute(item) {for loop {currentItem = itemList.items[i]; $("#elementName").append("html element" + item.attribute);}}

##Installing NPM

- Step 1: create a lib folder && cd 
- Step 2: npm init
- Step 3: npm install grunt --save-dev (if developing locally)