const celsiusEl = document.getElementById("celsius");
const fahrenheitEl = document.getElementById("fahrenheit");
const kelvinEl = document.getElementById("kelvin");

function computeTemp(event) {
  const value = parseFloat(event.target.value);

  if (isNaN(value)) {
    celsiusEl.value = "";
    fahrenheitEl.value = "";
    kelvinEl.value = "";
    document.body.style.background = ""; // Hintergrund zurücksetzen
    return;
  }

  switch (event.target.name) {
    case "celsius":
      fahrenheitEl.value = (value * 1.8 + 32).toFixed(2);
      kelvinEl.value = (value + 273.15).toFixed(2);
      break;
    case "fahrenheit":
      celsiusEl.value = ((value - 32) / 1.8).toFixed(2);
      kelvinEl.value = ((value - 32) / 1.8 + 273.15).toFixed(2);
      break;
    case "kelvin":
      celsiusEl.value = (value - 273.15).toFixed(2);
      fahrenheitEl.value = ((value - 273.15) * 1.8 + 32).toFixed(2);
      break;
  }
}

celsiusEl.addEventListener("input", computeTemp);
fahrenheitEl.addEventListener("input", computeTemp);
kelvinEl.addEventListener("input", computeTemp);
