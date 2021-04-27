"use strict";

import "./sass/style.scss";
import { headers, endpoint } from "./settings.js"; 
//import { nextPrev } from "./form.js"; 
// import { showTab, nextPrev, validateForm, fixStepIndicator } from "./form.js"; 

window.addEventListener("DOMContentLoaded", init); 

const popup = document.querySelector("#popup"); 

function init(){
  console.log("hul"); 

// document.querySelector(".frontpage button").addEventListener("click", showPopup);
document.querySelector("#frontpagebutton").addEventListener("click", () => popup.style.visibility = "visible"); 

//Luk popup
document.querySelector(".close-icon").addEventListener("click", () => popup.style.visibility = "hidden");

//FORM (knapper)
document.querySelector("#knap1").addEventListener("click", nextTab); 

}

// function showPopup(){
//   document.querySelector("#popup").addEventListener("click", () => popup.style.display = "none"); 
// }



function nextTab(){
  document.querySelector(".fieldset1").classList.add("hide"); 
  document.querySelector(".fieldset2").classList.remove("hide"); 
document.querySelector("#knap2").addEventListener("click", lastTab); 
}

function lastTab(){
  document.querySelector(".fieldset2").classList.add("hide"); 
  document.querySelector(".fieldset3").classList.remove("hide"); 
}



function post(data){
  console.log(data); 
  const postData = JSON.stringify(data); 
  fetch(endpoint, {
    method : "POST", 
    headers : headers,
    body: postData,
  })
  .then((res) => res.json())
  .then((data) => console.log(data));  
}

const form = document.querySelector("form"); 

const formData = new FormData(form); 

const formFields = Object.fromEntries(formData.entries()); 

// console.log(formFields); 

function sendData(){
  post({
    fullname: form.elements.fullname.value, 
    gamertag: form.elements.gamertag.value,
    profile_img: form.elements.profileimage.value, 
    email: form.elements.email.value,
    date_of_birth: form.elements.dob.value, 
    phonenumber: form.elements.phonenumber.value,
    password: form.elements.password.value, 
    // console: form.elements.console.value, 
    // game_type: form.elements.gametype.value,
    // game_title: form.elements.gametitle.value,
    // game_level: form.elements.gamelevel.value,
    game_hours: form.elements.hours.value,
    // game_time_of_day: form.elements.gametod.value,
    // improve_areas: form.elements.improvements.value,
    // interested_areas: form.elements.learning.value, 
    comment: form.elements.comments.value
  }); 
  
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  sendData(); 
})

