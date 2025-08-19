import { Outlet } from "react-router";

interface LayoutProps {
  headerSlot?: React.ReactNode;
}

export const Layout = ({ headerSlot }: LayoutProps) => {
  return (
    <>
      {headerSlot}
      <main>
        <Outlet />
      </main>
    </>
  );
};
