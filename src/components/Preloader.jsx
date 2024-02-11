import React from 'react';
import section1dino from "../assets/images/webp/section1dino.webp";

function Preloader() {
    setTimeout(() => {
      document.getElementById("Preloader").classList.add("hidden");
      document.body.classList.remove("!overflow-hidden");
    }, 2000);
  return (
    <>
      <div
        id="Preloader"
        className="h-screen bg-[#C9F6FF] flex flex-col gap-4 justify-center items-center fixed top-0 left-0 w-full z-30 "
      >
        <img
          rel="preload"
          className="animate-bounce w-[169px]"
          src={section1dino}
          alt="dino cartoon"
        />
        <div className="loader w-[50px] h-[50px] relative border-[5px] border-solid border-[#555] border-t-[#f9f9f9] rounded-[50%] animate-spin"></div>
      </div>
    </>
  );
}

export default Preloader