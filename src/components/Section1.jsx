import React from "react";
import section1tree1 from "../assets/images/section1tree1.webp";
import section1tree2 from "../assets/images/section1tree2.webp";
import section1dino from "../assets/images/section1dino.webp";

function Section1() {
  return (
    <>
      <div className="bg-section1bg bg-center bg-cover bg-no-repeat min-h-[690px] sm:min-h-[763px] relative overflow-hidden">
        <div className="max-w-[623px] px-3 mx-auto pt-12 md:pt-[76px] relative z-[1]">
          <h2 className="text-center mb-6 sm:mb-[42px]">
            <span className="font-chewy font-normal text-[35px] sm:text-[64px] sm:leading-[83.63px] text-white">
              About{" "}
            </span>
            <span className="f-dino font-normal text-[40px] sm:text-[69.67px] sm:leading-[66.19px] drop-shadow-[0px_2.4px_#FFFFFF] sm:ml-[15px]">
              <span className="text-[#FBA11D]">D</span>
              <span className="text-[#23AAAC]">i</span>
              <span className="text-[#D45B07]">n</span>
              <span className="text-[#8EC627]">o</span>
              <span className="text-[#FCCA2B]">L</span>
              <span className="text-[#8F78D2]">F</span>
              <span className="text-[#8EC627]">G</span>
            </span>
          </h2>
          <p className="font-balsamiq font-normal text-xl sm:text-[24px] sm:leading-[28.8px] text-center text-white mb-[18px]">
            $DINO is a meme coin with very strong utility.
          </p>
          <p className="font-balsamiq font-normal text-xl sm:text-[24px] sm:leading-[28.8px] text-center text-white mb-[10px]">
            Biggest problem of meme coins is lack of utility and usecase,{" "}
            <span className="font-bold mr-1">
              <span className="text-[#8EC627]">$</span>
              <span className="text-[#FBA11D]">D</span>
              <span className="text-[#23AAAC]">I</span>
              <span className="text-[#D45B07]">N</span>
              <span className="text-[#FB5352]">O</span>
            </span>
            is going to fix it.
          </p>
          <p className="font-balsamiq font-normal text-xl sm:text-[24px] sm:leading-[28.8px] text-center text-white mb-[14px]">
            We want to bring a lot of usecases and utility to $DINO holders,
            just sit back and relax.
          </p>
          <p className="font-balsamiq font-normal text-xl sm:text-[24px] sm:leading-[28.8px] text-center text-white">
            In $DINO, we want to build a very strong community, that's why we
            are going to have a lot of games and crypto tips in our Telegram and
            Twitter.
          </p>
        </div>
        <img className="w-[250px] sm:w-[352px] sm:h-[446px] absolute top-[60px] right-[-90px] sm:right-[-125px]" src={section1tree1} alt="tree" />
        <img className="absolute w-[230px] sm:w-[297px] sm:h-[421px] top-[260px] left-[-102px]" src={section1tree2} alt="tree" />
        <img className="w-[120px] sm:w-[169px] sm:h-[205px] absolute right-0 bottom-0 min-[900px]:bottom-[27%]" src={section1dino} alt="dino cartoon" />
      </div>
    </>
  );
}

export default Section1;
