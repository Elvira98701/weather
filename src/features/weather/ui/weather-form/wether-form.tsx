import { useState, type ChangeEvent, type FormEvent } from "react";

import clsx from "clsx";

import { weatherStore } from "../../model/weather.store";

import styles from "./styles.module.scss";

interface WeatherFormProps {
  className?: string;
}

export const WeatherForm = ({ className }: WeatherFormProps) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (searchValue.trim().length > 0) {
      weatherStore.fetchWeather(searchValue);
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <form className={clsx(styles.form, className)} onSubmit={handleSubmit}>
      <input
        name="search"
        type="search"
        placeholder="Москва"
        onChange={handleInputChange}
      />
    </form>
  );
};
