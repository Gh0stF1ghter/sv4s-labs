import React from "react";
import CardList from "../components/CardList";

import {useState, useEffect} from 'react'
import axios from 'axios'

function Entrance() {

  const [entrance, setEntrance] = useState([])

  useEffect(() => {
    const fetchCameras = async () => {
      const response = await axios.get('http://localhost:3001/entranceSec')
  
      setEntrance(response.data.entranceSec)
    }
  
    fetchCameras()
  }, [])

  return (
    <section className="flex-col w-full max-w-full flex-start">
      <h1 className="text-left head_text">
        <span className="blue_gradient">Entrance security</span> in stock
      </h1>

      <CardList list={entrance} />
    </section>
  );
}

export default Entrance;
