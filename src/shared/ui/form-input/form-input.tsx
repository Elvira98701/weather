import type { InputHTMLAttributes } from "react";

import clsx from "clsx";
import { useFormContext } from "react-hook-form";

import { ClearButton } from "../clear-button/clear-button";
import { ErrorText } from "../error-text/error-text";

import styles from "./styles.module.scss";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  required?: boolean;
  className?: string;
}

export const FormInput = ({
  name,
  label,
  required,
  className,
  ...props
}: FormInputProps) => {
  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext();

  const value = watch(name);
  const errorText = errors[name]?.message as string;

  const handleClickClear = () => {
    setValue(name, "", { shouldValidate: true });
  };

  return (
    <div className={clsx(styles.container, className)}>
      <label className={styles.label} htmlFor={name}>
        {label}
        {required && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            fill="currentColor"
            viewBox="0 0 256 256"
            className={styles.labelText}
          >
            <path d="M214.86,180.12a8,8,0,0,1-11,2.74L136,142.13V216a8,8,0,0,1-16,0V142.13L52.12,182.86a8,8,0,1,1-8.23-13.72L112.45,128,43.89,86.86a8,8,0,1,1,8.23-13.72L120,113.87V40a8,8,0,0,1,16,0v73.87l67.88-40.73a8,8,0,1,1,8.23,13.72L143.55,128l68.56,41.14A8,8,0,0,1,214.86,180.12Z"></path>
          </svg>
        )}
      </label>

      <div className={styles.wrapper}>
        <input
          className={styles.input}
          id={name}
          {...register(name)}
          {...props}
        />
        {value && (
          <ClearButton
            onClick={handleClickClear}
            className={styles.inputButton}
          />
        )}
      </div>

      {errorText && <ErrorText text={errorText} />}
    </div>
  );
};
