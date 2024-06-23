import { Link } from "react-router-dom";

export const Header = () => (
  <header className="min-w-80 whitespace-nowrap">
    <div className="relative z-20 flex flex-col gap-4 p-4">
      <Link to="/">
        <h1>Tamta Lomidze</h1>
        <p>Front-End Developer</p>
      </Link>

      <div className="flex flex-col items-start">
        <a href="https://github.com/Peac-h" className="link" target="_blank">
          Github
        </a>
        <a href="mailto:p6eac.h@gmail.com" className="link">
          Gmail
        </a>
      </div>
    </div>
  </header>
);
