import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";

import { pagesConfig } from "@/shared/config";
import { useAuth } from "@/shared/hooks";
import { Button, ErrorText, FormInput } from "@/shared/ui";

import { formLoginSchema, type FormLoginValues } from "../model/form-schema";

import styles from "./styles.module.scss";

export const LoginForm = () => {
  const form = useForm<FormLoginValues>({
    resolver: zodResolver(formLoginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const [isError, setIsError] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormLoginValues> = (data) => {
    const isCorrect = data.username === "Admin" && data.password === "12345";

    if (!isCorrect) {
      setIsError(true);
      return;
    }

    setIsError(false);
    login();
    navigate(pagesConfig.profile);
  };

  return (
    <FormProvider {...form}>
      <form className={styles.form} onSubmit={form.handleSubmit(onSubmit)}>
        <h3 className={styles.formTitle}>Вход</h3>

        <FormInput
          name="username"
          label="Имя пользователя"
          placeholder="nikita"
          type="text"
          required
        />
        <FormInput
          name="password"
          label="Пароль"
          type="password"
          placeholder="password123"
          required
        />

        {isError && (
          <ErrorText text="Имя пользователя или пароль введены не верно" />
        )}

        <Button
          loading={form.formState.isSubmitting}
          disabled={form.formState.isSubmitting}
          type="submit"
        >
          Войти
        </Button>
      </form>
    </FormProvider>
  );
};
