import axios from 'axios';
import React from 'react';

const API_KEY = 'd9deeb36de4cc6b19671a781b111c8df';
const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=amman&appid=${API_KEY}`)
console.log('data', data);
function weather() {
  return (
      <div>

      </div>
  );
}

export default weather;
