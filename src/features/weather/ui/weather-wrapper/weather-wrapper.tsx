import { useEffect } from "react";

import { useGeolocation } from "@/shared/hooks";

import { weatherStore } from "../../model/weather.store";
import { WeatherForm } from "../weather-form/wether-form";

export const WeatherWrapper = () => {
  const { location, error: geoError, loading: geoLoading } = useGeolocation();

  useEffect(() => {
    if (geoLoading) return;

    if (location) {
      weatherStore.fetchWeatherByCoords(location.lat, location.lon);
    } else {
      weatherStore.fetchWeather("Москва");
    }
  }, [geoLoading, location]);

  useEffect(() => {
    if (geoError && !geoLoading) {
      console.warn("Геолокация недоступна:", geoError);
      weatherStore.fetchWeather("Москва");
    }
  }, [geoError, geoLoading]);

  return (
    <div>
      <WeatherForm />
    </div>
  );
};
