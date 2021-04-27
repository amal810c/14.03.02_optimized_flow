"use strict";

import "./sass/style.scss";
import { headers, endpoint } from "./settings.js"; 
//import { nextPrev } from "./form.js"; 
// import { showTab, nextPrev, validateForm, fixStepIndicator } from "./form.js"; 

window.addEventListener("DOMContentLoaded", init); 


function init(){
  console.log("hul"); 

//FORM (knapper)
document.querySelector("#knap1").addEventListener("click", nextTab); 

}

function nextTab(){
  document.querySelector(".fieldset1").classList.add("hide"); 
  document.querySelector(".fieldset2").classList.remove("hide"); 
document.querySelector("#knap2").addEventListener("click", lastTab); 
}

function lastTab(){
  document.querySelector(".fieldset2").classList.add("hide"); 
  document.querySelector(".fieldset3").classList.remove("hide"); 
  document.querySelector("#knap3").addEventListener("click", post); 
}



function post(data){
  console.log(data); 
  const postData = JSON.stringify(data); 
  fetch(endpoint, {
    method : "POST", 
    headers : headers,
    body: postData
  })
  .then((res) => res.json())
  .then((data) => console.log(data));  
}

const form = document.querySelector("form"); 
form.addEventListener("submit", (e) => {
  e.preventDefault();

post({
  fullname: form.elements.fullname.value, 
  gamertag: "Vivse",
  profile_img: "profile_img.jpg", 
  email: "anton@anden.dk",
  date_of_birth: "1993-05-28", 
  phonenumber: "27570612",
  password: "dfsdf", 
  console: ["xbox, pc"], 
  game_type: ["FPS"],
  game_title: ["sdsdtseg"],
  game_level: "Beginner",
  game_hours: "8",
  game_time_of_day: ["10:00am - 14:00pm"],
  improve_areas: ["sleep"],
  interested_areas: ["stress"], 
  comment: "text comment bla bla bla"
}); 

// const data = {
//   fullname: form.elements.fullname.value, 
//   gamertag: "Vivse",
//   profile_img: "profile_img.jpg", 
//   email: "anton@anden.dk",
//   date_of_birth: "1993-05-28", 
//   phonenumber: "27570612",
//   password: "dfsdf", 
//   console: ["xbox, pc"], 
//   game_type: ["FPS"],
//   game_title: ["sdsdtseg"],
//   game_level: "Beginner",
//   game_hours: "8",
//   game_time_of_day: ["10:00am - 14:00pm"],
//   improve_areas: ["sleep"],
//   interested_areas: ["stress"], 
//   comment: "text comment bla bla bla"
// };
})



// /* import { headers } from "./settings";
//  */

//window.addEventListener("DOMContentLoaded", start); 

// function start(){
//   console.log("hallo");


//     document.getElementById("add-new").addEventListener("click", test);​​​​​​​
      
// }

// function test(){
//   console.log("det virker"); 
//         const data = {​​​​​​​
//             fullname: "Anton Hansen",
//             gamertag: "anton_anden",
//             email: "anton@anden.dk",
//             date_of_birth: "1994/02/03",
//             password: "453218654565",
//             game_type: "FPS",
//             game_title: "CS",
//             game_hours: "8",
//             game_time_of_day: "10:00am - 14:00pm",
//             improve_areas: ["sleep"],
//             interested_areas: "stress",
//           }​​​​​​​;
//         post(data);
// }




// // window.addEventListener("load", (e) =>{​​​​​​​
// //   console.log("hul igennem"); 

// // }​​​​​​​); 



// function post(data){
//     const postData = JSON.stringify(data);
//     fetch(endpoint, {
//       method: "post",
//       headers: {
//         "Content-Type": "application/json; charset=utf-8",
//         "x-apikey": apiKey,
//         "cache-control": "no-cache"
//       },
//       body: postData
//     })
//       .then((res) => res.json())
//       .then((data) => showHero(data));
//   }




// /* 
// window.addEventListener("load", post(data));

// post(data);

// function post(data) {
//   const data = {
//     fullname: "Anton Hansen",
//     gamertag: "anton_anden",
//     email: "anton@anden.dk",
//     date_of_birth: "1994/02/03",
//     password: "453218654565",
//     game_type: "FPS",
//     game_title: "CS",
//     game_hours: "8",
//     game_time_of_day: "10:00am - 14:00pm",
//     improve_areas: "sleep",
//     interested_areas: "stress",
//   };

//   const postData = JSON.stringify(data);
//   fetch("https://frontend2021-7beb.restdb.io/rest/ezone", {
//     method: "post",
//     headers: headers,
//     body: postData,
//   })
//     .then((res) => res.json())
//     .then((data) => console.log(data));
// }
//  */



