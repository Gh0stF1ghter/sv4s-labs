import React from "react";
import entrance from "../constants/entranceSec.json";
import CardList from "../components/CardList/CardList";

function Entrance() {
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
