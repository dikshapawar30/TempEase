function convertTemperature() {
    const temperatureInput = document.getElementById("temperature").value;
    const unit = document.getElementById("unit").value;
    const resultElement = document.getElementById("result");

    if (!temperatureInput || isNaN(temperatureInput)) {
        resultElement.innerText = "Please enter a valid number for temperature.";
        return;
    }

    const temperature = parseFloat(temperatureInput);

    if (unit === "celsius") {
        const convertedTemperature = (temperature * 9/5) + 32;
        resultElement.innerText = `Converted Temperature: ${convertedTemperature.toFixed(2)} °F`;
    } else {
        const convertedTemperature = (temperature - 32) * 5/9;
        resultElement.innerText = `Converted Temperature: ${convertedTemperature.toFixed(2)} °C`;
    }
}
