import React from 'react'
import {TextProyectOculto, ContainerNewProyect, TextProyect, DescProyect} from "../../containers/containerProyect/ContainerProyecto.element"
import Card from './Card'


function cards() {
  return (
    <>
        <ContainerNewProyect>
            <TextProyectOculto>Servicios</TextProyectOculto>
            <TextProyect>Servicios</TextProyect>
            <DescProyect>Descubre todos los servicios que ofrece AndresTech</DescProyect>
        </ContainerNewProyect>
        <Card/>
    </>
  )
}

export default cards
