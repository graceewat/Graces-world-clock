// London
function updateTime() {
  let londonElement = document.querySelector("#london");
  let londonDateElement = londonElement.querySelector(".date");
  let londonTimeElement = londonElement.querySelector(".time");
  let londonCurrentTime = moment().tz("Europe/London");
  londonDateElement.innerHTML = londonCurrentTime.format("MMMM Do YYYY");
  londonTimeElement.innerHTML = `${londonCurrentTime.format(
    "h:mm:ss[<small>]A[</small>]"
  )}`;

  // New York

  let newYorkElement = document.querySelector("#new-york");
  let newYorkDateElement = newYorkElement.querySelector(".date");
  let newYorkTimeElement = newYorkElement.querySelector(".time");
  let newYorkCurrentTime = moment().tz("America/New-York");
  newYorkDateElement.innerHTML = newYorkCurrentTime.format("MMMM Do YYYY");
  newYorkTimeElement.innerHTML = `${newYorkCurrentTime.format(
    "h:mm:ss[<small>]A[</small>]"
  )}`;
}
updateTime();
setInterval(updateTime, 1000);
