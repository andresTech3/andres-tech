import React,{useState} from 'react'
import {TextProyectOculto, ContainerNewProyect, TextProyect, DescProyect} from "../../containers/containerProyect/ContainerProyecto.element"
import Button from '../Button/Button';
import CardHome from './CardHome.jsx'
import ModalCard from './ModalCard'


function cards() {

  const [modalCard, setModalCard] = useState(false);

  const handleModal = () =>{
    setModalCard(!modalCard)
  }

  return (
    <>
        <ContainerNewProyect>
            <TextProyectOculto>Servicios</TextProyectOculto>
            <TextProyect>Servicios</TextProyect>
            <DescProyect>Descubre todos los servicios que ofrece AndresTech</DescProyect>
        </ContainerNewProyect>
        <CardHome handleModal = {handleModal}/>
        {modalCard && <ModalCard handleModal= {handleModal}/>}
    </>
  )
}

export default cards
