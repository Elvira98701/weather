import axios from "axios";

import { BASE_URL } from "@/shared/constants";

import type { WeatherData } from "../model/weather.types";

export const weatherApi = {
  async getForecast(city: string): Promise<WeatherData> {
    const response = await axios.get(`${BASE_URL}/forecast.json`, {
      params: {
        q: city,
        lang: "ru",
        days: 7,
        key: import.meta.env.VITE_API_KEY,
      },
    });

    return response.data;
  },

  async getForecastByCoords(lat: number, lon: number): Promise<WeatherData> {
    const response = await axios.get(`${BASE_URL}/forecast.json`, {
      params: {
        q: `${lat},${lon}`,
        lang: "ru",
        days: 7,
        key: import.meta.env.VITE_API_KEY,
      },
    });

    return response.data;
  },
};
