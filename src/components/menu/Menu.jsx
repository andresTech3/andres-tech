import React,{useState} from 'react'
import './crzTech.css'
//import react-icons
import {FaHeart,FaHome,FaBars,FaTimes,FaBloggerB,FaPenFancy,FaCss3} from "react-icons/fa"
import {MdOutlineArticle,MdProductionQuantityLimits} from "react-icons/md"


//import styled
import { NavabarContainer, NavbarWrapper,IconLogo,MenuUl, MenuItem,MenuItemLink, IconLogoMobile,LinkUrl} from './Menu.element'


function Menu() {

  const [modalMovil, setModalMovil] = useState(false)

  const handleModal = () =>{
    setModalMovil(!modalMovil)
  }

  return (
    <>
          <NavabarContainer>
              <NavbarWrapper>
              <LinkUrl href="/andres-tech/">
                <IconLogo>
                    <FaHeart className="crz-tech"/> AndresTech
                </IconLogo>
              </LinkUrl>
                <IconLogoMobile onClick={handleModal} >
                  {
                    modalMovil ?  <FaTimes/> : <FaBars/>
                  }
                </IconLogoMobile>

                <MenuUl modal={modalMovil}>
                  <MenuItem onClick={handleModal}>
                    <MenuItemLink href="/andres-tech/about"><FaHome/>Acerca</MenuItemLink>
                  </MenuItem>
                  <MenuItem onClick={handleModal}>
                    <MenuItemLink href="/andres-tech/proyect" ><MdOutlineArticle/>Proyectos</MenuItemLink>
                  </MenuItem>
                  <MenuItem onClick={handleModal}>
                    <MenuItemLink href="/andres-tech/Blogs" ><FaBloggerB/>Blogs</MenuItemLink>
                  </MenuItem>
                  <MenuItem onClick={handleModal}>
                    <MenuItemLink href="/andres-tech/Dis" ><FaPenFancy/>Diseño</MenuItemLink>
                  </MenuItem>
                  <MenuItem onClick={handleModal}>
                    <MenuItemLink href="/andres-tech/CssView" ><FaCss3/>Css Animations</MenuItemLink>
                  </MenuItem>
                  <MenuItem onClick={handleModal}>
                    <MenuItemLink href="/andres-tech/Productos" ><MdProductionQuantityLimits/>Productos</MenuItemLink>
                  </MenuItem>
                  
                </MenuUl>
              </NavbarWrapper>
            </NavabarContainer>
    </>
  )
}

export default Menu