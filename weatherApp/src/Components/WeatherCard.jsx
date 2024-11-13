import React,{useState} from 'react';

const WeatherCard = ({ data }) => {

  const [fh,setFh]=useState(null)

  if (!data || !data.location || !data.current) {
    return <div>Loading...</div>;
  }

  const convertC=()=>{
    const celsius=data.current.temp_c;
    const fhvalue=1.8*celsius+32
    setFh(fhvalue)
  }

  return (
    <div className="bg-white p-4 rounded-md shadow-md text-center">
      <h2 className="text-2xl font-bold mb-2">{data.location.name}</h2>
      <p className="text-lg">{data.location.region}, {data.location.country}</p>
      <p className="text-3xl font-bold mt-4">{data.current.temp_c}°C</p>

      <button
        type="button"
        className="bg-blue-600 text-white p-2 rounded-r-lg border-2 border-l-0 border-gray-300"
        onClick={convertC}>
          Convert °C to °F
      </button>
     
    {fh != null && (
      <p className="text-2xl mt-2">
        {fh}°F
      </p>
    )}

      <p className="text-lg">{data.current.condition.text}</p>
      <img src={data.current.condition.icon} alt={data.current.condition.text} className="mx-auto mt-2" />
      <p className="mt-2">Humidity: {data.current.humidity}%</p>
      <p>Wind: {data.current.wind_kph} kph</p>
    </div>
  );
};

export default WeatherCard;
