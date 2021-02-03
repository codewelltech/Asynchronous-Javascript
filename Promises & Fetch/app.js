const countries = document.querySelector(".countries");


// function getCountryData(country) {
//   //Country ajax call

//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.eu/rest/v2/name/${country}`);
//   request.send();
//   request.addEventListener("load", function () {
//     const [data] = JSON.parse(this.responseText);
//     //console.log(data);
//     renderCountry(data);
//     const [border] = data.borders;

//     //load border country  
//     const request2 = new XMLHttpRequest();
//     request2.open("GET", `https://restcountries.eu/rest/v2/alpha/${border}`);
//     request2.send();
//     request2.addEventListener("load", function () {
//       const borderCountry = JSON.parse(this.responseText);
//       //console.log(this.responseText);
//       renderCountry(borderCountry);   

//     });
//   });
// }
// getCountryData("denmark");

// Promise.resolve("Hello Promise").then(res=>console.log(res));
// console.log("statement after promise declaration");

// const showMessage=(message)=>{
//   console.log(`Message recieved : ${message}`);
// }
// //creating promise
// const promise=new Promise(function(resolve,reject){  
//   setTimeout(() => {
//    resolve("Ticket booked");
//    //reject(new Error("Deny booking"));
//   }, 1000);   
// });

// const wait=(seconds)=>{
//   return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//       resolve("Ticket booked");     
//      },seconds*1000);
//   })
// }

// wait(1).then((res)=>{
//   console.log("after 1 second");
//   return wait(2);
// }).then((res2)=>{
//   console.log("after 2 second");
//   return wait(3);
// }).then((res3)=>{
//   console.log("after 3 second"); 
// })

// //consuming promise
// promise.then(showMessage).catch(error=>{
//   console.log(error);
// }).finally(()=>{
//   console.log("executed")
// });
function renderCountry(data) {
  let html = `
  <section class="country">
  <img class="img" src="${data.flag}" />
  <div class="details">
    <h3>${data.name}</h3> 
    <p class="name">Lang : ${data.languages[0].name} </p>
    <p class="name">Currency :${data.currencies[0].name} </p>
  </div>
  </section> 
`
  countries.insertAdjacentHTML("beforeend", html);
}
// function getCountryData(country) {
//   //Country ajax call

//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.eu/rest/v2/name/${country}`);
//   request.send();
//   request.addEventListener("load", function () {
//     const [data] = JSON.parse(this.responseText);
//     //console.log(data);
//     renderCountry(data);
//     const [border] = data.borders;

//     //load border country  
//     const request2 = new XMLHttpRequest();
//     request2.open("GET", `https://restcountries.eu/rest/v2/alpha/${border}`);
//     request2.send();
//     request2.addEventListener("load", function () {
//       const borderCountry = JSON.parse(this.responseText);
//       //console.log(this.responseText);
//       renderCountry(borderCountry);   

//     });
//   });
// }

function getCountryData(country) {
  const promise = fetch(`https://restcountries.eu/rest/v2/name/${country}`);
  promise.then((res) => {
    return res.json();
  }).then((data) => {
    const [countrydata] = data;    
    renderCountry(countrydata);
    const [border] = countrydata.borders;
    return fetch(`https://restcountries.eu/rest/v2/alpha/${border}`);    
  }).then((res)=>{
    return res.json()
 }).then((data)=>{
   renderCountry(data);
 });
};
getCountryData("Sweden");