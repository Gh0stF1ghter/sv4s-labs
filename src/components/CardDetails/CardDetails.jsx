import React from "react";

function CardDetails({ setIsOpen, value }) {

  const valueArr = Object.entries(value)

  const details = valueArr.slice(2, valueArr.length)
  
  return (
    <div className="fixed top-0 left-0 z-40 flex items-center justify-center w-full h-full backdrop-blur-md">
      <div className="glassmorphism w-[50vw]">
        <button
          className="absolute z-10 p-2 rounded-full top-2 right-2 w-fit"
          onClick={() => setIsOpen(false)}
          type="button"
        >
          <img src="close.svg" alt="back" width={30} height={30} />
        </button>

        <div className="flex flex-col flex-1 gap-2 ">
          <h2 className="text-xl font-semibold capitalize ">
            {value.manufacturer} {value.name}
          </h2>

          <div className="flex flex-wrap gap-4 mt-3 ">
            {details.map(([key, value]) => (
              
              <div
                className="flex justify-between w-full gap-5 text-right "
                key={key}
              >
                <h4 className="capitalize text-grey">
                  {key.split("_").join(" ")}
                </h4>
                <p className="font-semibold text-black-100">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDetails;
