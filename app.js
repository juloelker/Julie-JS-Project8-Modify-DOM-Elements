//about 20 small code tasks here

// Steps to add a new element to the DOM
// create a new element, li
// add class to it
// add ID to it (class and ID are optional, probably will use only one of these)
// add an attribute
// create text node and append it as a child of the parent ul

//add to the bulleted list
const liBullet = document.createElement("li");
liBullet.className = "bullet-item";
liBullet.id = "new-bullet";
liBullet.setAttribute("title", "some title");
liBullet.appendChild(document.createTextNode("Julie's new bullet"));
document.querySelector("ul.bullet-list").appendChild(liBullet);
console.log(liBullet);

//add to the numbered list
const liNum = document.createElement("li");
liNum.className = "number-item";
liNum.id = "some-number";
liNum.setAttribute("title", "some other title");
liNum.appendChild(document.createTextNode("next item"));
document.querySelector("ol.number-list").appendChild(liNum);
console.log(liNum);

// Replace elements
// 	have to find the parent of the element you
//want to replace

//Remove element

//remove a child element

//find classes
//add a class

//remove a class

// set attribute
// something;

// does it have an attribute? (line 46)
// set another attribute, title (line 45)
// remove an attribute, title (line 47)

//attributes:
//innerText
//innerHTML
//textContent
