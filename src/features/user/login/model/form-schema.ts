import z from "zod";

export const formLoginSchema = z.object({
  username: z
    .string()
    .min(2, { message: "Имя должно содержать не менее 2 символов" }),
  password: z
    .string()
    .min(6, { message: "Пароль должен содержать не менее 6 символов" }),
});

export type FormLoginValues = z.infer<typeof formLoginSchema>;
