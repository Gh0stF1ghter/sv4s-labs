import React, { useState } from "react";
import CardDetails from "../CardDetails/CardDetails";

function Card({ value }) {
  const [openDetes, setOpenDetes] = useState(false);
  const name = value.name;
  const manufacturer = value.manufacturer;
  return (
    <>
      <div className="card glassmorphism" onClick={() => setOpenDetes(true)}>
        <p className="main_detes desc">{name}</p>
        <p className="main_detes desc">{manufacturer}</p>
      </div>
      {openDetes && <CardDetails value={value} setIsOpen={setOpenDetes} />}
    </>
  );
}

export default Card;
