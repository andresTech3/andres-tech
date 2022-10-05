import React from 'react'
import { Link } from "react-router-dom"

// import styled from "styled-components";

import "./styleButton.css"



function Button(linkBoton, textBoton) {
  return (
    <>
      <div style={{"--clr" : "#08fdd0" }}><Link className="linkButton" to = {linkBoton}><span>{textBoton}</span><i></i></Link></div>
    </>
  )
}

export default Button