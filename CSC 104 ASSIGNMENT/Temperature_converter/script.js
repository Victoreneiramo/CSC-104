function convertTemperature() {
    const temperature = document.getElementById('temperature').value;
    const unit = document.getElementById('unit').value;
    let result;

    if (unit === 'Celsius') {
        result = (temperature * 9/5) + 32;
        result = `${temperature}° Celsius is equal to ${result.toFixed(2)}° Fahrenheit`;
    } else {
        result = (temperature - 32) * 5/9;
        result = `${temperature}° Fahrenheit is equal to ${result.toFixed(2)}° Celsius`;
    }

    document.getElementById('result').innerText = result;
}
