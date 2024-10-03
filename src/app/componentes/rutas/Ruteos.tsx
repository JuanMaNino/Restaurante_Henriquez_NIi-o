import{Route, Routes} from "react-router-dom"
import { Inicio } from "../contenedor/Inicio"
import { MenuCrear } from "../menu/MenuCrear"
import { MenuListar } from "../menu/MenuListar"
import { MenuActualizar } from "../menu/MenuActuallizar"
import { MenuAdmin } from "../menu/MenuAdmin"
import { Acerca } from "../otros/Acerca"
import { NoEncontrado } from "../contenedor/NoEncontrado"

export const Ruteo= ()=>{
    return(
        <Routes>
            <Route path="/" element={<Inicio/>}/>

            <Route path="/mencre" element={<MenuCrear/>}/>
            <Route path="/menlis" element={<MenuListar/>}/>
            <Route path="/menadmin" element={<MenuAdmin/>}/>
            <Route path="/menuactu/:codigo" element={<MenuActualizar/>}/>

            <Route path="/menuacer" element={<Acerca/>}/>

            <Route path="*" element={<NoEncontrado/>}/>

        </Routes>
    )
}