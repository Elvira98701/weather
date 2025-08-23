import clsx from "clsx";
import { observer } from "mobx-react";

import { cityStore } from "../../model/city.store";
import { CityCard } from "../city-card/city-card";

import styles from "./styles.module.scss";

interface CityListProps {
  className?: string;
}

export const CityList = observer(({ className }: CityListProps) => {
  return (
    <section className={clsx(styles.cities, className)}>
      <h2 className={styles.citiesTitle}>Сохраненные города</h2>
      {cityStore.cities.length > 0 ? (
        <ul className={styles.citiesList}>
          {cityStore.cities.map((city) => (
            <li className={styles.citiesItem} key={city.id}>
              <CityCard city={city} />
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.citiesEmpty}>Тут ничего нет :(</p>
      )}
    </section>
  );
});
