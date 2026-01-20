import { useState } from "react"
import InfoBox from "./infoBox"
import SearchBox from "./SearchBox"

export default function WeatherApp() {
    let [weatherInfo , setWeatherInfo] = useState({
        city : "Delhi",
        feels_like : 23.37,
        humidity : 33,
        temp : 24.05,
        temp_max : 24.05,
        temp_min : 24.05,
        weather : "haze",
    });
    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }
    return (
        <div style={{textAlign : "center"}}>
            <h1>WEATHER APP</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}