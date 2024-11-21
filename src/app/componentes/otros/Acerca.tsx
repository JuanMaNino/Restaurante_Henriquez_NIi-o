export const Acerca = () => {
  return (
    <section id="acerca" className="py-5 bg-light">
      <div className="container">
        <h1 className="display-4 text-center mb-4">Acerca de Nosotros</h1>
        <p className="lead text-center mb-5">
          En nuestro restaurante, celebramos la riqueza cultural y gastronómica
          de Colombia. Queremos que cada plato sea una experiencia única que te
          transporte a las diferentes regiones del país.
        </p>

        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <div className="p-4 bg-white shadow rounded">
              <h2 className="h5 mb-3">Nuestra Misión</h2>
              <p>
                Promover, preservar y compartir las tradiciones gastronómicas de
                Colombia, ofreciendo una experiencia culinaria inolvidable.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="p-4 bg-white shadow rounded">
              <h2 className="h5 mb-3">Nuestra Historia</h2>
              <p>
                Con pasión por la cocina colombiana, combinamos recetas
                tradicionales con un enfoque moderno para crear platos llenos de
                identidad.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="p-4 bg-white shadow rounded">
              <h2 className="h5 mb-3">Visítanos</h2>
              <p>
                Descubre los sabores de Colombia en un ambiente cálido y
                acogedor. ¡Te esperamos con los mejores platos de nuestra
                tierra!
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-4">
          <a href="#menu" className="btn btn-primary btn-lg">
            Explora Nuestro Menú
          </a>
        </div>
      </div>
    </section>
  );
};
