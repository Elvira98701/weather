import clsx from "clsx";
import { observer } from "mobx-react";

import { cityStore } from "../model/city.store";

// import styles from "./styles.module.scss";

interface CityListProps {
  className?: string;
}

export const CityList = observer(({ className }: CityListProps) => {
  console.log(cityStore.cities);

  return (
    <section className={clsx("", className)}>
      {cityStore.cities.length > 0 &&
        cityStore.cities.map((city) => <p key={city.id}>{city.name}</p>)}
    </section>
  );
});
