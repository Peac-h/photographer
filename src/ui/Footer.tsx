import { Link } from "react-router-dom";

const currentYear = new Date().getFullYear();

export const Footer = () => (
  <footer className="relative z-50 flex justify-between border-t border-stone-200 px-4 py-2 text-stone-400 dark:border-stone-800 dark:text-stone-700">
    <Link
      to="/about"
      className="underline-offset-2 transition-all duration-200 ease-in-out hover:underline hover:decoration-stone-400 dark:hover:decoration-stone-700"
    >
      About
    </Link>
    <span>© {currentYear}</span>
  </footer>
);
