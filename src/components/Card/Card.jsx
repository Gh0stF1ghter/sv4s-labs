import React, { useState } from "react";
import CardDetails from "../CardDetails/CardDetails";

import Divider from "@mui/material/Divider";

function Card({ value }) {
  const [openDetes, setOpenDetes] = useState(false);
  const name = value.name;
  const manufacturer = value.manufacturer;
  return (
    <>
      <div className="p-4 glassmorphism" onClick={() => setOpenDetes(true)}>
        <p className="max-w-md text-left desc">{name}</p>
        <Divider orientation="horizontal" />
        <p className="max-w-md text-left desc">{manufacturer}</p>
      </div>
      {openDetes && <CardDetails value={value} setIsOpen={setOpenDetes} />}
    </>
  );
}

export default Card;
