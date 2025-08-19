import type { ButtonHTMLAttributes } from "react";

import clsx from "clsx";

import styles from "./styles.module.scss";

interface ClearButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  onClick?: VoidFunction;
}

export const ClearButton = ({
  onClick,
  className,
  ...props
}: ClearButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={clsx(styles.button, className)}
      type="button"
      {...props}
    >
      X
    </button>
  );
};
