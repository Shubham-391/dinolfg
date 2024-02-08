import React, { useState } from "react";
import { Discordb, Instagramb, Twitterb } from "./Icons";
import aeroplane from "../assets/images/aeroplane.webp";

function Header() {
  const [open, setOpen] = useState(false);
  {
    open
      ? document.body.classList.add("overflow-hidden")
      : document.body.classList.remove("overflow-hidden");
  }
  return (
    <>
      <div className="min-h-screen min-[1200px]:min-h-[877px] min-[1441px]:min-h-screen bg-headerbg bg-no-repeat w-full bg-cover bg-center flex flex-col">
        {/* small screen navpage */}
        <ul
          className={`w-full h-full fixed flex min-[992px]:hidden justify-center items-center flex-col gap-10 z-[7] bg-[#C9F6FF] left-[-100%] duration-300 ${
            open == false ? "" : "left-[0%]"
          }`}
        >
          <li>
            <a
              className="font-chewy font-normal text-lg leading-[23.52px] text-black relative after:w-0 after:absolute after:left-[50%] after:bottom-0 after:duration-300 hover:after:w-full hover:after:left-0 after:h-[1px] after:bg-black"
              href=""
              onClick={() => setOpen(false)}
            >
              About
            </a>
          </li>
          <li>
            <a
              className="font-chewy font-normal text-lg leading-[23.52px] text-black relative after:w-0 after:absolute after:left-[50%] after:bottom-0 after:duration-300 hover:after:w-full hover:after:left-0 after:h-[1px] after:bg-black"
              href=""
              onClick={() => setOpen(false)}
            >
              Tokenomic
            </a>
          </li>
          <li>
            <a
              className="font-chewy font-normal text-lg leading-[23.52px] text-black relative after:w-0 after:absolute after:left-[50%] after:bottom-0 after:duration-300 hover:after:w-full hover:after:left-0 after:h-[1px] after:bg-black"
              href=""
              onClick={() => setOpen(false)}
            >
              Roadmap
            </a>
          </li>
          <li>
            <a
              className="font-chewy font-normal text-lg leading-[23.52px] text-black relative after:w-0 after:absolute after:left-[50%] after:bottom-0 after:duration-300 hover:after:w-full hover:after:left-0 after:h-[1px] after:bg-black"
              href=""
              onClick={() => setOpen(false)}
            >
              FAQ
            </a>
          </li>
          <li className="sm:hidden">
            <ul className="flex items-center">
              <li>
                <a
                  href="https://twitter.com/?lang=en"
                  target="_blank"
                  className="w-[37px] h-[37px] rounded-[50%] border border-solid border-black flex justify-center items-center duration-300 bg-transparent hover:bg-[rgba(0,0,0,0.2)]"
                >
                  <Twitterb />
                </a>
              </li>
              <li className="mx-2">
                <a
                  href="https://discord.com/"
                  target="_blank"
                  className="w-[37px] h-[37px] rounded-[50%] border border-solid border-black flex justify-center items-center duration-300 bg-transparent hover:bg-[rgba(0,0,0,0.2)]"
                >
                  <Discordb />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  className="w-[37px] h-[37px] rounded-[50%] border border-solid border-black flex justify-center items-center duration-300 bg-transparent hover:bg-[rgba(0,0,0,0.2)]"
                >
                  <Instagramb />
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a
              className="bg-buttonbg w-[138px] h-[54.6px] bg-cover bg-center bg-no-repeat flex justify-center items-center font-chewy font-normal text-lg leading-[23.52px] text-black px-[36px] pt-[11px] pb-[19px]"
              href=""
              onClick={() => setOpen(false)}
            >
              Join Now
            </a>
          </li>
        </ul>
        {/* navbar */}
        <nav className="max-w-[1164px] w-full px-3 mx-auto h-[95px] flex items-end">
          <div className="w-full h-[67px] border-b-[4px] border-solid border-black bg-white rounded-[61px] pl-6 pr-6 min-[992px]:pr-[7px] flex justify-between items-center sm:gap-x-24">
            <a href="">
              <div className="f-dino font-normal text-[30px] sm:text-[39.13px] sm:leading-[37.17px] drop-shadow-[0px_2px_#000000] z-10 relative">
                <span className="text-[rgba(251,161,29,1)]">D</span>
                <span className="text-[rgba(35,170,172,1)]">i</span>
                <span className="text-[rgba(212,91,7,1)]">n</span>
                <span className="text-[rgba(142,198,39,1)]">o</span>
                <span className="text-[rgba(252,202,43,1)]">L</span>
                <span className="text-[rgba(143,120,210,1)]">F</span>
                <span className="text-[rgba(142,198,39,1)]">G</span>
              </div>
            </a>
            <div className="max-w-[718px] w-full flex justify-end min-[992px]:justify-between items-center">
              <ul className="hidden min-[992px]:flex gap-7">
                <li>
                  <a
                    className="font-chewy font-normal text-lg leading-[23.52px] text-black relative after:w-0 after:absolute after:left-[50%] after:bottom-0 after:duration-300 hover:after:w-full hover:after:left-0 after:h-[1px] after:bg-black"
                    href=""
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    className="font-chewy font-normal text-lg leading-[23.52px] text-black relative after:w-0 after:absolute after:left-[50%] after:bottom-0 after:duration-300 hover:after:w-full hover:after:left-0 after:h-[1px] after:bg-black"
                    href=""
                  >
                    Tokenomic
                  </a>
                </li>
                <li>
                  <a
                    className="font-chewy font-normal text-lg leading-[23.52px] text-black relative after:w-0 after:absolute after:left-[50%] after:bottom-0 after:duration-300 hover:after:w-full hover:after:left-0 after:h-[1px] after:bg-black"
                    href=""
                  >
                    Roadmap
                  </a>
                </li>
                <li>
                  <a
                    className="font-chewy font-normal text-lg leading-[23.52px] text-black relative after:w-0 after:absolute after:left-[50%] after:bottom-0 after:duration-300 hover:after:w-full hover:after:left-0 after:h-[1px] after:bg-black"
                    href=""
                  >
                    FAQ
                  </a>
                </li>
              </ul>
              <ul className="items-center hidden sm:flex relative z-10">
                <li>
                  <a
                    href="https://twitter.com/?lang=en"
                    target="_blank"
                    className="w-[37px] h-[37px] rounded-[50%] border border-solid border-black flex justify-center items-center duration-300 bg-transparent hover:bg-[rgba(0,0,0,0.2)]"
                  >
                    <Twitterb />
                  </a>
                </li>
                <li className="mx-2">
                  <a
                    href="https://discord.com/"
                    target="_blank"
                    className="w-[37px] h-[37px] rounded-[50%] border border-solid border-black flex justify-center items-center duration-300 bg-transparent hover:bg-[rgba(0,0,0,0.2)]"
                  >
                    <Discordb />
                  </a>
                </li>
                <li className="mr-[13px]">
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    className="w-[37px] h-[37px] rounded-[50%] border border-solid border-black flex justify-center items-center duration-300 bg-transparent hover:bg-[rgba(0,0,0,0.2)]"
                  >
                    <Instagramb />
                  </a>
                </li>
                <li className="hidden min-[992px]:block">
                  <a
                    className="bg-buttonbg w-[138px] h-[54.6px] bg-cover bg-center bg-no-repeat flex justify-center items-center font-chewy font-normal text-lg leading-[23.52px] text-black px-[36px] pt-[11px] pb-[19px]"
                    href=""
                  >
                    Join Now
                  </a>
                </li>
              </ul>
              {/* open/close navbar button */}
              <div
                className={`flex w-[30px] min-[400px]:w-[35px] h-[25px] duration-300 flex-col min-[992px]:hidden items-center justify-between cursor-pointer relative z-10`}
                onClick={() => setOpen(!open)}
              >
                <span
                  className={`w-full h-[5px] duration-300 bg-[#FBA11D] rounded ${
                    open == false ? "" : "rotate-45 translate-y-[8px]"
                  }`}
                ></span>
                <span
                  className={`w-full h-[5px] duration-300 bg-[#FBA11D] rounded ${
                    open == false ? "" : "rotate-[135deg] translate-y-[-12px]"
                  }`}
                ></span>
                <span
                  className={`w-full h-[5px] duration-300 bg-[#FBA11D] rounded ${
                    open == false ? "" : "hidden"
                  }`}
                ></span>
              </div>
            </div>
          </div>
        </nav>
        {/* hero-section */}
        <div className="max-w-[1164px] px-3 mx-auto grow w-full flex flex-wrap">
          <div className="w-full min-[900px]:w-[50%] flex justify-center items-center min-[900px]:justify-start min-[900px]:items-start">
            <div className="max-w-[394px] max-h-[241px] w-full lg:h-full min-[900px]:mt-[175px] min-[900px]:ml-[46px] p-3 sm:p-0">
              <img
                className="w-full lg:h-full object-cover"
                src={aeroplane}
                alt="aeroplane"
              />
            </div>
          </div>
          <div className="w-full min-[900px]:w-[50%] flex justify-center items-center min-[900px]:justify-start min-[900px]:items-start">
            <div className="max-w-[398px] w-full flex flex-col items-center min-[900px]:ml-[10px] min-[900px]:mt-[83px]">
              <div className="f-dino font-normal text-[130px] min-[900px]:text-[175.64px] leading-[120px] min-[900px]:leading-[166.85px] drop-shadow-[0px_6px_#000000]">
                <span className="text-[rgba(251,161,29,1)]">D</span>
                <span className="text-[rgba(35,170,172,1)]">I</span>
                <span className="text-[rgba(212,91,7,1)]">N</span>
                <span className="text-[rgba(142,198,39,1)]">O</span>
              </div>
              <div className="f-dino font-normal text-[130px] min-[900px]:text-[175.64px] leading-[120px] min-[900px]:leading-[166.85px] drop-shadow-[0px_6px_#000000]">
                <span className="text-[rgba(142,198,39,1)]">L</span>
                <span className="text-[rgba(252,202,43,1)]">F</span>
                <span className="text-[rgba(143,120,210,1)]">G</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
