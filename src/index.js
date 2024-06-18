function updateTime(){
	let berlinElement = document.querySelector("#berlin");
if (berlinElement){
	let berlinTimeElement = berlinElement.querySelector(".cityTime");
	let berlinDateElement = berlinElement.querySelector(".cityDate");
let berlinTime = moment().tz("Europe/Berlin");
	berlinTimeElement.innerHTML = berlinTime.format("HH:mm:ss [<small>]A[<small>]");
	berlinDateElement.innerHTML = berlinTime.format("dddd Do MMM YYYY");

}


	let bangkokElement = document.querySelector("#bangkok");
	if(bangkokElement){
	let bangkokTimeElement = bangkokElement.querySelector("#bangkokTime");
	let bangkokDateElement = bangkokElement.querySelector(".cityDate");
bangkokDateElement.innerHTML = moment().format("dddd Do MMM YYYY");
bangkokTimeElement.innerHTML = moment().tz("America/Bogota").format("HH:mm:ss [<small>]A[<small>]");
	}
}


function updateCity(event){
    let cityTimezone = event.target.value;
		if (cityTimezone === "current"){
			cityTimezone = moment.tz.guess();
		}
		let cityName = cityTimezone.replace("_", " ").split("/")[1];
		let cityTime = moment().tz(cityTimezone);
		let citiesElement = document.querySelector("#cities");
		citiesElement.innerHTML= `
		    <div class="city">
        <div>
        <h2 >${cityName}</h2>
        <div class="cityDate">${cityTime.format("MMMM Do YYYY")}</div>
    </div>
        <div class="cityTime" >${cityTime.format("HH:mm:ss")}<small>${cityTime.format(" A")}</small></div>
    </div>
		`
}

setInterval(updateTime, 1000);

let selectElement = document.querySelector("#city");
selectElement.addEventListener("change", updateCity);
