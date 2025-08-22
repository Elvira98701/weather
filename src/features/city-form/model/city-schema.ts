import z from "zod";

export const formCitySchema = z.object({
  city: z
    .string()
    .min(2, { message: "Город должен содержать не менее 2 символов" }),
});

export type FormCityValues = z.infer<typeof formCitySchema>;
