function updateTime(){
	let berlinElement = document.querySelector("#berlin");
if (berlinElement){
	let berlinTimeElement = berlinElement.querySelector(".cityTime");
	let berlinDateElement = berlinElement.querySelector(".cityDate");
let berlinTime = moment().tz("Europe/Berlin");
	berlinTimeElement.innerHTML = berlinTime.format("HH:mm:ss [<small>]A[<small>]");
	berlinDateElement.innerHTML = berlinTime.format("dddd Do MMM YYYY");

}


	let bogotaElement = document.querySelector("#bogota");
	if(bogotaElement){
	let bogotaTimeElement = bogotaElement.querySelector("#bogotaTime");
	let bogotaDateElement = bogotaElement.querySelector(".cityDate");
bogotaDateElement.innerHTML = moment().format("dddd Do MMM YYYY");
bogotaTimeElement.innerHTML = moment().tz("America/Bogota").format("HH:mm:ss [<small>]A[<small>]");
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
        <div class="cityDate">${cityTime.format("dddd Do MMMM YYYY")}</div>
    </div>
        <div class="cityTime" >${cityTime.format("HH:mm:ss")}<small>${cityTime.format(" A")}</small></div>
				</div>
				<div>
				<a href="/" id="cityLink">all cities</a>
</div>
		`
}

setInterval(updateTime, 1000);

let selectElement = document.querySelector("#city");
selectElement.addEventListener("change", updateCity);
