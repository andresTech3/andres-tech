import React from 'react'
import {ContainerAllProduct} from "./ContainerProductos.element"
import NewProduct from "../../components/newProduct/NewProduct"
function ContainerProducto() {
  return (
    <>
        <ContainerAllProduct>
            <NewProduct/>
        </ContainerAllProduct>
    </>
  )
}

export default ContainerProducto