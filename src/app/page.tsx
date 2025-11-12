"use client";

import Details from "./components/details";
import Content from "./components/content";

export default function Home() {


  function myFunction() {
    var popup = document.getElementById("myPopup");
    // @ts-ignore
    popup.classList.toggle("show");
  }

  return (
    <div>

      <div className="font-sans flex flex-row max-md:flex-col relative justify-items-center min-h-screen min-xl:ml-20 min-xl:mr-20 pl-8 pr-8 gap-16 max-md:pl-0 max-md:pr-0 ">

        <div className="border-r-2 overflow-y-auto min-lg:w-[20%] border-gray-300 min-md:h-screen max-md:border-r-0 max-md:border-b-2 max-md:w-full max-md:h-fit pb-4 max-md:flex max-md:flex-row max-md:justify-around">

          <Details />
        </div>


        <div className=" md:w-[80%] w-full md:h-screen md:overflow-y-auto">

          <Content />
        </div>


        <div className="popup !fixed !right-18 !bottom-4" onClick={() => myFunction()}>
          <img className="w-10" src="/info.svg" alt="" title="When changing tags from posts, the ones currently selected will be reset." />
          <span className="popuptext " id="myPopup">When changing tags from posts, or the other way around, the ones currently selected will be reset.</span>
        </div>

      </div>



    </div>
  );
}
