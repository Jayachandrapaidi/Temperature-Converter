const celsiusInput = document.getElementById("celsius");
const fahrenheitInput = document.getElementById("fahrenheit");
const kelvinInput = document.getElementById("kelvin");

/**
 * Converts temperature based on input field
 * @param {Event} event - Input change event
 */
function computeTemp(event) {
  const input = event.target;
  const value = parseFloat(input.value);

  if (isNaN(value)) {
    clearInputs();
    return;
  }

  switch (input.id) {
    case "celsius":
      updateFromCelsius(value);
      break;
    case "fahrenheit":
      updateFromFahrenheit(value);
      break;
    case "kelvin":
      updateFromKelvin(value);
      break;
  }
}

function updateFromCelsius(celsius) {
  fahrenheitInput.value = ((celsius * 9) / 5 + 32).toFixed(2);
  kelvinInput.value = (celsius + 273.15).toFixed(2);
}


function updateFromFahrenheit(fahrenheit) {
  const celsius = ((fahrenheit - 32) * 5) / 9;
  celsiusInput.value = celsius.toFixed(2);
  kelvinInput.value = (celsius + 273.15).toFixed(2);
}


function updateFromKelvin(kelvin) {
  const celsius = kelvin - 273.15;
  celsiusInput.value = celsius.toFixed(2);
  fahrenheitInput.value = ((celsius * 9) / 5 + 32).toFixed(2);
}

function clearInputs() {
  celsiusInput.value = "";
  fahrenheitInput.value = "";
  kelvinInput.value = "";
}
