import React,{useState} from 'react'
import {createUsers} from '../../hook/useGetFetch'

function FormUsers() {

  const API_USERS = 'https://restapi-andrestech-production.up.railway.app/api/users';

  const [users,setUsers] = useState('');
  const [email,setEmail] = useState('');


  const handleSubmit = (e) =>{
      e.preventDefault();
      createUsers(API_USERS, {
        name : users ,
        email : email
      })
  }

  const handleOnchange = (e) =>{
    const {name, value} = e.target
    if(name === 'users') {setUsers(value)}
    if(name === 'email') {setEmail(value)}
  }

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" name="users" onChange={handleOnchange}/>
        <input type="email" name="email" id="" onChange={handleOnchange} />
        <input type="submit" value="Enviar" />
    </form>
  )
}

export default FormUsers