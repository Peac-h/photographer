import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Header } from "./ui/Header";
import { Main } from "./ui/Main";
import { Footer } from "./ui/Footer";
import { Hero } from "./ui/Hero";
import { About } from "./ui/About";
import { PhotoView } from "./ui/PhotoView";

const AppLayout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="mb-auto flex flex-col gap-40 md:flex-row md:gap-4">
        <Header />
        <Main />
      </div>

      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Hero />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/photo/:photoId",
        element: <PhotoView />,
      },
    ],
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
