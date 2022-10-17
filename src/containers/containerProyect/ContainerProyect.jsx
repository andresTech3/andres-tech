import React from 'react'
import { Link} from "react-router-dom"
import NewProyectHome from '../../components/newProyect/NewProyectHome'
import {ContainerNewProyect, TextProyect, DescProyect, LinkProyectText, TextProyectOculto} from "./ContainerProyecto.element"
import Button from '../../components/Button/Button'


function ContainerProyect() {
  return (
    <>
        <ContainerNewProyect>
            <TextProyectOculto>Proyectos</TextProyectOculto>
            <TextProyect>My Proyectos</TextProyect>
            <DescProyect>Galeria de algunos de mis proyectos de desarrollo web , Diseño web o Graficos, Fotografias entre muchos mas si quieres conocer mas de estos proyectos  <LinkProyectText href='/proyect'>¡Haz click aqui!</LinkProyectText> </DescProyect>
            {Button("/proyect", "Todos los Proyectos!")}
            <NewProyectHome/>
        </ContainerNewProyect>
        
    </>
  )
}

export default ContainerProyect