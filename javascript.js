document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Fetch Weather Data (Example API Call)
    async function fetchWeather() {
        const weatherInfo = document.getElementById("weather-info");
        try {
            const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=Bulawayo&units=metric&appid=YOUR_API_KEY");
            const data = await response.json();
            if (data.main) {
                weatherInfo.textContent = `🌡 ${data.main.temp}°C | ${data.weather[0].description}`;
            } else {
                weatherInfo.textContent = "Weather data unavailable.";
            }
        } catch (error) {
            weatherInfo.textContent = "Error fetching weather data.";
        }
    }
    fetchWeather();

    // Mobile Navbar Toggle
    const navbar = document.querySelector(".navbar");
    const toggleButton = document.createElement("button");
    toggleButton.textContent = "☰";
    toggleButton.classList.add("menu-toggle");
    document.querySelector("header").prepend(toggleButton);
    toggleButton.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });
});
