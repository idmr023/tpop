const currentYear = new Date().getFullYear();

const Footer = () => (
  <footer className="site-footer" id="contacto">
    <div className="footer-main">
      <div className="footer-brand">
        <a className="wordmark" href="#inicio">
          <span className="wordmark-mark" aria-hidden="true">T/T</span>
          <span>TIENDA TIP TOP</span>
        </a>
        <p>Vestimos canciones, momentos y todo aquello que no cabe en una playlist.</p>
      </div>
      <div className="footer-contact">
        <span className="footer-label">¿Hablamos?</span>
        <a href="mailto:hola@tiendatip.top">hola@tiendatip.top</a>
      </div>
    </div>
    <div className="footer-bottom">
      <p>© {currentYear} TIENDA TIP TOP</p>
      <p>Diseñado para quienes escuchan distinto.</p>
      <a href="#inicio">Volver arriba ↑</a>
    </div>
  </footer>
);

export default Footer;
