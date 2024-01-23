import React from "react";
import CardList from "../components/CardList";

import {useState, useEffect} from 'react'
import axios from 'axios'


function Doors() {
  const [doors, setDoors] = useState([])

  useEffect(() => {
    const fetchCameras = async () => {
      const response = await axios.get('http://localhost:3001/doorSec')
  
      setDoors(response.data.doorSec)
    }
  
    fetchCameras()
  }, [])
  
  return (
    <section className="flex-col w-full max-w-full flex-start">
      <h1 className="text-left head_text">
        <span className="blue_gradient">Door locks</span> in stock
      </h1>
      <CardList list={doors}/>
    </section>
  );
}

export default Doors;
