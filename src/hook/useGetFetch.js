// import axios from 'axios'
import {useEffect,useState} from 'react';

const useGetFetch = (API,req) =>{
    const [post, setPost] = useState([]);

    const dataApi= async ()=>{
        try {
            const dataBD = await fetch(API);
            const jsonData = await dataBD.json()
            const concatData = await jsonData[req]
            const apiData = await concatData;
            setPost(apiData)
        } catch (error) {
            console.log("no hubo conexion", error);
        }
    }

    useEffect(()=>{
        dataApi()
    },[]);

    return post;

}

const createUsers = async (API,userCreate)=>{
    
    try {
        const config = {
            method : 'POST',
            headers : {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json',
            },
            body : JSON.stringify(userCreate),
            mode : 'no-cors'
        }
        console.log(userCreate, "aqui esta los datos")
        const users = await fetch(API)
        const resp = await users.json()
        console.log(resp)

    } catch (error) {
        console.log(error)
    }
    
}

export { useGetFetch , createUsers }