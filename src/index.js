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
setInterval( updateTime, 1000);