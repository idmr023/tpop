const currentYear = new Date().getFullYear();

const Footer = () => (
  <footer className="site-footer" id="contacto">
    <div className="footer-main">
      <div className="footer-brand">
        <a className="wordmark" href="#inicio">
          T.pop
        </a>
        <p>Vestimos canciones, momentos y todo aquello que no cabe en una playlist.</p>      </div>
      <div className="footer-contact">
        <span className="footer-label">Síguenos</span>
        <a href="https://www.instagram.com/tpop.pe/" target="_blank" rel="noopener noreferrer">Instagram /tpop.pe</a>
        <p className="footer-copy">Diseñado para quienes escuchan distinto por <a href="https://portafolio-idmr.netlify.app/es" target="_blank" rel="noopener noreferrer">IDMR</a></p>
      </div>
    </div>
    <div className="footer-bottom">
      <p>© {currentYear} tpop</p>
      <a href="#inicio">Volver arriba ↑</a>
    </div>
  </footer>
);

export default Footer;
