import { makeAutoObservable } from "mobx";

import { weatherApi } from "../api/weather.api";

import type { WeatherData } from "./weather.types";

class WeatherStore {
  forecast: WeatherData | null = null;
  loading = false;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  async fetchWeather(city: string): Promise<void> {
    this.loading = true;
    this.error = null;
    try {
      const forecast = await weatherApi.getForecast(city);
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
      const forecast = await weatherApi.getForecastByCoords(lat, lon);
      this.forecast = forecast;
    } catch (e) {
      this.error = (e as Error).message;
    } finally {
      this.loading = false;
    }
  }
}

export const weatherStore = new WeatherStore();
