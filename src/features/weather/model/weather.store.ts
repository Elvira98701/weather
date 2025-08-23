import { makeAutoObservable } from "mobx";

import { weatherApi } from "../api/weather.api";

class WeatherStore {
  currentWeather = null;
  forecast = [];
  loading = false;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  async fetchWeather(city: string): Promise<void> {
    this.loading = true;
    this.error = null;
    try {
      const [current, forecast] = await Promise.all([
        weatherApi.getCurrentWeather(city),
        weatherApi.getForecast(city),
      ]);
      this.currentWeather = current;
      this.forecast = forecast;
    } catch (e) {
      this.error = (e as Error).message;
    } finally {
      this.loading = false;
    }
  }

  async fetchWeatherByCoords(lat: number, lon: number): Promise<void> {
    this.loading = true;
    this.error = null;
    try {
      const [current, forecast] = await Promise.all([
        weatherApi.getWeatherByCoords(lat, lon),
        weatherApi.getForecastByCoords(lat, lon),
      ]);
      this.currentWeather = current;
      this.forecast = forecast;
    } catch (e) {
      this.error = (e as Error).message;
    } finally {
      this.loading = false;
    }
  }
}

export const weatherStore = new WeatherStore();
