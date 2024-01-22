import React from "react";
import CardList from "../components/CardList";
import json from '../constants/doorSec.json'


function Doors() {

  return (
    <section className="flex-col w-full max-w-full flex-start">
      <h1 className="text-left head_text">
        <span className="blue_gradient">Door locks</span> in stock
      </h1>
      <CardList list={json}/>
    </section>
  );
}

export default Doors;
