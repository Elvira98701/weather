import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

import clsx from "clsx";

import styles from "./styles.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  className?: string;
}

export const Button = ({
  children,
  loading = false,
  className,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button className={clsx(styles.button, className)} {...props}>
      {loading ? "Загрузка..." : children}
    </button>
  );
};
