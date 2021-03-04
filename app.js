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
//want to replace, replaced the bullet list heading with an h2
//and new text
const newBulletHeading = document.createElement("h2");
newBulletHeading.id = "bullet-heading-new";
newBulletHeading.appendChild(document.createTextNode("Bullet List Again H2"));
const oldBulletHeading = document.getElementById("bullet-heading");
const bulletContainer = document.querySelector("#bullet-container");
bulletContainer.replaceChild(newBulletHeading, oldBulletHeading);
console.log(newBulletHeading);

//Remove element, remove one of the middle bullet items
const liBulletsAll = document.querySelectorAll(".bullet-item");
liBulletsAll[1].remove();
console.log(liBulletsAll);

//remove a child element, of the parent numbered list
const numList = document.querySelector(".number-list");
const numItems = document.querySelectorAll(".number-item");
console.log(numList);
console.log(numItems);
const shortnumList = numList.removeChild(numItems[3]); //remove "green"

//find the only numbered item that has an id
//add the id to the other numbered items
//set up a const for the class of numItems

const numItemsClass = document.getElementsByClassName("number-item");
// console.log(numItemsClass);
const numItemsId = document.getElementById("some-number"); //find the num item with id #some-number
//which is on the last num item only
console.log(numItemsId);

//add the id to the other items
//tried this with an if condition, which turned out was not needed

for (let i = 0; i < numItemsClass.length; i++) {
  //if (numItemsClass[i] !== numItemsId) {
  numItemsClass[i].id = "some-other-number";
  // }
}
console.log(numList);

//add a class to bulleted items, did not work
//probably because I should be adding a class
//to one element, not to a list of elements
// const bulletItems = document.querySelector(".bullet-list");
// console.log(bulletItems);
// for (let i = 0; i < bulletItems.length; i++) {
//   bulletItems[i].addClassName = "new-class";
// }
// console.log(bulletItems);
// console.log(document.querySelector("ul"));
// const bulletsUpdated = document.getElementsByClassName("new-class");
// console.log(bulletsUpdated); //empty HTML collection

//add a className to the first bullet item in
//the bulleted list
//className is one property that can have multiple values,
//i.e., multiple classes in the HTML element
const bulletItem = document.querySelector("ul li");
bulletItem.className = "bullet-item julie";
console.log(bulletItem.classList);

//remove julie className
bulletItem.classList.remove("julie");
console.log(bulletItem.classList);

//difference between classList and className
//add more classes to the second bullet item
//classList will add another class name to the existing
//className will replace all classes with the ones being
//supplied
//again className is one property, replaces all classes on
//a given element
//classList is a list of all classes on a given element,
// can add one or more to the mix
const bulletItemSecond = document.querySelector("ul li:nth-child(2)");
bulletItemSecond.classList.add("class2", "class3");
console.log(bulletItemSecond);

bulletItemSecond.classList.remove("bullet-item");

// does it have an attribute?
//set the href to google

const bulletItemLink = document.querySelector("ul li:nth-child(5)");
const target = bulletItemLink.children[0];

console.log(bulletItemLink);
const targetValue = (target.href = "http://google.com");
console.log(targetValue);

const hrefAttr = target.getAttribute("href");
console.log(hrefAttr);

// set another attribute, title
target.setAttribute("title", "Google");
console.log(target);

// remove an attribute, from a bullet
// target.removeAttribute("title");
