import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";

import { cityStore } from "@/entities/city";
import { Button, FormInput } from "@/shared/ui";

import { formCitySchema, type FormCityValues } from "../model/city-schema";

import styles from "./styles.module.scss";

export const CityForm = () => {
  const form = useForm<FormCityValues>({
    resolver: zodResolver(formCitySchema),
    defaultValues: {
      city: "",
    },
  });

  const onSubmit: SubmitHandler<FormCityValues> = (data) => {
    const newCity = {
      id: String(Date.now()),
      name: data.city,
    };
    cityStore.addCity(newCity);
  };

  return (
    <FormProvider {...form}>
      <form className={styles.form} onSubmit={form.handleSubmit(onSubmit)}>
        <FormInput
          name="city"
          label="Город"
          placeholder="Москва"
          type="text"
          required
        />

        <Button
          loading={form.formState.isSubmitting}
          disabled={form.formState.isSubmitting}
          type="submit"
        >
          Добавить
        </Button>
      </form>
    </FormProvider>
  );
};
