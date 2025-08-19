import { Container } from "@/shared/ui";

import styles from "./styles.module.scss";

export const HomePage = () => {
  return (
    <>
      <Container className={styles.home}>
        <h1 className={styles.homeTitle}>
          Погода <br /> по городам
        </h1>
      </Container>
    </>
  );
};
