import React from "react";

function CardDetails({ setIsOpen, value }) {
  const valueArr = Object.entries(value);

  const details = valueArr.slice(2, valueArr.length);

  return (
    <div className="background">
      <div className="glassmorphism details_container">
        <button
          className="close_button"
          onClick={() => setIsOpen(false)}
          type="button"
        >
          <img src="close.svg" alt="back" width={30} height={30} />
        </button>

        <div className="text_container">
          <h2 className="container_header">
            {value.manufacturer} {value.name}
          </h2>

          <div className="lines">
            {details.map(([key, value]) => (
              <div className="line" key={key}>
                <h4 className="key">{key.split("_").join(" ")}</h4>
                <p className="value">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDetails;
