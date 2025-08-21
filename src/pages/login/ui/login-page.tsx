import { LoginForm } from "@/features/auth/login";
import { Container } from "@/shared/ui";

import styles from "./styles.module.scss";

export const LoginPage = () => {
  return (
    <section>
      <Container className={styles.login}>
        <LoginForm />
      </Container>
    </section>
  );
};
