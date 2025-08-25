import { useState } from "react";

import clsx from "clsx";

import { CityList } from "@/entities/city";
import { CityForm } from "@/features/city-form";
import { WeatherWrapper } from "@/features/weather";
import { Button, Container } from "@/shared/ui";

import { useCityWeatherReaction } from "../model/use-city-weather-reaction";

import styles from "./styles.module.scss";

export const WeatherPage = () => {
  useCityWeatherReaction();
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container className={styles.weather}>
      <div className={styles.weatherContent}>
        <WeatherWrapper />
      </div>
      <div
        className={clsx(
          styles.weatherCities,
          isOpen && styles.weatherCitiesActive
        )}
      >
        <CityForm />
        <CityList />
        <Button className={styles.weatherClose} onClick={handleOpen}>
          X
        </Button>
      </div>
      <Button className={styles.weatherButton} onClick={handleOpen}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="currentColor"
          viewBox="0 0 256 256"
        >
          <path d="M156,128a28,28,0,1,1-28-28A28,28,0,0,1,156,128ZM48,100a28,28,0,1,0,28,28A28,28,0,0,0,48,100Zm160,0a28,28,0,1,0,28,28A28,28,0,0,0,208,100Z"></path>
        </svg>
      </Button>
    </Container>
  );
};
