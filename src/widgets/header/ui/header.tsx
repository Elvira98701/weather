import { useEffect, useState } from "react";

import clsx from "clsx";
import { NavLink } from "react-router";

import { LogoutButton } from "@/features/auth/logout";
import { navList } from "@/shared/constants";
import { Button, Container } from "@/shared/ui";

import styles from "./styles.module.scss";

interface HeaderProps {
  className?: string;
}

export const Header = ({ className }: HeaderProps) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  useEffect(() => {
    const handleCloseMenu = () => {
      setIsOpenMenu(false);
    };

    document.body.addEventListener("click", handleCloseMenu);

    return () => document.body.removeEventListener("click", handleCloseMenu);
  }, []);

  const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <header className={clsx(styles.header, className)}>
      <Container className={styles.headerWrapper}>
        <nav
          className={clsx(
            styles.headerNav,
            isOpenMenu && styles.headerNavActive
          )}
        >
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
        <Button className={styles.headerMenu} onClick={handleOpenMenu}>
          Меню
        </Button>
      </Container>
    </header>
  );
};
