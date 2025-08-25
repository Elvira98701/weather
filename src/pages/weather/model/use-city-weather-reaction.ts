import { useEffect } from "react";

import { reaction } from "mobx";

import { cityStore } from "@/entities/city";
import { weatherStore } from "@/features/weather";

export const useCityWeatherReaction = () => {
  useEffect(() => {
    const dispose = reaction(
      () => cityStore.currentCity,
      (city) => {
        if (city) {
          weatherStore.fetchWeather(city.name);
        }
      }
    );

    return () => dispose();
  }, []);
};
