import clsx from "clsx";

import styles from "./styles.module.scss";

interface WeatherCurrentProps {
  className?: string;
}

export const WeatherCurrent = ({ className }: WeatherCurrentProps) => {
  return <div className={clsx(styles.current, className)}>WeatherCurrent</div>;
};
