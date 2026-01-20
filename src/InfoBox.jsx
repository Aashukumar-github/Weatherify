import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';


export default function InfoBox({info}) {
    const INIT_URL = "https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww"
    const HOT_URL = "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8SG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
    const COLD_URL = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"
    const RAIN_URL = "https://images.unsplash.com/photo-1561915511-a461b5056526?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHJhaW4lMjB3ZWF0aGVyfGVufDB8fDB8fHww"
    return (
        <div className='Weather'>
            <div className="InfoBox">
                <Card sx={{ maxWidth: 345 , height:400 , width : 350 }}>
                    <CardMedia sx={{ height: 140 }} image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}title="Current Weather"/>
                    <CardContent>
                       <Typography gutterBottom variant="h5" component="div">
                         {info.city} {info.humidity > 80 ? <ThunderstormIcon /> : info.temp > 15 ? <SunnyIcon />  : <AcUnitIcon />}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                            <div>Tempertaure = {info.temp}&deg;C</div>
                            <br></br>
                            <div>TempMax = {info.temp_max}&deg;C</div>
                            <br></br>
                            <div>TempMin = {info.temp_min}&deg;C</div>
                            <br></br>
                            <div>Humidity = {info.humidity}</div>
                            <br></br>
                            <div>The weather can be described as <i>{info.weather}</i> and feels like {info.feels_like}&deg;C</div>
                        </Typography>
                   </CardContent>
      
                </Card>
            </div>
        </div>
    )
}