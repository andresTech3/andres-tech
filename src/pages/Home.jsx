import React from 'react'
import Header from '../containers/header/Header';
import ContainerProyect from '../containers/containerProyect/ContainerProyect'
import ContainerPasionTech from '../containers/containerPasionTech/ContainerPasionTech';
import ContainerHeaderBlogs from '../containers/containerHeaderBlogs/ContainerHeaderBlogs';
import ContainerCanal from '../containers/containerCanal/ContainerCanal';
import Cards from '../components/Cards/Cards';
// import FormUsers from '../components/FormUsers/FormUsers.jsx'
// import ContainerPost from '../containers/ContainerPost';


function Home() {
  return (
    <div>
        <Header/>
        {/* <ContainerPost/> */}
        <ContainerProyect/>
        <ContainerPasionTech/>
        <ContainerHeaderBlogs/>
        <Cards/>
        {/* <FormUsers/> */}
        <ContainerCanal/>
    </div>
  )
}

export default Home