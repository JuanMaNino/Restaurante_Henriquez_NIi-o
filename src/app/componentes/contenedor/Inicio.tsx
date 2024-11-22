import Restaurante from "./../../../assets/img/Restaurante.png"

export const Inicio = () => {
  return (
    <>
      <header className="hero d-flex align-items-center text-center py-5" style={{ background: "linear-gradient(135deg, #f39c12, #d35400)", color: "#fff", minHeight: "50vh" }}>
        <div className="container">
          <h1 className="display-3" style={{ fontFamily: "'Poppins', sans-serif" }}>¡Descubre el Sabor de Colombia!</h1>
          <p className="lead" style={{ fontFamily: "'Roboto', sans-serif" }}>
            ¡Haz de cada comida una fiesta de sabores! Te esperamos para compartir contigo lo mejor de nuestra tierra.
          </p>
        </div>
      </header>

      <section id="acerca" className="py-5" style={{ backgroundColor: "#f7f7f7", color: "#333" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="display-4" style={{ fontFamily: "'Poppins', sans-serif" }}>Nuestra Historia</h2>
              <p className="lead" style={{ fontFamily: "'Roboto', sans-serif" }}>
                En nuestro restaurante, cada plato es una celebración de la
                riqueza cultural de Colombia. Nos especializamos en fusionar
                tradición y modernidad para brindar experiencias memorables.
              </p>
            </div>
            <div className="col-lg-6">
              <img 
                src={Restaurante}
                alt="Nuestra historia"
                className="img-fluid rounded shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
