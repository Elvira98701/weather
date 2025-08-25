import { useEffect } from "react";

import clsx from "clsx";
import { observer } from "mobx-react";

import { weatherStore } from "../../model/weather.store";

import styles from "./styles.module.scss";

interface WeatherCurrentProps {
  className?: string;
}

export const WeatherCurrent = observer(({ className }: WeatherCurrentProps) => {
  const { forecast, loading, error } = weatherStore;

  useEffect(() => {
    if (loading || error) return;

    const isDay = forecast?.current.is_day === 1;

    if (isDay) {
      document.documentElement.classList.remove("night");
    } else {
      document.documentElement.classList.add("night");
    }
  });

  if (loading) return <div className={styles.loading}>Загрузка...</div>;

  if (error) return <div className={styles.error}>Ошибка: {error}</div>;

  return (
    <section className={clsx(styles.current, className)}>
      <h1 className={styles.currentTitle}>{forecast?.location.name}</h1>
      <p className={styles.currentUpdate}>
        Последнее обновление: {forecast?.current.last_updated}
      </p>
      <div className={styles.currentWeather}>
        <p className={styles.currentTemp}>{forecast?.current.temp_c}°</p>
        <div className={styles.currentCondition}>
          <img src={forecast?.current.condition.icon} />
          <p>{forecast?.current.condition.text}</p>
        </div>
      </div>
      <div className={styles.currentDetails}>
        <p>
          Облачность:{" "}
          <span className={styles.currentDetailsValue}>
            {forecast?.current.cloud}%
          </span>
        </p>
        <p>
          Ветер:{" "}
          <span className={styles.currentDetailsValue}>
            {forecast?.current.wind_kph} км/ч
          </span>
        </p>
        <p>
          Давление:{" "}
          <span className={styles.currentDetailsValue}>
            {forecast?.current.pressure_in}%
          </span>
        </p>
        <p>
          Влажность:{" "}
          <span className={styles.currentDetailsValue}>
            {forecast?.current.humidity}%
          </span>
        </p>
        <p>
          UV индекс:{" "}
          <span className={styles.currentDetailsValue}>
            {forecast?.current.uv}
          </span>
        </p>
        <p>
          Видимость:{" "}
          <span className={styles.currentDetailsValue}>
            {forecast?.current.vis_km} км
          </span>
        </p>
      </div>
    </section>
  );
});
