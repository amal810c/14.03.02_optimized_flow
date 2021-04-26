"use strict";

import "./style.scss";

window.addEventListener("DOMContentLoaded", init); 

const endpoint = "https://frontend2021-7beb.restdb.io/rest/ezone"; 
const apiKey = "60740be1f592f7113340f013";
const lort = {
  fullname: "Vivi",
  gamertag: "Vivse" + Math.random(),
  email: "anton@anden.dk",
  date_of_birth: "1993-05-28", 
  password: "dfsdf", 
  game_type: ["FPS"],
  game_title: ["sdsdtseg"],
  game_hours: "8",
  game_time_of_day: ["10:00am - 14:00pm"],
  improve_areas: ["sleep"],
  interested_areas: ["stress"]
};




function init(){
  console.log("hul"); 

  post(lort); 
}

function post(data){
  console.log(data); 
  const postData = JSON.stringify(data); 
  fetch(endpoint, {
    method : "POST", 
    headers : {"Content-Type": "application/json; charset=utf-8", 
  "x-apikey" : apiKey, 
"cache-control" : "no-cache", 
    },
    body: postData
  })
  .then((res) => res.json())
  .then((data) => console.log(data));  
}


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