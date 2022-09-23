import React from 'react'
import { ContainerFormInfo, DescForm, TitleForm } from './ContainerForm.element'
import Button from "../../components/Button/Button"

function ContainerCanal() {
  return (
    <>
        <ContainerFormInfo>
            <TitleForm>Únete a la Comunidad</TitleForm>
            <DescForm>Creemos una comunidad cada ves mas grande para aprender entre todos juntos</DescForm>
            {Button("https://t.me/+0COMv7ltNdtkNjhh", "Canal de Telegram")}
        </ContainerFormInfo>
    </>
  )
}

export default ContainerCanal