import React from 'react'
import { ContainerFooter, TextFooter, InfoFooter, ImgBgTextFooter,InfoBg, FooterIcons, IconsItem } from "./Footer.element"
import imgRed from '../../assets/red.jpg'
import useDriver from '../../hook/useDriver';


const dateActual = () =>{
    const dateReturn = new Date()
    return dateReturn.getFullYear()
}

function Footer() {
  return (
    <>
        
        <ContainerFooter>
          <TextFooter>
            <ImgBgTextFooter src={imgRed} alt="imgRed" />
            <InfoBg>
              <h2>Andres_Tech</h2>
              <p>Avientate a nuevas experiencias</p>
              {/* <input type="email" name="" id="" /> */}
              <h3>Andres Narvaez @AndresTech . Todos los derechos reservados © {dateActual()}</h3>
            </InfoBg>

          </TextFooter>
          <InfoFooter>
            <h1>Contactos</h1>
            <p>andresnarvaez8820@gmail.com</p>
            <p>314-688-09-54</p>
            <FooterIcons>
              <IconsItem src={useDriver('1KsQyKubA76_1H48TAelc33hNRZL_535b')} alt="red-instagram" />
              <IconsItem src={useDriver('1LDbVuKu3kpgL6bG44qbelWonJyeKRVKa')} alt = "red-linkedin"/>
              <IconsItem src={useDriver('1LWFQMF6nyFNf2GIYLa_c68fyyHfn7LiD')} alt="red-youtube" />
            </FooterIcons>
          </InfoFooter>
          
        </ContainerFooter>
    </>
  )
}

export default Footer