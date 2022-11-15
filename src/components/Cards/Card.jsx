import React from 'react'
import imgCard from '../../assets/Card Servicio.png'
import { Cards, CardsInfo, CardTitle, ImgBg } from './style'


function Card() {
  return (
    <Cards>
        <ImgBg src={imgCard} alt="img-card" />
        <CardsInfo>
          <CardTitle>DISEÑO WEB</CardTitle>
          <p>Creamos un sitio web personalizado y adactado a tus necesidades con funciones, interacion con los usuarios, animaciones, y mucho mas ¡DESCUBRELO AQUI!</p>
        </CardsInfo>
    </Cards>
  )
}

export default Card