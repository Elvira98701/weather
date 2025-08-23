import { CityList } from "@/entities/city";
import { CityForm } from "@/features/city-form";
import { Container } from "@/shared/ui";

import styles from "./styles.module.scss";

export const WeatherPage = () => {
  return (
    <Container className={styles.weather}>
      <div className={styles.weatherContent}>weather</div>
      <div className={styles.weatherCities}>
        <CityForm />
        <CityList />
      </div>
    </Container>
  );
};
