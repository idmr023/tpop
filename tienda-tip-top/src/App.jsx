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
            <p className="section-kicker">No es solo merch. Es memoria.</p>
            <h2>Vístete de lo que sientes.</h2>
          </div>
          <div className="manifesto-copy">
            <p className="manifesto-mark" aria-hidden="true">T/T</p>
            <p>
              Tip Top nace de los discos que nos cambian el pulso. Diseñamos
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
