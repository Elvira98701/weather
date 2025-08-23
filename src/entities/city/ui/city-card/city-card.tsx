import clsx from "clsx";

import { Button } from "@/shared/ui";

import { cityStore } from "../../model/city.store";
import type { City } from "../../model/city.types";

import styles from "./styles.module.scss";

interface CityCardProps {
  city: City;
  className?: string;
}

export const CityCard = ({ city, className }: CityCardProps) => {
  const handleDeleteCity = () => {
    cityStore.removeCity(city.id);
  };

  const handleCurrentCity = () => {
    cityStore.setCurrentCity(city);
  };

  return (
    <div className={clsx(styles.city, className)} onClick={handleCurrentCity}>
      <span className={styles.cityName}>{city.name}</span>
      <Button
        className={styles.cityButton}
        onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
          event.stopPropagation();
          handleDeleteCity();
        }}
      >
        X
      </Button>
    </div>
  );
};
