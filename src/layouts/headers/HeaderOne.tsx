import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLang } from "../../context/LanguageContext";

const HeaderOne = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, toggleLang } = useLang();

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header id="header-sticky" className={`header-1 ${sticky ? "sticky" : ""}`}>
        <div className="container">
          <div className="mega-menu-wrapper">
            <div className="header-main">
              <div className="logo">
                <Link to="/" className="header-logo">
                  <img src="codecraftt-logo.png" alt="CodeCraftt" style={{ maxHeight: "40px", width: "auto" }} />
                </Link>
              </div>
              <div className="mean__menu-wrapper d-none d-xl-block">
                <div className="main-menu">
                  <nav>
                    <ul>
                      <li><Link to="/">{lang === "es" ? "Inicio" : "Home"}</Link></li>
                      <li><Link to="/nosotros">{lang === "es" ? "Nosotros" : "About"}</Link></li>
                      <li><Link to="/servicios">{lang === "es" ? "Servicios" : "Services"}</Link></li>
                      <li><Link to="/blog">Blog</Link></li>
                      <li><Link to="/contacto">{lang === "es" ? "Contacto" : "Contact"}</Link></li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="header-right d-flex justify-content-end align-items-center">
                <div className="header-button d-none d-md-block">
                  <button
                    onClick={toggleLang}
                    style={{
                      background: "none",
                      border: "1px solid rgba(255,255,255,0.3)",
                      color: "#fff",
                      padding: "6px 14px",
                      borderRadius: "120px",
                      cursor: "pointer",
                      fontSize: "12px",
                      fontWeight: 600,
                      letterSpacing: "1px",
                      marginRight: "10px",
                      fontFamily: "Kanit, sans-serif",
                    }}
                  >
                    {lang === "es" ? "EN" : "ES"}
                  </button>
                  <Link to="/contacto" className="theme-btn">
                    {lang === "es" ? "Agenda una Consulta" : "Book a Call"}
                  </Link>
                </div>
                <div
                  className="header__hamburger d-xl-none my-auto"
                  onClick={() => setMobileOpen(!mobileOpen)}
                >
                  <div className="sidebar__toggle">
                    <i className="fas fa-bars"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu-wrapper d-xl-none ${mobileOpen ? "open" : ""}`}>
        <div className="mean-container">
          <div className="mean-bar">
            <nav className="mean-nav">
              <ul style={{ display: mobileOpen ? "block" : "none" }}>
                <li><Link to="/" onClick={() => setMobileOpen(false)}>{lang === "es" ? "Inicio" : "Home"}</Link></li>
                <li><Link to="/nosotros" onClick={() => setMobileOpen(false)}>{lang === "es" ? "Nosotros" : "About"}</Link></li>
                <li><Link to="/servicios" onClick={() => setMobileOpen(false)}>{lang === "es" ? "Servicios" : "Services"}</Link></li>
                <li><Link to="/blog" onClick={() => setMobileOpen(false)}>Blog</Link></li>
                <li><Link to="/contacto" onClick={() => setMobileOpen(false)}>{lang === "es" ? "Contacto" : "Contact"}</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderOne;