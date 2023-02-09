document.addEventListener('DOMContentLoaded', () => {

	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'faf2c04ea0msh756d855f7523bcdp1048fcjsncd2cf3389f70',
			'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
		}
	}



	const _city = document.getElementById('_city_name')
	


	const _search_btn = document.getElementById('search-btn')
	// console.log(_search_btn)



	const getWeather = (city) => {
		fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
			.then(response => response.json())
			.then(response => {
				cloud_pct = response.cloud_pct
				temp = response.temp
				feels_like = response.feels_like
				humidity = response.humidity
				min_temp = response.min_temp
				max_temp = response.max_temp
				wind_speed = response.wind_speed
				wind_degrees = response.wind_degrees
				sunrise = response.sunrise
				sunset = response.sunset
				// console.log(temp);
				// console.log(response)
				const cel = document.querySelector("h3")
				cel.innerHTML = temp + "°C"
				const temperature = document.getElementById("temp")
				temperature.innerHTML = temp
				const min_temperature = document.getElementById("min-temp")
				min_temperature.innerHTML = min_temp
				const max_temperature = document.getElementById("max-temp")
				max_temperature.innerHTML = max_temp

				const deg = document.querySelector(".box-2 h3")
				deg.innerHTML = humidity + "%"
				const wind_deg = document.getElementById("wind_degrees")
				wind_deg.innerHTML = wind_degrees
				const feels_alike = document.getElementById("feels_like")
				feels_alike.innerHTML = feels_like
				const _humidity = document.getElementById("humidity")
				_humidity.innerHTML = humidity
				const _speed = document.querySelector(".box-3 h3")
				_speed.innerHTML = wind_speed + "km/hr"
				const _wind_speed = document.getElementById("wind_speed")
				_wind_speed.innerHTML = wind_speed
				const _sunrise_time = document.getElementById("sunrise_time")
				_sunrise_time.innerHTML = sunrise
				const _sunrset_time = document.getElementById("sunset_time")
				_sunrset_time.innerHTML = sunset
			})
			.catch(err => console.error(err))
	}

	_search_btn.addEventListener('click',(e)=>
	{
		getWeather(city.value)
		_city.innerHTML=city.value
	})

	getWeather("Salem") 
})


