import axios from "axios";

import { BASE_URL } from "@/shared/constants";

export const weatherApi = {
  async getCurrentWeather(city: string) {
    const response = await axios.get(`${BASE_URL}/current.json`, {
      params: {
        q: city,
        lang: "ru",
        key: import.meta.env.VITE_API_KEY,
      },
    });

    return response.data;
  },

  async getForecast(city: string) {
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
};
