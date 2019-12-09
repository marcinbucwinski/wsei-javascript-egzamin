// Zadanie 4.1
var tagsOfElements=document.getElementsByClassName("sample_class");     
function getTagsOfElements(elements){
    var arrayOfelements=Array.from(elements);
    var arrayOfTags=[];
    for (var i=0; i<arrayOfelements.length; i++){
        arrayOfTags[i]=arrayOfelements[i].tagName;
    }; 
    return arrayOfTags;
};
console.log(getTagsOfElements(tagsOfElements));
 
// Zadanie 4.2
var classOfElement=document.getElementById("sample_id");
function getClassesOfElement(element){
    var elementClasses= Array.from(element.classList);
    return elementClasses;
};
console.log(getClassesOfElement(classOfElement));

// Zadanie 4.3
var innerTextOfElements=document.querySelectorAll(".sample_class_2 li");
function getInnerTextsOfElements(elements){
    var arrayOfelements=Array.from(elements);
    var innerTextsArray=[];
    for (var i=0; i<arrayOfelements.length; i++){
        innerTextsArray[i]=arrayOfelements[i].innerText;
    }; 
    return innerTextsArray;
};
console.log(getInnerTextsOfElements(innerTextOfElements));

// Zadanie 4.4
var hrefElements=document.querySelectorAll('a');
function getAddressesOfElements(elements){
    var elementsInArray=Array.from(elements);
    var hrefArray=[];
    for(var i=0; i<elementsInArray.length; i++){
        hrefArray[i]=elementsInArray[i].getAttribute("href");
    };
    return hrefArray;
};
console.log(getAddressesOfElements(hrefElements));

// Zadanie 4.5
var childOfElements=document.querySelector(".sample_class_3").children;
console.log(getTagsOfElements(childOfElements));
