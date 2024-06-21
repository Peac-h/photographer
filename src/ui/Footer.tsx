import { Link } from "react-router-dom";

const currentYear = new Date().getFullYear();

export const Footer = () => (
  <footer className="flex justify-between border-t border-[#222] px-4 py-2 text-stone-700">
    <Link to="/about" className="underline-offset-2 hover:underline">
      About
    </Link>
    <span>© {currentYear}</span>
  </footer>
);
