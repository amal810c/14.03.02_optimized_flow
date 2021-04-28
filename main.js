"use strict";

import "./sass/style.scss";
import { headers, endpoint } from "./settings.js"; 

window.addEventListener("DOMContentLoaded", init); 

const popup = document.querySelector("#popup"); 

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

document.querySelector("#knap4").addEventListener("click", hideThankyou); 
}

function hideThankyou(){
  document.querySelector("#thankyou").style.visibility = "hidden"; 
  document.querySelector("#popup").style.visibility = "hidden"; 
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

function sendData(){
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const console = getCheckboxValues("console"); 
    const gametype = getCheckboxValues("gametype");
    const gametitle = getCheckboxValues("gametitle");
    const gametod = getCheckboxValues("gametod");
    const gamelevel = getCheckboxValues("gamelevel");
    const improve = getCheckboxValues("improve");
    const interest = getCheckboxValues("interest");

  post({
    fullname: form.elements.fullname.value, 
    gamertag: form.elements.gamertag.value,
    profile_img: form.elements.profileimage.value, 
    email: form.elements.email.value,
    date_of_birth: form.elements.dob.value, 
    phonenumber: form.elements.phonenumber.value,
    password: form.elements.password.value, 
    console: console, 
    game_type: gametype,
    game_title: gametitle,
    game_level: gamelevel,
    game_hours: form.elements.hours.value,
    game_time_of_day: gametod,
    improve_areas: improve, 
    interested_areas: interest, 
    comment: form.elements.comments.value
  
  }); 
  });}

sendData()

function getCheckboxValues(name) {
  const items = [];
  const itemEls = document.querySelectorAll(`[name=${name}]:checked`);
  itemEls.forEach((el) => items.push(el.value));
  return items;
}
  
