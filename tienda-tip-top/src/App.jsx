import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import DropGrid from "./components/DropGrid";
import Footer from "./components/Footer";

const App = () => {
  const [cartCount, setCartCount] = useState(0);

  return (
    <div className="site-shell">
      <Header cartCount={cartCount} />
      <Banner />
      <main>
        <DropGrid onAddToCart={() => setCartCount((count) => count + 1)} />
        <section className="manifesto" id="nosotros">
          <div>
            <p className="section-kicker">Haz tu pedido ahora mismo y reserva tu drop favorito</p>
            <h2>Envíos con toda la confianza de Shalom</h2>
          </div>
          <div className="manifesto-copy">
            <div className="ship-info">
              <p>
                Haz tus pedidos a través de nuestras redes sociales{" "}
                <a href="https://www.instagram.com/tpop.pe/" target="_blank" rel="noopener noreferrer">@tpop.pe</a> &nbsp;•&nbsp;
                Envíos a Lima y provincias <br />
                📦 Envíos todos los martes y miércoles
              </p>
            </div>
            <p>
              tpop nace de los discos que nos cambian el pulso. Diseñamos
              piezas para llevar esa energía contigo: honestas, cómodas y hechas
              para durar más que una temporada.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
