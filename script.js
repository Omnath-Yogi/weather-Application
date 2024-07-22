 const apiKey="c83bb6f412e54d8682b115922242007";
 const apiUrl ="https://api.weatherapi.com/v1/current.json?&q="


 const searchBox = document.querySelector(".search input");
      const searchBtn = document.querySelector(".search button");


   

 
 async function checkWeather(city){
    const response = await fetch(apiUrl+ city +`&key=${apiKey}`);
 
    if(response.status==404){
        document.querySelector(".error").style.display= "block"
        
        document.querySelector(".weather").style.display= "none"
    }else{
        var data = await response.json();

        console.log(data);
    
        document.querySelector(".city").innerHTML = data.location.name
        document.querySelector(".temp").innerHTML =Math.round(data.current.temp_c) + "°C";
        document.querySelector(".humidity").innerHTML = data.current.humidity + "%";
        document.querySelector(".Wind").innerHTML = data.current.wind_kph + "km/h";
        document.querySelector(".weather").style.display = "block";
         document.querySelector(".error").style.display= "none"

    }

   
  }

   searchBtn.addEventListener("click", ()=>{
           
    checkWeather(searchBox.value);
   })










