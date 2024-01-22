import React, { useState } from "react";
import Card from "./Card/Card";

function CardList({ list }) {
  const values = list
  return (
    <div className="grid w-full grid-cols-1 gap-8 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 pt-14">
      {values?.map((value) => (
        <Card value={value} key={value.name}/>
      ))}
    </div>
  );
}

export default CardList;
