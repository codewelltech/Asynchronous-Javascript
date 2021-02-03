const countries=document.querySelector(".countries");

function getCountryData(country){
  const request=new XMLHttpRequest();
request.open("GET",`https://restcountries.eu/rest/v2/name/${country}`);
request.send();
request.addEventListener("load",function(){
 const [data]=JSON.parse(this.responseText);
 console.log(data);
 let html=`
    <section class="country">
    <img class="img" src="${data.flag}" />
    <div class="details">
      <h3>${data.name}</h3> 
      <p class="name">Lang : ${data.languages[0].name} </p>
      <p class="name">Currency :${data.currencies[0].name} </p>
    </div>
    </section> 
 `
 countries.insertAdjacentHTML("beforeend",html);
});
}
getCountryData("Finland");
getCountryData("philippines");
getCountryData("Chile");
