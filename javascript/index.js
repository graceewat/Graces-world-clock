// London
function updateTime() {
  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time");
    let londonCurrentTime = moment().tz("Europe/London");
    londonDateElement.innerHTML = londonCurrentTime.format("MMMM Do YYYY");
    londonTimeElement.innerHTML = `${londonCurrentTime.format(
      "h:mm:ss[<small>]A[</small>]"
    )}`;
  }

  // New York

  let newYorkElement = document.querySelector("#new-york");
  if (newYorkElement) {
    let newYorkDateElement = newYorkElement.querySelector(".date");
    let newYorkTimeElement = newYorkElement.querySelector(".time");
    let newYorkCurrentTime = moment().tz("America/New_York");
    newYorkDateElement.innerHTML = newYorkCurrentTime.format("MMMM Do YYYY");
    newYorkTimeElement.innerHTML = `${newYorkCurrentTime.format(
      "h:mm:ss[<small>]A[</small>]"
    )}`;
  }
}
function updateCity(event) {
  let cityTimeZoneElement = event.target.value;
  let cityName = cityTimeZoneElement.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZoneElement);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city" id="london">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss[<small>]A[</small>]"
          )}</div>
        </div>`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#selectCity");
citiesSelectElement.addEventListener("change", updateCity);
