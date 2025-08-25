import clsx from "clsx";
import { observer } from "mobx-react";

import { weatherStore } from "../../model/weather.store";

import styles from "./styles.module.scss";

interface WeatherWeekProps {
  className?: string;
}

export const WeatherWeek = observer(({ className }: WeatherWeekProps) => {
  const { forecast, loading, error } = weatherStore;

  if (loading) return <div className={styles.loading}>Загрузка...</div>;

  if (error) return <div className={styles.error}>Ошибка: {error}</div>;

  const forecastday = forecast?.forecast.forecastday;

  return (
    <div className={clsx(styles.week, className)}>
      <h2 className={styles.weekTitle}>Погода на неделю</h2>
      <p className={styles.weekPlan}>Бесплатный план (доступно 3 дня)</p>
      <div className={styles.weekDays}>
        {forecastday?.map((day, index) => (
          <div className={styles.weekDay} key={index}>
            <h3 className={styles.weekDate}>{day.date}</h3>
            <p className={styles.weekTemp}>{day.day.avgtemp_c}°</p>
            <div className={styles.weekCondition}>
              <img src={day.day.condition.icon} />
              <span>{day.day.condition.text}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});
