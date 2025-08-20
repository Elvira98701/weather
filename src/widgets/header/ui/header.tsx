import clsx from "clsx";
import { NavLink } from "react-router";

import { LogoutButton } from "@/features/user/logout";
import { navList } from "@/shared/constants";
import { Container } from "@/shared/ui";

import styles from "./styles.module.scss";

interface HeaderProps {
  className?: string;
}

export const Header = ({ className }: HeaderProps) => {
  return (
    <header className={clsx(styles.header, className)}>
      <Container className={styles.headerWrapper}>
        <nav className={styles.headerNav}>
          <ul className={styles.headerList}>
            {navList.map((navItem) => (
              <li key={navItem.id}>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? clsx(styles.headerLink, styles.active)
                      : styles.headerLink
                  }
                  to={navItem.path}
                >
                  {navItem.title}
                </NavLink>
              </li>
            ))}
          </ul>
          <LogoutButton />
        </nav>
      </Container>
    </header>
  );
};
