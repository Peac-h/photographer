import { Footer } from "./ui/Footer";
import { Header } from "./ui/Header";
import { Main } from "./ui/Main";

export const App = () => (
  <div className="flex min-h-screen flex-col gap-4">
    <Header />
    <Main />
    <Footer />
  </div>
);
