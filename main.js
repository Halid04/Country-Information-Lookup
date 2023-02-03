const welcomeText = document.getElementById("welcomeText");
const searchBtn = document.getElementById("searchBtn");
const countryName = document.getElementById("countryName");
const countryInformations = document.getElementById("countryInformations");
const countryCapital = document.getElementById("capital");
const countryPopulation = document.getElementById("population");
const countryArea = document.getElementById("area");
const countryRegion = document.getElementById("region");
const body = document.getElementById("body");
const countryFlag = document.getElementById("flag");

document.getElementById("countryInput").focus();

searchBtn.addEventListener("click", async function getData(){
    const countryInput = encodeURIComponent(document.getElementById("countryInput").value);

    const endpoint = new URL(`https://restcountries.com/v3.1/name/${countryInput.toLowerCase()}`);
    const response = await fetch(endpoint);
    const data = await response.json();

    console.log(data);

    if(response.status == 404){
        alert("This country does not exist. Check spelling!")
    }else{
        countryInformations.classList.remove("hidden")
        countryName.classList.remove("hidden");
        welcomeText.classList.add("hidden");
        countryFlag.classList.remove("hidden")
        
        countryName.innerHTML = data[0].name.common;
        countryFlag.src = data[0].flags.png;
        countryCapital.innerHTML = "Capital: "+data[0].capital;
        countryPopulation.innerHTML = "Population: "+data[0].population;
        countryArea.innerHTML = "Area: "+data[0].area;
        countryRegion.innerHTML = "Region: "+data[0].region;

    }

    document.getElementById("countryInput").focus();
})