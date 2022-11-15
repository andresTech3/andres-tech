import React from 'react'
// import NewArticle from '../components/NewArticle'
import proyectImg from "../assets/proyectos.jpg"
import NewProyect from "../components/newProyect/NewProyect"


import { ContainerPostAll, DescPostAll, PostAll, TitlePostAll, ImgBk} from "../style/Article.element.js"

function Proyect() {
  return (
    <>
      <PostAll>
      <ImgBk  src={proyectImg} alt="" />
        <TitlePostAll>TODOS LOS <br/> PROYECTOS</TitlePostAll>
        <DescPostAll>Encuentra aqui todo los proyectos creados por AndresTech orientados al desarrollo web</DescPostAll>
      </PostAll>
        <ContainerPostAll>
          <NewProyect/>
        </ContainerPostAll>
    </>
  )
}

export default Proyect