import clsx from "clsx";
import { observer } from "mobx-react";

import { weatherStore } from "../../model/weather.store";

import styles from "./styles.module.scss";

interface WeatherCurrentProps {
  className?: string;
}

export const WeatherCurrent = observer(({ className }: WeatherCurrentProps) => {
  const { forecast, loading, error } = weatherStore;

  if (loading) return <div>Загрузка</div>;

  if (error) return <div>Ошибка: {error}</div>;

  return (
    <section className={clsx(styles.current, className)}>
      <h1 className={styles.currentTitle}>{forecast?.location.name}</h1>
      <div className={styles.currentWeather}>
        <p className={styles.currentTemp}>{forecast?.current.temp_c}°</p>
        <div className={styles.currentCondition}>
          <img src={forecast?.current.condition.icon} />
          <p>{forecast?.current.condition.text}</p>
        </div>
      </div>
      <div className={styles.currentDetails}>
        <p>
          Облачность <span>{forecast?.current.cloud}</span>%
        </p>
        <p>
          Ветер <span>{forecast?.current.wind_kph}</span> км/ч
        </p>
        <p>
          Давление <span>{forecast?.current.pressure_in}</span>%
        </p>
        <p>
          Влажность <span>{forecast?.current.humidity}</span>%
        </p>
        <p>
          Uv индекс <span>{forecast?.current.uv}</span>
        </p>
        <p>
          Видимость <span>{forecast?.current.vis_km}</span> км
        </p>
      </div>
    </section>
  );
});
