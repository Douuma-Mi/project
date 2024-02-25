import React, { useEffect, useState } from "react";
import "./Weather.css";
import axios from "axios";






export default function Weather() {

const [local, setlocal] = useState('')
  const [obj, setobj] = useState({})
  const [query, setquery] = useState('rome')

  useEffect(() => {
    const options = {
      method: "GET",
      url: `http://api.weatherapi.com/v1/forecast.json?key=a03cf2cabcaa4353971164038230401&q=${query}&days=5&aqi=no&alerts=no`,

      headers: {
        "X-RapidAPI-Key": "8bd9d6c688msh68d31c229fdad4ap11c13ajsn87b83ab7f99a",
        "X-RapidAPI-Host": "weatherbit-v1-mashape.p.rapidapi.com",
      },
    };

    axios.request(options).then(function(response) {
      console.log(response.data)

      setobj(response.data)

      })
      .catch(function (error) {
        console.error(error);

      });
  },[query]);

  const  handlesubmit=(e)=>{
    e.preventDefault()
  
    setquery(local)
   }


  console.log(obj.current)

  return (
    <div className="Weather">
      <form class="mb-3"  onSubmit={handlesubmit}   >
        <div className="row">
          <div className="col-9">
            <input
              type="Search"
         
              className="form-control"
              autoComplete="off" 
              placeholder="entre your city"  
              onChange={(e)=>setlocal(e.target.value)}
            />
          </div>
          <div className="col-3">
            <button
              type="submit"
              value="Search"
            
              className="btn btn–primary w-100"  onClick={handlesubmit}    >search </button>
          </div>
        </div>
      </form>
      <div className="overview">
        <h1></h1>
        <ul>
          <li>Last Updated: {obj.current.last_updated}</li>
          <li></li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-temperature">
            <img
              src={obj.current.condition.icon}
              alt=''
              className="float-start"
            />
            <div className="float-start">
              <strong></strong>
              <span className="units">
                <a href="/">{obj.current.temp_c}°C  </a> | <a href="/">{obj.current.temp_f}°F </a>
              </span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity:{obj.current.humidity} </li>
            <li>Wind: {obj.current.wind_kph}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
