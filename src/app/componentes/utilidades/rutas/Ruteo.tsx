import { Route, Routes } from "react-router-dom";

import { Inicio } from "../../contenedor/Inicio";
import { MenuCrear } from "../../menu/MenuCrear";
import { MenuListar } from "../../menu/MenuListar";
import { MenuAdmin } from "../../menu/MenuAdmin";
import { MenuActualizar } from "../../menu/MenuActuallizar";
import { Acerca } from "../../otros/Acerca";
import { NoEncontrado } from "../../contenedor/NoEncontrado";

export const Ruteo = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />

      
      <Route path="/mencre" element={<MenuCrear />} />
      <Route path="/menlis" element={<MenuListar />} />
      <Route path="/menadmin" element={<MenuAdmin />} />

      <Route path="/menactu/:codigo" element={<MenuActualizar />} />

      <Route path="/menacer" element={<Acerca />} />

      <Route path="*" element={<NoEncontrado />} />
      
    </Routes>
  );
};
