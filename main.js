console.log("Script attached");
/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

var node1 = document.getElementById("node1");
node1.innerText = "I used the getElementById('node1') method to access this";

var node2 = document.getElementsByClassName("node2")[0];
node2.innerText = "I used the getElementByClassName('node2') method to access this";

var h3Nodes = document.getElementsByTagName("h3");
for (var i = 0; i < h3Nodes.length; i++) {
  h3Nodes[i].innerText = "I used the getElementByTagName('h3') method to access all of these";
}

/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

var newParagraph = document.createElement("p");
newParagraph.innerText = "This node was created using the createElement() method";


var parentContainer = document.getElementById("parent");
parentContainer.appendChild(newParagraph);


var newLink = document.createElement("a");
newLink.innerText = "I am a <a> tag";


newLink.href = "https://www.example.com";


parentContainer.insertBefore(newLink, newParagraph);

/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

var childNode = document.getElementById("N1");
var newChildNode = document.createElement("p");
newChildNode.innerText = "New Child Node";
childNode.parentNode.replaceChild(newChildNode, childNode);

setTimeout(function () {
  newChildNode.parentNode.removeChild(newChildNode);
}, 2000);

/*----------- Exercise #4: LIST ITEMS ----------- */

let list = [ "apples", "bananas", "carrots", "dragon fruit", "eggplant", "fish", "grapes", "honey", "ice bag", "juice (any kind)" ];

var ulElement = document.createElement("ul");


for (var i = 0; i < list.length; i++) {
  var liElement = document.createElement("li");
  liElement.innerText = list[i];
  ulElement.appendChild(liElement);
}

var container4 = document.querySelector(".exercise-container.exercise4 #container");
container4.appendChild(ulElement);

/*----------- Exercise #5: DOM EVENTS --------------*/

function show() {
  var modalDiv = document.createElement("div");
  modalDiv.style.position = "fixed";
  modalDiv.style.top = "0";
  modalDiv.style.left = "0";
  modalDiv.style.width = "100%";
  modalDiv.style.height = "100%";
  modalDiv.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  modalDiv.style.color = "white";
  modalDiv.style.display = "flex";
  modalDiv.style.justifyContent = "center";
  modalDiv.style.alignItems = "center";

  var message = document.createElement("p");
  message.innerText = "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user";

  var closeButton = document.createElement("button");
  closeButton.innerText = "Close";
  closeButton.addEventListener("click", function() {
    modalDiv.style.display = "none";
  });

  modalDiv.appendChild(message);
  modalDiv.appendChild(closeButton);

  document.body.appendChild(modalDiv);

  
  alert("Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user");
}

var btn = document.getElementById("btn");
btn.addEventListener("click", show);
