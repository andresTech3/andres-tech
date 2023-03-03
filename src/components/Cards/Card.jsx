import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import imgCard from '../../assets/Card Servicio.png'
import { A, ButtonCard, Cards, CardsInfo, CardTitle, ImgBg } from './style'


function Card({tall,Width,HeightHover, titleCard, desCard}) {

  const [opacity, setOpacity] = useState('0');

  return (
    <Cards Height={tall} Width={Width} onMouseMove={()=>setOpacity('1')} onMouseOut={()=>setOpacity('0')}>
        <ImgBg Height = {tall} HeightHover = {HeightHover} src={imgCard} alt="img-card" />
        <CardsInfo opacity={opacity}>
          <CardTitle>{titleCard}</CardTitle>
          <p>{desCard}</p>
          <ButtonCard type="submit"><A href="https://wa.link/hns8p7">Mas Info Aqui!!</A></ButtonCard> 
        </CardsInfo>
    </Cards>
  )
}

export default Card