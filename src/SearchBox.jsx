import TextField from '@mui/material/TextField';
import "./SearchBox.css"
import Button from '@mui/material/Button';
import { useState } from 'react';
export default function SearchBox({updateInfo}) {
    let [city , setCity] = useState("");
    let [error , setError] = useState(false);
    const API_URL = import.meta.env.VITE_WEATHER_API_URL;
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

    let weatherInfo = async () => {
        try{
            let weatherData = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let JSONResponse = await weatherData.json();
            let result = {
                city : city,
                temp : JSONResponse.main.temp,
                temp_min : JSONResponse.main.temp_min,
                temp_max : JSONResponse.main.temp_max,
                feels_like : JSONResponse.main.feels_like,
                humidity : JSONResponse.main.humidity,
                weather : JSONResponse.weather[0].description
            };
            console.log(result);
            return result
        } catch (err){
            throw err ;
        }
    }

    let handlerInputChange = (event) => {
        setCity(event.target.value);
    }

    let onSubmit = async (event) => {
        try {
            event.preventDefault();
            console.log(city)
            let newInfo = await weatherInfo();
            updateInfo(newInfo);
            setCity("");
        } catch (err) {
            setError(true);
        }
    }
    return(
        <div className="city">
            <form onSubmit={onSubmit}>
                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handlerInputChange}/>
                <br></br>
                <br></br>
                <Button variant="contained" type='submit'>Search</Button>
                {error && <p style={{color:"red"}}>No such place exists</p>}
            </form>
        </div>
    )
}