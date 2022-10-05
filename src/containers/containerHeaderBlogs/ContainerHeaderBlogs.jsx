import React from 'react';
import { Link } from "react-router-dom"
import { ContainerBlogsItems, ContainerItemsNewBlogs, TextProyectBlogs, LinkAllBlogs } from './ContainerHeaderBlogs.element'
import NewBlogsHome from "../../components/newBlogs/NewBlogsHome"
import useGetNewBlogs from '../../hook/useGetNewBlogs';

function ContainerHeaderBlogs() {
  const {
    dataBlogs
  } = useGetNewBlogs();

  return (
    <>
        <ContainerBlogsItems>
          <TextProyectBlogs>New Blogs </TextProyectBlogs>
          <ContainerItemsNewBlogs>
            <NewBlogsHome
              blogsNew = {dataBlogs}
            />
          </ContainerItemsNewBlogs>
          <LinkAllBlogs><Link to="/Blogs" style={{color : "#08fdd8", textDecoration : "none"}}> Todos los Blogs... </Link></LinkAllBlogs>
          
        </ContainerBlogsItems>
    </>
  )
}

export default ContainerHeaderBlogs