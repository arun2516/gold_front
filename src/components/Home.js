import React from 'react'
import {useEffect,useState} from "react"
import axios from 'axios'
import Imageslider from './Imageslider'
import Navbar from './Navbar'
import { Footercontainer } from './Footer/Footercontainer'
import Infohome from './Infohome'




function Home() {
    const[response,setresponse]=useState([]);

    useEffect(async() => {
        var response = await axios.get("https://goldling.herokuapp.com/all/goldata");
        setresponse(response.data)
    }, [])

    
    return (
        <div>
            <Navbar/>
            <Imageslider/>
            <Infohome response={response}/>
            <Footercontainer/>
            
           
            
        </div>
    )
}

export default Home


