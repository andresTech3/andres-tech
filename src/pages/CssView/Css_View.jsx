import React from 'react'
import CreativeCss from '../../components/creativeCss/CreativeCss'

import {DescTitle, ImgBg, TitleGreat, WagonHeader} from './Css_View.element'

function CssView() {
  return (
    <>
        <WagonHeader>
            <ImgBg src="https://www.wallpaperuse.com/wallp/64-649276_m.jpg" alt="" />
            <TitleGreat Size = {'5em'}>Script and Css</TitleGreat>
            <DescTitle>Encuentra programacion funcional, retos de codigos y estilos css</DescTitle>
        </WagonHeader>

        <CreativeCss
        titleStyles = "background_estilos"
        linkCss = '/'
        sizeImg= '200%'
        bgUrl = 'https://geekland.eu/wp-content/uploads/2020/08/obtener-el-codigo-fuente-programas-linux.jpg'
        />  
    </>
  )
}

export default CssView