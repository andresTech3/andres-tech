import React from 'react';
import NewDiseño from "../../components/newDiseño/NewDiseño"
import { ContainerPostAll, HrTitlePost, TitlePostAll } from "./Article.element.js"

function Diseños() {
  return (
    <>
      <TitlePostAll>DISEÑOS WEB</TitlePostAll>
        <HrTitlePost/>
        <ContainerPostAll>
          <NewDiseño/>
        </ContainerPostAll>
    </>
  )
}

export default Diseños