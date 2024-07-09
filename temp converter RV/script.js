function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function celsiusToKelvin(celsius) {
    return celsius + 273.15;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

function fahrenheitToKelvin(fahrenheit) {
    return (fahrenheit + 459.67) * 5/9;
}

function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}

function kelvinToFahrenheit(kelvin) {
    return (kelvin * 9/5) - 459.67;
}

function convertTemperature() {
    const celsiusInput = document.getElementById('celsius');
    const fahrenheitInput = document.getElementById('fahrenheit');
    const kelvinInput = document.getElementById('kelvin');

    const celsiusValue = parseFloat(celsiusInput.value);
    const fahrenheitValue = parseFloat(fahrenheitInput.value);
    const kelvinValue = parseFloat(kelvinInput.value);

    if (!isNaN(celsiusValue)) {
        fahrenheitInput.value = celsiusToFahrenheit(celsiusValue).toFixed(2);
        kelvinInput.value = celsiusToKelvin(celsiusValue).toFixed(2);
    } else if (!isNaN(fahrenheitValue)) {
        celsiusInput.value = fahrenheitToCelsius(fahrenheitValue).toFixed(2);
        kelvinInput.value = fahrenheitToKelvin(fahrenheitValue).toFixed(2);
    } else if (!isNaN(kelvinValue)) {
        celsiusInput.value = kelvinToCelsius(kelvinValue).toFixed(2);
        fahrenheitInput.value = kelvinToFahrenheit(kelvinValue).toFixed(2);
    } else {
        alert('Please enter a valid temperature value.');
    }
}

document.getElementById('convertBtn').addEventListener('click', convertTemperature);
