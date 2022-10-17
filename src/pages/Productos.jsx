import React from 'react';
import ContainerProducto from "../containers/containerProducto/ContainerProducto"
import ProductImg from '../assets/producto.jpg'
import {FaHeart,FaHome,FaBars,FaTimes,FaBloggerB,FaPenFancy,FaCss3} from "react-icons/fa"


import { ContainerPostAll, TitlePostAll, PostAll, DescPostAll, ContainerSubMenu, ContainerItem, LinksSubMenu } from "../style/Article.element.js"

const imgBk = {
  position : "absolute",
  width : "100%",
  height : "120vh",
  opacity : "0.2",
}


function Productos() {
  return (
    <>
        <PostAll>
          <img style = {imgBk} src={ProductImg} alt="" />
          <TitlePostAll>PRODUCTOS</TitlePostAll>
          <DescPostAll>Encuentra productos y servicio tecnologico, aprte de muchos relagos de conocimiento</DescPostAll>
          <ContainerSubMenu>
            <ContainerItem>
              <div>
                <FaHeart/> <span>Productos Fisicos tecnologicos</span>
              </div>
              <div>
                <LinksSubMenu href=""> links</LinksSubMenu>
              </div>
            </ContainerItem>
            <ContainerItem>
              <div>
                <FaHeart/> <span>Servicio Digital tecnologicos</span>
              </div>
              <div>
                <LinksSubMenu href=""> links</LinksSubMenu>
              </div>
            </ContainerItem>
          </ContainerSubMenu>
        </PostAll>
        <ContainerPostAll>
          <ContainerProducto/>
        </ContainerPostAll>
    </>
  )
}

export default Productos