import { LoginForm } from "@/features/user/login";
import { Container } from "@/shared/ui";

import styles from "./styles.module.scss";

export const LoginPage = () => {
  return (
    <>
      <Container className={styles.login}>
        <LoginForm />
      </Container>
    </>
  );
};
