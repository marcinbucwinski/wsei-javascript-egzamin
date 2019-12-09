document.addEventListener('DOMContentLoaded', function () {
   
   var button1=document.getElementById("button-1");
button1.addEventListener("click", function addItem() {
    var a=document.createElement("li");
    a.innerHTML="Chleb";
    document.getElementById("shopping-list").appendChild(a);
});

var button2=document.getElementById("button-2");
button2.addEventListener("click", function removeItem() {
    var b=document.getElementById("shopping-list");
    b.removeChild(b.lastElementChild);    
});

var button3=document.getElementById("button-3");
button3.addEventListener("click", function cloneItem() {
    var c=document.getElementById("shopping-list").children[1];
    var d=c.cloneNode(true);
    document.getElementById("shopping-list").appendChild(d);    
});
});
