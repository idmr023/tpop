import { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#drops", label: "Drops" },
  { href: "#nosotros", label: "Manifiesto" },
  { href: "#contacto", label: "Contacto" },
];

const TICKER_LINES = [
  "tpop — sonido que se viste",
  "drops limitados — ediciones pequeñas",
  "ropa nacida de los álbumes que se quedan contigo",
  "escucha . siente . lleva",
  "tpop",
];

const Header = ({ cartCount }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const trackRef = useRef(null);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const content = track.innerHTML;
    track.innerHTML = content + content;
    const duration = Math.max(20, track.scrollWidth / 25);
    track.animate(
      [
        { transform: "translateX(0)" },
        { transform: `translateX(-${track.scrollWidth / 2}px)` },
      ],
      {
        duration: duration * 1000,
        iterations: Infinity,
        easing: "linear",
      }
    );
  }, []);

  return (
    <header className="site-header">
      <div className="site-ticker">
        <div className="ticker-track" ref={trackRef}>
          {TICKER_LINES.map((line, i) => (
            <span key={i}>{line}</span>
          ))}
        </div>
      </div>
      <div className="header-inner">
        <nav className="desktop-nav" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </nav>
        <a className="wordmark" href="#inicio" aria-label="tpop, inicio" onClick={closeMenu}>
          T.pop
        </a>
        <div className="header-cart">
          <a
            className="cart-button"
            href="#drops"
            aria-label={`Bolsa de compra, ${cartCount} ${cartCount === 1 ? "artículo" : "artículos"}`}
          >
            Bolsa <span className="cart-count">{cartCount}</span>
          </a>
        </div>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={16} /> : <Menu size={16} />}
        </button>
      </div>
      {menuOpen && (
        <nav className="mobile-nav" id="mobile-navigation" aria-label="Navegación móvil">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>{link.label}</a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
