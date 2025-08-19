import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";

import { Button, FormInput } from "@/shared/ui";

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

  const onSubmit: SubmitHandler<FormLoginValues> = (data) => {
    console.log(data);
  };

  return (
    <FormProvider {...form}>
      <form className={styles.form} onSubmit={form.handleSubmit(onSubmit)}>
        <div className={styles.formHeader}>
          <h3 className={styles.formTitle}>Вход</h3>
        </div>

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
