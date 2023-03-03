import React from 'react'
import HabilidadesTech from '../../components/habilidadesTech/HabilidadesTech'
import { ContainerAbilityPasion, ContainerInfoPasion, ContainerTech, DescPasion, TitlePasion,  } from './ContainerPasionTech.element'
import { TextProyectOculto } from '../../components/habilidadesTech/HabilidadesTech.element'

function ContainerPasionTech() {
  return (
    <>
      <ContainerTech>
          <TextProyectOculto trans>Pasion</TextProyectOculto>
          <ContainerInfoPasion>
              <TitlePasion>Habilidades Tecnicas</TitlePasion>
              <DescPasion>
                Me encanta la tecnologia, y esa experiencia de tener la posibilidad de tener como un super poder para poder crear lo que imaginemos 
              </DescPasion>
              <DescPasion>
                He estado estudiando lo que me apaciona ya hace 4 años depues que termine mis estudios escolares, donde mis aprendizaje se han inclinado al mundo Tech, he realizado proyectos personales y de otras Empresas donde he podido fortalezer mis habilidades 
              </DescPasion>
          </ContainerInfoPasion>

          <ContainerAbilityPasion>
            <HabilidadesTech col={"#04daa4"} learning ={"90%"} titleContent="JavaScript"/>
            <HabilidadesTech col={"#04daa4"} learning ={"75%"} titleContent="TypeScript"/>
            <HabilidadesTech col={"#04daa4"} learning ={"85%"} titleContent="React"/>
            <HabilidadesTech col={"#04daa4"} learning ={"95%"} titleContent="Html y Css"/>
            <HabilidadesTech col={"#04daa4"} learning ={"65%"} titleContent="Git y GitHub"/>
            <HabilidadesTech col={"#04daa4"} learning ={"70%"} titleContent="WebPack"/>
            <HabilidadesTech col={"#04daa4"} learning ={"68%"} titleContent="NextJs"/>
          </ContainerAbilityPasion>

          <ContainerInfoPasion>
              <TitlePasion>Habilidades Complementarias</TitlePasion>
              <DescPasion>
              Todos lo que fundamenta al diseño grafico, produccion audiovisual y marketing digital 
              </DescPasion>
          </ContainerInfoPasion>

          <ContainerAbilityPasion>
            <HabilidadesTech col={"#04daa4"} learning ={"90%"} titleContent="Photoshop"/>
            <HabilidadesTech col={"#04daa4"} learning ={"80%"} titleContent="Illustrator"/>
            <HabilidadesTech col={"#04daa4"} learning ={"70%"} titleContent="Adobe Effect"/>
            <HabilidadesTech col={"#04daa4"} learning ={"80%"} titleContent="Adobe Premier"/>
            <HabilidadesTech col={"#04daa4"} learning ={"75%"} titleContent="Publisista Digital"/>
            <HabilidadesTech col={"#04daa4"} learning ={"60%"} titleContent="Marketing digital"/>
            <HabilidadesTech col={"#04daa4"} learning ={"75%"} titleContent="Obs y Vmix Audiovisual"/>
            <HabilidadesTech col={"#04daa4"} learning ={"75%"} titleContent="Fotografo"/>
          </ContainerAbilityPasion>
      </ContainerTech>
    </>
  )
}

export default ContainerPasionTech