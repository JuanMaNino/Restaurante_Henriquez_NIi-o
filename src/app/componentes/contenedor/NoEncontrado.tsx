import Franquicia from "./../../../assets/img/Franquicia.png"

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
          <div className="col-lg-6 text-start">
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
              para llevar y delivery, sin sacrificar la calidad. ¡Ven y descubre
              por qué somos la elección favorita de nuestros clientes!
            </p>
          </div>
          <div className="col-lg-6 text-center">
            <img
              src={Franquicia}
              alt="Franquicia"
              className="img-fluid rounded shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
