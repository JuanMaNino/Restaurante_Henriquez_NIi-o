export const Inicio = () => {
  return (
    <>
      <header className="hero bg-dark text-white text-center py-5">
        <div className="container">
          <h1 className="display-3">¡Descubre el Sabor de Colombia!</h1>
          <p className="lead">
          ¡Haz de cada comida una fiesta de sabores! Te esperamos para compartir contigo lo mejor de nuestra tierra.
          </p>
          <a href="#acerca" className="btn btn-primary btn-lg me-3">
            Conócenos
          </a>
          <a href="#menu" className="btn btn-outline-light btn-lg">
            Explora Nuestro Menú
          </a>
        </div>
      </header>

      <section id="acerca" className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="display-4">Nuestra Historia</h2>
              <p className="lead">
                En nuestro restaurante, cada plato es una celebración de la
                riqueza cultural de Colombia. Nos especializamos en fusionar
                tradición y modernidad para brindar experiencias memorables.
              </p>
              <a href="#menu" className="btn btn-primary">
                Descubre Más
              </a>
            </div>
            <div className="col-lg-6">
              <img
                src="Restaurante.png"
                alt="Nuestra historia"
                className="img-fluid rounded shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="bg-light py-5">
        <div className="container text-center">
          <h2 className="display-4">Nuestros Platos Estrella</h2>
          <p className="lead">
            Déjate llevar por un recorrido culinario lleno de sabor y
            autenticidad. Aquí están algunos de nuestros favoritos:
          </p>
          <div className="row">
            {[
              {
                img: "Bandeja_Paisa.png",
                title: "Bandeja Paisa",
                desc: "Una experiencia completa de la cocina antioqueña en cada bocado.",
              },
              {
                img: "Ajiaco.png",
                title: "Ajiaco",
                desc: "El tradicional plato bogotano lleno de calidez y sabor.",
              },
              {
                img: "Mote_Queso.png",
                title: "Mote de Queso",
                desc: "Un plato típico de la costa Caribe, lleno de cremosidad y tradición.",
              },
            ].map((plato, index) => (
              <div className="col-md-4" key={index}>
                <div className="card shadow-sm">
                  <img
                    src={plato.img}
                    className="card-img-top comida"
                    alt={plato.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{plato.title}</h5>
                    <p className="card-text">{plato.desc}</p>
                    <a href="#menu" className="btn btn-primary">
                      Pide el Tuyo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
