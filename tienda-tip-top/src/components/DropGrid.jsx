import DropCard from "./DropCard";
import { products } from "../data/products";

const DropGrid = ({ onAddToCart }) => (
  <section className="drops-section" id="drops">
    <div className="section-heading">
      <div>
        <p className="section-kicker">La primera selección / 2025</p>
        <h2>Escucha. Siente. Lleva.</h2>
      </div>
      <p>Tres universos, una misma forma de vivir la música más allá del play.</p>
    </div>
    <div className="drop-list">
      {products.map((product, index) => (
        <>
          <DropCard
            key={product.id}
            product={product}
            index={index}
            onAddToCart={onAddToCart}
          />
          {index < products.length - 1 && (
            <div className="drop-separator" key={`sep-${index}`}>
              <img className="drop-separator-img" src={product.image} alt="" loading="lazy" />
            </div>
          )}
        </>
      ))}
    </div>
  </section>
);

export default DropGrid;
