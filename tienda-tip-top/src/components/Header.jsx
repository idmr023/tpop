import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#drops", label: "Drops" },
  { href: "#nosotros", label: "Manifiesto" },
  { href: "#contacto", label: "Contacto" },
];

const Header = ({ cartCount }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="wordmark" href="#inicio" aria-label="Tip Top, inicio" onClick={closeMenu}>
          <span className="wordmark-mark" aria-hidden="true">T/T</span>
          <span>TIENDA TIP TOP</span>
        </a>
        <nav className="desktop-nav" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </nav>
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
