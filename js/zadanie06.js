document.addEventListener('DOMContentLoaded', function () {
    var button1=document.getElementById("button-1");
button1.addEventListener("click", function addItem() {
    var createOfElement=document.createElement("li");
    createOfElement.innerHTML="Chleb";
    document.getElementById("shopping-list").appendChild(createOfElement);
});

var button2=document.getElementById("button-2");
button2.addEventListener("click", function removeItem() {
    var removeElement=document.getElementById("shopping-list");
    removeElement.removeChild(removeElement.lastElementChild);    
});

var button3=document.getElementById("button-3");
button3.addEventListener("click", function cloneItem() {
    var gettingElement=document.getElementById("shopping-list").children[1];
    var cloneElement=gettingElement.cloneNode(true);
    document.getElementById("shopping-list").appendChild(cloneElement);    
});
});
