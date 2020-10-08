import React,{useState} from "react";
import "./styles.scss";
import { useDispatch, useSelector } from 'react-redux';
import { calculationactions } from './../../actions/index';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


//function component as an arrow function
const Weather = () => {
  const result = useSelector(state => state.calculations.result);
  const [city, setCity] = useState("");
  const dispatch = useDispatch();

  const handle = (e) => {
    e.preventDefault();
    if(city===""){
      toast.error('Cannot be blank', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }else{
    const toServer = {
      "city": city,
    }
    dispatch(calculationactions.wheather(toServer));}
  };

  return (
    <section className="main-cont">
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <form className="main" data-test="main" onSubmit={handle}>
        <h1 className="head" data-test="header">
          Weather
        </h1>
        <input type="text" placeholder="Enter City" maxLength="50" value={city}  onChange={(e) => setCity(e.target.value)} />
        <button type="submit" data-test="button">
          Get Forecast
        </button>
        <div className="weather-info">
          <p>Date : {result.date}</p>
          <p>City : {result.city}</p>
          <p>Temperature in Fahrenheit: {result.temperatureF} °F</p>
          <p>Temperature in Celsius: {result.temperatureC} °C</p>
        </div>
      </form>
    </section>
  );
};

export default Weather;
