import { useState, useEffect } from 'react';
import { Cloud, CloudRain, Sun } from 'lucide-react';

export default function Weather() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch weather for Kenitra, Morocco (34.2620°N, 6.2636°W)
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          'https://api.open-meteo.com/v1/forecast?latitude=34.2620&longitude=-6.2636&current=temperature_2m,weather_code&timezone=auto'
        );
        const data = await response.json();
        if (data.current) {
          setWeather({
            temp: Math.round(data.current.temperature_2m),
            code: data.current.weather_code
          });
        }
      } catch (error) {
        console.log('Weather fetch error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading || !weather) return null;

  const getWeatherIcon = (code) => {
    if (code === 0) return <Sun className="w-5 h-5 text-yellow-400" />;
    if (code <= 3) return <Cloud className="w-5 h-5 text-gray-400" />;
    return <CloudRain className="w-5 h-5 text-blue-400" />;
  };

  return (
    <div className="flex items-center gap-2 px-4 py-2 bg-brand-gold/10 border border-brand-gold/30 rounded-lg">
      {getWeatherIcon(weather.code)}
      <span className="text-brand-gold font-semibold text-sm">
        {weather.temp}°C
      </span>
    </div>
  );
}
