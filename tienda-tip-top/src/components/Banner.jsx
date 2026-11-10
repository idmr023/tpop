import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Banner = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <section className="hero" id="inicio" ref={heroRef}>
      <motion.div className="hero-image" style={{ y: imageY }} aria-hidden="true" />
      <div className="hero-content">
        <p className="eyebrow">REPUTATION STREET &nbsp; / &nbsp; DROP 001</p>
        <h1>
          El sonido
          <span>se viste.</span>
        </h1>
        <div className="hero-bottom">
          <p className="hero-copy">
            Ropa nacida de los álbumes que se quedan contigo. Ediciones pequeñas,
            actitud para siempre.
          </p>
          <a className="text-link" href="#drops">Explorar los drops <span aria-hidden="true">↘</span></a>
        </div>
      </div>
      <div className="hero-stamp" aria-hidden="true">sonido<br />en la piel</div>
      <span className="hero-index">TIP TOP / 01—03</span>
    </section>
  );
};

export default Banner;
