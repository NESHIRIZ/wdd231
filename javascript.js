// Fetch and display weather update
async function fetchWeather() {
    const weatherCard = document.getElementById("weather-card");
    try {
      // Replace with an actual API key and city for real weather data
      const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=Bulawayo&appid=YOUR_API_KEY&units=metric");
      const data = await response.json();
  
      const temp = data.main.temp;
      const description = data.weather[0].description;
      const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
  
      weatherCard.innerHTML = `
        <h3>Weather Update</h3>
        <img src="${icon}" alt="Weather Icon">
        <p>${description.charAt(0).toUpperCase() + description.slice(1)}</p>
        <p>Temperature: ${temp}°C</p>
      `;
    } catch (error) {
      weatherCard.innerHTML = `<p>Unable to fetch weather data.</p>`;
    }
  }
  
  fetchWeather();
  
  // Business Spotlight Update (Can be dynamically updated)
  const businessSpotlightCard = document.getElementById("business-spotlight-card");
  businessSpotlightCard.innerHTML = `
    <h3>Business Spotlight</h3>
    <img src="images/business_spotlight.jpg" alt="Featured Business">
    <p>Featured: <strong>Bulawayo Bakery</strong> - The best freshly baked goods in town!</p>
    <button class="view-work-btn">Learn More</button>
  `;
  
  // Community Information Update (Can be dynamically updated)
  const communityInfoCard = document.getElementById("community-info-card");
  communityInfoCard.innerHTML = `
    <h3>Community Information</h3>
    <img src="images/community_info.jpg" alt="Community Event">
    <p>Upcoming Event: <strong>Bulawayo Business Expo 2025</strong> - Join us for networking and growth!</p>
    <button class="view-work-btn">Learn More</button>
  `;
  
