import clsx from "clsx";
import { NavLink } from "react-router";

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
        <nav>
          <ul className={styles.headerList}>
            {navList.map((navItem) => (
              <li key={navItem.id}>
                <NavLink
                  className={styles.headerLink}
                  to={navItem.path}
                  style={({ isActive }) => {
                    return {
                      backgroundColor: isActive ? "var(--color-accent)" : "",
                      color: isActive ? "var(--color-dark)" : "",
                    };
                  }}
                >
                  {navItem.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
};
