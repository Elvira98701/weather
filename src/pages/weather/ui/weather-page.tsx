import { CityList } from "@/entities/city";
import { CityForm } from "@/features/city-form";
import { WeatherWrapper } from "@/features/weather";
import { Container } from "@/shared/ui";

import { useCityWeatherReaction } from "../model/use-city-weather-reaction";

import styles from "./styles.module.scss";

export const WeatherPage = () => {
  useCityWeatherReaction();

  return (
    <Container className={styles.weather}>
      <div className={styles.weatherContent}>
        <WeatherWrapper />
      </div>
      <div className={styles.weatherCities}>
        <CityForm />
        <CityList />
      </div>
    </Container>
  );
};
