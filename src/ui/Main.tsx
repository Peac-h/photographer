import { Outlet } from "react-router-dom";

export const Main = () => {
  return (
    <main className="mr-20 flex-1 pb-32 sm:mr-0 md:pb-11">
      <Outlet />
    </main>
  );
};
