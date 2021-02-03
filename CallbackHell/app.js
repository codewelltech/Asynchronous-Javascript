const countries = document.querySelector(".countries");

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
function getCountryData(country) {
  //Country ajax call

  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.eu/rest/v2/name/${country}`);
  request.send();
  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    renderCountry(data);
    const [border] = data.borders;

    //load border country  
    const request2 = new XMLHttpRequest();
    request2.open("GET", `https://restcountries.eu/rest/v2/alpha/ind`);
    request2.send();
    request2.addEventListener("load", function () {
      const borderCountry = JSON.parse(this.responseText);
      console.log(this.responseText);
      renderCountry(borderCountry);   

    });
  });
}
getCountryData("Australia");
