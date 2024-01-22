import React from "react";
import CardList from "../components/CardList";
import cameras from "../constants/cameras.json";


export default function Cameras() {
  return (
    <section className="flex-col w-full max-w-full flex-start">
      <h1 className="text-left head_text">
        <span className="blue_gradient">Cameras</span> in stock
      </h1>
      <CardList list={cameras} />
    </section>
  );
}
