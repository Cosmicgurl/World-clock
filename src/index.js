function updateTime(){
let bangkokElement = document.querySelector("#bangkok");
let berlinElement = document.querySelector("#berlin");
let bangkokTimeElement = document.querySelector("#bangkokTime");
let berlinTimeElement = document.querySelector("#berlinTime");

bangkokElement.innerHTML = moment().format("dddd Do MMM YYYY");
berlinElement.innerHTML = moment().format("dddd Do MMM YYYY");

bangkokTimeElement.innerHTML = moment().tz("Asia/Bangkok").format("HH:mm:ss A");
berlinTimeElement.innerHTML = moment().tz("Germany/Berlin").format("HH:mm:ss A");
}
function updateCity(event){
    let cityTimezone = event.target.value;
		let cityTime = moment().tz(cityTimezone);
		let citiesElement = document.querySelector("#cities");
		citiesElement.innerHTML= `
		    <div class="city">
        <div>
        <h2 >${cityTimezone}</h2>
        <div class="cityDate" id="berlin">${cityTime.format("MMMM Do YYYY")}</div>
    </div>
        <div class="cityTime" id="berlinTime"> ${cityTime.format("MMMM Do YYYY")}<small></small></div>
    </div>`
}
setInterval( updateTime, 1000);

let selectElement = document.querySelector("#city");
selectElement.addEventListener("change", updateCity)