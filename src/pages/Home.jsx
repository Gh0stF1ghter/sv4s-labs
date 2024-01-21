import React from "react";

function Home() {
  return (
    <section className="flex-col w-full max-w-full flex-center">
      <h1 className="text-center head_text">
        Do not <span className="orange_gradient">hide</span> your business
        <br /> <span className="blue_gradient">Secure</span> It
      </h1>
      <div className="mt-3 ">
        <img src="./logo.svg" alt="logo" width={300} />
      </div>
    </section>
  );
}

export default Home;
