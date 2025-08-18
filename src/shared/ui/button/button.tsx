import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

import clsx from "clsx";

import styles from "./styles.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const Button = ({
  children,
  className,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button className={clsx(styles.button, className)} {...props}>
      {children}
    </button>
  );
};
