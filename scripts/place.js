let lastModified = new Date(document.lastModified);
const modify = document.querySelector("#lastModified");
modify.innerHTML = `Last Modified: <span class="highlight">${new Intl.DateTimeFormat(
	"en-US",
	{
		dateStyle: "medium"
	}
).format(lastModified)}</span>`;

const year = document.querySelector("#currentyear");
const current = new Date()
year.innerHTML = `&copy ${current.getFullYear()}`

function calculateWindChill(tempF, windMph) {
	// Check if wind chill calculation is necessary
	if (tempF > 50 || windMph <= 3) {
	  return tempF; // Wind chill is not applicable
	}
  
	// Use the National Weather Service formula
	return (
	  35.74 +
	  0.6215 * tempF -
	  35.75 * Math.pow(windMph, 0.16) +
	  0.4275 * tempF * Math.pow(windMph, 0.16)
	);
  }
  
  // Example usage
  let temperature = 30; // Fahrenheit
  let windSpeed = 10; // Miles per hour
  let windChill = calculateWindChill(temperature, windSpeed);
  
  console.log(`Temperature: ${temperature}°F`);
  console.log(`Wind Speed: ${windSpeed} mph`);
  console.log(`Wind Chill: ${windChill.toFixed(2)}°F`);