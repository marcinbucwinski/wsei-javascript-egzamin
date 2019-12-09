var button=document.querySelectorAll("button");
for(var i=0; i<button.length; i++){   
    button[i].addEventListener("click", function addText(){
    document.getElementById("container").innerText=this.dataset.text;
    });
};
