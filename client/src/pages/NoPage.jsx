import React from "react";

function NoPage() {
  return (
    <section className="flex-col w-full max-w-full flex-center">
      <h1 className="text-center  head_text">
        <span className="blue_gradient">Woops</span>
        <br /> It seems there is no page with this address
      </h1>
    </section>
  );
}

export default NoPage;
