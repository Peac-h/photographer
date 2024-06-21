import { Outlet } from "react-router-dom";

export const Main = () => {
  return (
    <main className="mr-20 flex-1 pb-11 sm:mr-0">
      <Outlet />
    </main>
  );
};
