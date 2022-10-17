import React from 'react'
// import NewArticle from '../components/NewArticle'
import proyectImg from "../assets/proyectos.jpg"
import NewProyect from "../components/newProyect/NewProyect"

const imgBk = {
  position : "absolute",
  width : "100%",
  height : "100vh",
  opacity : "0.3",
  padding : "1em",
}

import { ContainerPostAll, DescPostAll, PostAll, TitlePostAll} from "../style/Article.element.js"

function Proyect() {
  return (
    <>
      <PostAll>
      <img style = {imgBk} src={proyectImg} alt="" />
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