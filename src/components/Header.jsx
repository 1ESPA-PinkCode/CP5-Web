import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  const linkBase =
    "px-4 py-1.5 rounded-full font-medium transition-all duration-300";
  const linkInactive =
    "text-white hover:bg-[#A8C2E0] hover:text-[#A8C2E0]";
  const linkActive =
    "bg-white text-[#A8C2E0] shadow-md";

  return (
    <header className="w-full bg-[#EA631B] shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-3">
        <div>
          <img
            src={logo}
            alt="Logo"
            className="h-12 w-auto object-contain"
          />
        </div>

        <nav className="flex items-center gap-3">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkInactive}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/produto"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkInactive}`
            }
          >
            Produto
          </NavLink>

          <NavLink
            to="/suporte"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkInactive}`
            }
          >
            Suporte
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header
