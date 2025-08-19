import z from "zod";

export const formLoginSchema = z.object({
  username: z
    .string()
    .min(2, { message: "Имя должно содержать не менее 2 символов" }),
  password: z
    .string()
    .min(5, { message: "Пароль должен содержать не менее 5 символов" }),
});

export type FormLoginValues = z.infer<typeof formLoginSchema>;
