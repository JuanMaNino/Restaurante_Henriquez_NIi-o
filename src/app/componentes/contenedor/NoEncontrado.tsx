export const NoEncontrado = () => {
  return (
    <section id="franquicias" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Sé Parte de Nuestra Franquicia</h2>
        <p className="text-center lead mb-5">
          ¡Únete a nuestra franquicia y sé parte de una experiencia gastronómica
          única! En nuestro restaurante, no solo ofrecemos deliciosos platillos
          elaborados con los mejores ingredientes, sino también la oportunidad
          de emprender con una marca sólida y en crecimiento. Al formar parte de
          nuestra familia, recibirás todo el apoyo necesario para hacer de tu
          negocio un éxito: desde capacitación especializada hasta estrategias
          de marketing que atraerán a los clientes. Si estás buscando una
          oportunidad de inversión rentable en el mundo de la comida, no dejes
          pasar esta oportunidad de unirte a nosotros. ¡Te esperamos con los
          brazos abiertos para hacer crecer juntos este sabroso proyecto!
        </p>

        <div className="row align-items-center mb-5">
          <div className="col-lg-6">
            <h3>¿Por Qué Elegirnos?</h3>
            <p>
              ¿Por qué elegirnos? Porque ofrecemos mucho más que solo
              comida: brindamos una experiencia única que combina sabor, calidad
              y un servicio excepcional. Nuestros platillos están elaborados con
              ingredientes frescos y seleccionados, lo que asegura que cada
              bocado sea delicioso y memorable. Además, nos destacamos por
              nuestra **atención personalizada**, creando un ambiente acogedor y
              familiar que hace que cada cliente se sienta como en casa. Nos
              importa tu tiempo y comodidad, por eso ofrecemos opciones rápidas
              para llevar y delivery, sin sacrificar la calidad. Ya sea que
              busques una comida reconfortante, un momento especial con amigos o
              una opción saludable, tenemos algo para todos los gustos.Porque
              en cada visita, no solo estás disfrutando de una comida, sino
              también de un compromiso con tu satisfacción. ¡Ven y descubre
              por qué somos la elección favorita de nuestros clientes!
            </p>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <i className="bi bi-check-circle text-success me-2"></i>
                Representamos la riqueza culinaria de todas las regiones de
                Colombia.
              </li>
              <li className="list-group-item">
                <i className="bi bi-check-circle text-success me-2"></i>
                Contamos con un concepto único que mezcla tradición, innovación
                y autenticidad.
              </li>
              <li className="list-group-item">
                <i className="bi bi-check-circle text-success me-2"></i>
                Te ofrecemos una marca reconocida y una experiencia que conecta
                con el corazón de los comensales.
              </li>
              <li className="list-group-item">
                <i className="bi bi-check-circle text-success me-2"></i>
                Reconocimiento por ofrecer una experiencia gastronómica única y
                auténtica
              </li>
            </ul>
          </div>
          <div className="col-lg-6 text-center">
            <img
              src="chef.png"
              alt="Franquicia"
              className="img-fluid rounded shadow-lg"
            />
          </div>
        </div>

        <h3 className="text-center mb-4">Ventajas de Ser Parte</h3>
        <div className="row text-center">
          <div className="col-md-4">
            <div className="p-3">
              <i className="bi bi-briefcase-check display-4 text-primary mb-3"></i>
              <h5>Modelo Escalable</h5>
              <p>
                Nuestro modelo está diseñado para crecer contigo. Desde locales
                pequeños hasta establecimientos más grandes, adaptamos nuestras
                estrategias a tus objetivos y mercado, garantizando flexibilidad
                y rentabilidad.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-3">
              <i className="bi bi-person-check display-4 text-primary mb-3"></i>
              <h5>Soporte Integral</h5>
              <p>
                Te acompañamos en cada paso del camino: desde la selección del
                local y el diseño del espacio, hasta la capacitación del
                personal y la implementación operativa. Nuestro equipo está
                comprometido con tu éxito.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-3">
              <i className="bi bi-bar-chart-line display-4 text-primary mb-3"></i>
              <h5>Estrategias Efectivas</h5>
              <p>
                Contamos con estrategias de marketing y operación comprobadas,
                orientadas a maximizar el alcance y la rentabilidad de tu
                franquicia. Trabajamos contigo para crear campañas que atraigan
                y fidelicen a tus clientes.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-5">
          <h3>¿Listo para Comenzar?</h3>
          <p>
            Es el momento de emprender y ser parte de una marca que conecta
            tradición, sabor y éxito. Contáctanos y descubre cómo convertirte en
            nuestro próximo socio. ¡Demos juntos el primer paso hacia un futuro
            lleno de logros!
          </p>
          <a href="/contacto" className="btn btn-primary btn-lg">
            Contáctanos Ahora
          </a>
        </div>
      </div>
    </section>
  );
};
