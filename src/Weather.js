import React from "react";
import "./Weather.css";

export default function Weather () {

  return (<div className="Weather">
      <h1>🌡️ Weather Forecast 🌡️</h1>

      <br />
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Enter a city name"
          autocomplete="on"
        />
        <input type="submit" value="Search 🔍" className="form-control" /> <br />
        <button className="btn btn-success">
          Current location 📍
        </button>
      </form>
      <br />

      <h2>Today in Berlin</h2>
      <br />
      <p>
        <span className="today-temperature">19</span>
        <span className="units">
          <a href="#" >°C</a> |<a href="#"
            >°F</a
          ></span
        >
        <br />
      </p>

      <div className="todayDescription">
        <span >Slight Rain</span>
        <img
          src="http://openweathermap.org/img/wn/10d@2x.png"
          alt="clear sky"
          className="float-right"
          width="50px"
        />
      </div>
      <br />
      <div className="row paremeters">
        <div className="col humidity">
          💧 Humidity: <span >52</span>%
        </div>
        <div className="col windspeed">
          💨 Windspeed:
          <span>23</span> m/s
        </div>
      </div>
      <br />
      <h3 class="date">Thursday 30/12/2021 22:30</h3>
      <br />


      <div className="weather-forecast">
          <div className="row">
            <div className="col-2">
              <div className="weather-forecast-date">Thu</div>
              <img
                src="http://openweathermap.org/img/wn/50d@2x.png"
                alt=""
                width="40"
              />
              <div className="weather-forecast-temperatures">
                <span className="weather-forecast-temperature-max"> 18° </span>
                <span className="weather-forecast-temperature-min"> 12° </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
<div className="text-center"
      <div className="images">
        <img className="farm" src="src/seashell.jpg" alt="seashell" width="400" />
        <img
          className="sunflower2"
          src="src/sunflower2.jpg"
          alt="sunflower2"
          width="400"
        />
        <img className="horse2" src="src/horse2.jpg" alt="horse2" width="400" />
      </div>
      <br />
      <br />
    </div>
      <footer className="codedby">
        Coded by
        <a
          href="https://www.shecodes.io/students/503-diana-kalstein"
          target="_blank"
          rel="noopener noreferrer"
          >Diana Kalstein ©️</a
        >, is
        <a
          href="https://github.com/Deezledee/Weather-App-Diana-K.git"
          target="_blank"
          rel="noopener noreferrer"
          >open-sourced on GitHub</a
        >
        and is
        <a
          href="https://adoring-kowalevski-9714eb.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          >hosted on Netlify</a
        >
      </footer> </div>;
  
  )
}
