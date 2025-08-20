import { Container } from "@/shared/ui";

import styles from "./styles.module.scss";

export const ProfilePage = () => {
  return (
    <section>
      <Container className={styles.profile}>
        <div className={styles.profileContent}>
          <img
            className={styles.profileAvatar}
            src="/avatar.jpg"
            width={700}
            height={700}
          />
          <div className={styles.profileDescription}>
            <h1 className={styles.profileTitle}>Профиль</h1>
            <p>
              <span className={styles.profileAccent}>Имя пользователя</span>:
              Admin
            </p>
            <p>
              <span className={styles.profileAccent}>Населенный пункт</span>:
              Москва
            </p>
            <p>
              <span className={styles.profileAccent}>Текущее время</span>: 06:23
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
