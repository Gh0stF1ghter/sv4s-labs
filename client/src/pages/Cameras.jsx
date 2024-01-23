import React, { useEffect, useState } from "react";
import CardList from "../components/CardList";
import axios from 'axios'


export default function Cameras() {
const [cameras, setCameras] = useState([])

useEffect(() => {
  const fetchCameras = async () => {
    const response = await axios.get('http://localhost:3001/cameras')
    setCameras(response.data.cameras)
  }

  fetchCameras()
}, [])

  return (
    <section className="flex-col w-full max-w-full flex-start">
      <h1 className="text-left head_text">
        <span className="blue_gradient">Cameras</span> in stock
      </h1>
      <CardList list={cameras} />
    </section>
  );
}
