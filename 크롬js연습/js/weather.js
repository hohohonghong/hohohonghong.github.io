const API_KEY ="15263c9335cbb89303f4bd25e3218e04";

function onGeoOk(position){ //위치를 잘 받을 수 있다면
    const lat = position.coords.latitude; //위도
    const lng = position.coords.longitude; //경도
    console.log(position);
    
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url).then((response) => response.json())
    .then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText= data.name;
        weather.innerText = `${data.weather[0].main}/${data.main.temp}`;
    });

}
function onGeoError(){ //위치를 잘 받을 수 없다면
    alert("cant")
}
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);
