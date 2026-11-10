import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const DropCard = ({ product, index, onAddToCart }) => {
  const visualRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: visualRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);
  const isReversed = index % 2 === 1;

  return (
    <article className={`drop-card${isReversed ? " drop-card--reverse" : ""}`}>
      <div className="drop-visual" ref={visualRef}>
        <motion.img
          className="drop-image"
          src={product.image}
          alt={product.placeholder}
          loading="lazy"
          style={{ y: imageY }}
        />
        <span className="drop-visual-label">{product.visualLabel}</span>
      </div>
      <div className="drop-details">
        <div className="drop-meta">
          <span>DROP / 0{index + 1}</span>
          <span>EDICIÓN LIMITADA</span>
        </div>
        <p className="drop-artist">{product.artist}</p>
        <h3 className="drop-title">{product.name}</h3>
        <p className="drop-album">{product.album}</p>
        <p className="drop-description">{product.description}</p>
        <div className="drop-footer">
          <span className="drop-price">${product.price} USD</span>
          <button className="buy-button" type="button" onClick={onAddToCart}>
            Añadir a la bolsa <span aria-hidden="true">+</span>
          </button>
        </div>
      </div>
    </article>
  );
};

export default DropCard;
