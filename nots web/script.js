// select the popup overlay popup-box button
 var popupoverlay=document.querySelector(".popup-overlay");
 var popupbox=document.querySelector(".popup-box");
 var addpopupbutton=document.getElementById("add-popop-button");

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block";
    popupbox.style.display="block";
})

//select cancel button
var cancelbutton=document.getElementById("cancel")

cancelbutton.addEventListener("click",function(event){
    event.preventDefault();
    popupoverlay.style.display="none";
    popupbox.style.display="none";
})

//select container, add, add-title your-name, description

var container=document.querySelector(".container");
var addbutton=document.getElementById("add");
var addtitle = document.getElementById("add-title");
var yourname=document.getElementById("your-name");
var descriptionvalue=document.getElementById("Description")

 

 addbutton.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","box-container")
    div.innerHTML=`<h2>${addtitle.value}</h2>
    <h5>${yourname.value}</h5>
    <p>${descriptionvalue.value}</p>
    <button onclick="deletebox(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display="none";
    popupbox.style.display="none";
    
})

function deletebox(event){
    event.target.parentElement.remove();
}