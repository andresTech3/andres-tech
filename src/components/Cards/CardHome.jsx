import React,{useState} from 'react'
import imgCard from '../../assets/Card Servicio.png'
import { ButtonCard, Cards, CardsInfo, CardTitle, ImgBg } from './style'


function CardHome({handleModal}) {

  const [opacity, setOpacity] = useState('0');

  return (
    <Cards onMouseMove={()=>setOpacity('1')} onMouseOut={()=>setOpacity('0')}>
        <ImgBg src={imgCard} alt="img-card" />
        <CardsInfo opacity={opacity}>
          <CardTitle>DISEÑO WEB</CardTitle>
          <p>Encuentra los servicios web para tu negocio</p>
          <ButtonCard type="submit" onClick={()=>handleModal()}>Servicios</ButtonCard>
        </CardsInfo>
    </Cards>
  )
}

export default CardHome