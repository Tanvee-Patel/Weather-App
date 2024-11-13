import React from 'react';

const Forecast = ({ data }) => {
  return (
    <div className="mt-8">
      {/* <h2 className="text-2xl font-bold mb-4">5-Day Forecast</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data.map((day) => (
          <div key={day.date} className="bg-white p-4 rounded-md shadow-md text-center border border-blue-950">
            <h3 className="text-xl font-bold">{new Date(day.date).toLocaleDateString()}</h3>
            <img src={day.day.condition.icon} alt={day.day.condition.text} className="mx-auto mt-2" />
            <p className="mt-2">{day.day.condition.text}</p>
            <p>Max: {day.day.maxtemp_c}°C</p>
            <p>Min: {day.day.mintemp_c}°C</p>
            <p>Humidity: {day.day.avghumidity}%</p>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Forecast;
