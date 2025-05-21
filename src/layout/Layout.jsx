import { Outlet, Link, useLocation } from "react-router-dom";
import { useState } from "react";
import "../App.css";

export default function Layout() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Products", path: "/product" },
    { label: "About", path: "/about" },
    { label: "Login", path: "/login" },
  ];

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="layout-wrapper">
      {/* HEADER */}
      <header className="header-dark-blue shadow-sm py-3">
        <div className="container header-container">
          <h4 className="site-title">Mahsham TechStore</h4>

          {/* Burger menu */}
          <button
            className="burger-toggle d-md-none"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            {menuOpen ? "✖" : "☰"}
          </button>

          {/* Desktop Nav */}
          <nav className="d-none d-md-flex gap-3">
            {navItems.map(({ label, path }) => {
              const isActive = location.pathname === path;
              return (
                <Link
                  key={path}
                  to={path}
                  onClick={closeMenu}
                  className={`nav-link-custom fw-medium ${
                    isActive ? "nav-link-active" : ""
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="d-md-none mt-2 text-center">
            {navItems.map(({ label, path }) => {
              const isActive = location.pathname === path;
              return (
                <Link
                  key={path}
                  to={path}
                  onClick={closeMenu}
                  className={`d-block nav-link-custom fw-medium mx-4 mb-2 ${
                    isActive ? "nav-link-active" : ""
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </div>
        )}
      </header>

      {/* MAIN */}
      <main className="container py-5 flex-grow-1">
        <Outlet />
      </main>

      {/* FOOTER */}
      <footer className="footer-dark-blue text-center py-4 mt-auto shadow-sm">
        <div className="container">
          <p className="mb-2">
            &copy; {new Date().getFullYear()} <strong>Mahsham TechStore</strong>. All rights reserved.
          </p>
          <p className="small footer-muted-text">
            Built with 💙 by Fatemeh Fouladi Mahani.
          </p>
        </div>
      </footer>
    </div>
  );
}
