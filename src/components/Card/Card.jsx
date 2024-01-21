import React, { useState } from "react";
import CardDetails from "../CardDetails/CardDetails";

function Card({ value }) {
  const [openDetes, setOpenDetes] = useState(false);
  const name = value.name;
  const manufacturer = value.manufacturer;
  return (
    <>
      <div className="p-4 glassmorphism" onClick={() => setOpenDetes(true)}>
        <p className="max-w-md text-left desc">{name}</p>
        <p className="max-w-md text-left desc">{manufacturer}</p>
      </div>
      {openDetes && <CardDetails value={value} setIsOpen={setOpenDetes} />}
    </>
  );
}

export default Card;
