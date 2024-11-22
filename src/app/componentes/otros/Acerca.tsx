export const Acerca = () => {
  return (
    <section
      id="acerca"
      className="py-5"
      style={{
        background: "linear-gradient(135deg, #8e44ad, #3498db)",
        color: "#fff",
      }}
    >
      <div className="container">
        <h1
          className="display-4 text-center mb-4"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Acerca de Nosotros
        </h1>
        <p
          className="lead text-center mb-5"
          style={{ fontFamily: "'Roboto', sans-serif" }}
        >
          En nuestro restaurante, honramos la riqueza cultural y gastronómica de
          Colombia, transformando cada plato en una experiencia inolvidable que
          te llevará a explorar los sabores y tradiciones de nuestras diversas
          regiones.
        </p>

        <div className="row justify-content-center">
          <div className="col-md-6 mb-4">
            <div
              className="p-4"
              style={{
                background: "#f1c40f",
                color: "#333",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              }}
            >
              <h2
                className="h5 mb-3"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Nuestra Misión
              </h2>
              <p style={{ fontFamily: "'Roboto', sans-serif" }}>
                Promover, preservar y compartir las tradiciones gastronómicas de
                Colombia, ofreciendo una experiencia culinaria inolvidable.
              </p>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div
              className="p-4"
              style={{
                background: "#1abc9c",
                color: "#333",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              }}
            >
              <h2
                className="h5 mb-3"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Nuestra Visión
              </h2>
              <p style={{ fontFamily: "'Roboto', sans-serif" }}>
                Ser reconocidos como el restaurante líder en cocina colombiana,
                destacándonos por nuestra autenticidad, innovación y calidad en
                cada plato.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
