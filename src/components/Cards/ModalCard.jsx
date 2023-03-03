import React from 'react'
import  ReactDOM  from 'react-dom'
import { BsArrowUpLeftSquareFill } from 'react-icons/bs';
import Card from './Card.jsx'
import styled from 'styled-components'

const ModalCards = styled.div`
    width:100%;
    height:650vh;
    padding:20px;
    background:rgba(2,20,100,0.8);             
    position:absolute;
    display:flex;
    flex-direction:column;
    z-index:999;
`

const SubmitMas = styled.button`
  width:2.01em;
  height:2.01em;
  text-align:center;
  background:transparent;
  border:none;
  color:#fff;
  margin:70em 0px 1em 0px;
  position:relative;
  font-size:2em;
  z-index:99999;
  &:hover{
    color:#08fdd0;
  }
`



function ModalCard({handleModal}) {
  return( ReactDOM.createPortal(
    <ModalCards>
        <SubmitMas onClick={()=>handleModal()} type = 'submit'><BsArrowUpLeftSquareFill size= '2em'/></SubmitMas>
        <Card 
          tall={'50vh'} 
          Width = {'100%'} 
          HeightHover = {'55%'}
          titleCard = {'Creamos tu sitio web personalizado'}
          desCard = {'Ten implementaciones modernas y unicas en tu sitio web agradables a la vista de los usuarios y transmitiendole la informacion concreta'}
        />

        <Card 
              tall={'50vh'} 
              Width = {'100%'} 
              HeightHover = {'55%'}
              titleCard = {'tu funnel de tu producto ideal'}
              desCard = {'ten una pagina donde puedas filtrar a tus potenciales clientes, llevando tu producto a la persona ideal'}
          />


        <Card 
              tall={'50vh'} 
              Width = {'100%'} 
              HeightHover = {'55%'}
              titleCard = {'Restructuracion Web'}
              desCard = {'Mantenimiento a las funciones de tu sitio web, mejorar visualizacion de los elementos y mejor distribuccion  '}
          />
        
    </ModalCards>, document.getElementById('card-modal'))
  )
}

export default ModalCard