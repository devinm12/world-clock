function updateTime() {
  let denverElement = document.querySelector("#denver");
  if (denverElement) {
    let denverDateElement = denverElement.querySelector(".date");
    let denverTimeElement = denverElement.querySelector(".time");
    let denverTime = moment().tz("America/Denver");
    denverDateElement.innerHTML = denverTime.format("MMMM Do YYYY");
    denverTimeElement.innerHTML = denverTime.format(
      "h:mm:ss [<small>] A [</small>]"
    );
  }

  let berlinElement = document.querySelector("#berlin");
  if (berlinElement) {
    let berlinDateElement = berlinElement.querySelector(".date");
    let berlinTimeElement = berlinElement.querySelector(".time");
    let berlinTime = moment().tz("Europe/Berlin");
    berlinDateElement.innerHTML = berlinTime.format("MMMM Do YYYY");
    berlinTimeElement.innerHTML = berlinTime.format(
      "h:mm:ss [<small>] A [</small>]"
    );
  }

  let limaElement = document.querySelector("#lima");
  if (limaElement) {
    let limaDateElement = limaElement.querySelector(".date");
    let limaTimeElement = limaElement.querySelector(".time");
    let limaTime = moment().tz("America/Lima");
    limaDateElement.innerHTML = limaTime.format("MMMM Do YYYY");
    limaTimeElement.innerHTML = limaTime.format(
      "h:mm:ss [<small>] A [</small>]"
    );
  }
}
updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;

  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");

  citiesElement.innerHTML = `
  <div class="city">
          <div>
            <h2>${cityName}</h2>

            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss [<small>] A [</small>]"
          )}</div>
        </div>
        <a href="/"> All Cities </a>`;
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
