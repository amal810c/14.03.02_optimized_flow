"use strict";

import "./sass/style.scss";
import { headers, endpoint } from "./settings.js"; 

window.addEventListener("DOMContentLoaded", init); 

const popup = document.querySelector("#popup"); 
const thankyou = document.querySelector("#thankyou"); 

function init(){
console.log("hul"); 

document.querySelector("#frontpagebutton").addEventListener("click", () => popup.style.visibility = "visible"); 

//Luk popup
document.querySelector(".close-icon").addEventListener("click", () => popup.style.visibility = "hidden");
document.querySelector(".close-icon").removeEventListener("click", () => popup.style.visibility = "hidden");

//FORM (knapper)
document.querySelector("#knap1").addEventListener("click", nextTab); 

document.querySelector("#knap3").addEventListener("click", showThankyou);

}

function showThankyou(){
  document.querySelector("#thankyou").style.visibility = "visible"; 
  document.querySelector(".form-outer").classList.add("hide"); 

document.querySelector(".close-icon").addEventListener("click", hideThankyou); 
console.log("ksjdgkjsdhg"); 
}

function hideThankyou(){
  console.log("lort"); 
  document.querySelector("#thankyou").classList.add("hide"); 
}

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

function sendData(console){
  post({
    fullname: form.elements.fullname.value, 
    gamertag: form.elements.gamertag.value,
    profile_img: form.elements.profileimage.value, 
    email: form.elements.email.value,
    date_of_birth: form.elements.dob.value, 
    phonenumber: form.elements.phonenumber.value,
    password: form.elements.password.value, 
    console: console, 
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

  //Check for multiple consoles checked off
  const consoles = [];
  const consoleElements = document.querySelectorAll("[name=console]:checked");
  consoleElements.forEach((el) => consoles.push(el.value));

  sendData(consoles); 
})


const consoles = getCheckboxValues("console");
    const game_type = getCheckboxValues("game_type");
    const game_title = getCheckboxValues("game_title");
    const game_time_of_day = getCheckboxValues("game_time_of_day");
    const improve_areas = getCheckboxValues("improve_areas");
    const interested_areas = getCheckboxValues("interested_areas");

    post({
      first_name: form.elements.first_name.value,
      last_name: form.elements.last_name.value,
      email: form.elements.email.value,
      platform: platforms,
      type: types,
      game: games,
      areas: areas,
    });
  });
}


function getCheckboxValues(name) {
  const items = [];
  const itemEls = document.querySelectorAll(`[name=${name}]:checked`);
  itemEls.forEach((el) => items.push(el.value));
  return items;
}
