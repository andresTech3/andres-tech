import React from 'react'
import {Link} from "react-router-dom"

import { ContainerInfoError, ContainerError, ContainerImgError, TextError, ImgError, LInkError } from "./Error404.element"

import useDriver from '../../hook/useDriver'

function Error404() {
  return (
    <>
      <ContainerError>
        <ContainerInfoError>
          <TextError>OOPS!</TextError>
          <h2>Error 404</h2>
          <Link style={{textDecoration : "none"}} to = "/"><LInkError href="/"> Volver al Inicio</LInkError></Link>
        </ContainerInfoError>
        <ContainerImgError>
          <ImgError src={useDriver('1cTSGYGcf49HlFBaAu8lZKvsgXrgOqA16')}/>
        </ContainerImgError>
      </ContainerError>
    </>
  )
}

export default Error404