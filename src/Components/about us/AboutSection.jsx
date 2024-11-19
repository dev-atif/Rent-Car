import React from "react";
import car from "../../../public/about1.jpg";
import Image from "next/image";
import man from "../../../public/aboutman.jpg";
const AboutSection = () => {
  return (
    <div>
      <div>
        <div className="xl:h-[80vh]  md:h-[60vh] h-[45vh] relative w-full  -z-10 ">
          <div className="bg-black/60  inset-0 absolute z-10 flex flex-col md:gap-4  items-center justify-center">
            <h1 className="text-white md:tracking-wider lg:text-5xl md:text-4xl text-2xl font-semibold">
              Curious about our story?
            </h1>
            <h1 className="text-white md:tracking-wider lg:text-5xl md:text-4xl text-2xl text-center font-semibold ">
              Dive in and discover what drives us!
            </h1>
          </div>
          <Image src={car} alt="car" fill className="object-cover " />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:gap-24 gap-10 my-10 max-w-7xl px-5 mx-auto">
          <div className="">
            <div className="mx-auto w-fit lg:w-full ">
              <h1 className="xl:text-5xl md:text-4xl text-3xl w-[22ch] font-semibold !leading-snug tracking-wider">
                THE BEST CAR RENTAL SERVICE IN THE WORLD​
              </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4  mt-20">
              <div className="bg-[#F2F4F9] border rounded-xl ">
                <div className="bg-[#0D274E] mx-auto   -mt-10 rounded-full w-fit p-4">
                  <span>
                    <svg
                      width="50px"
                      height="50px"
                      version="1.1"
                      id="Icons"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 32 32"
                      xmlSpace="preserve"
                    >
                      <title>Custom Icon</title>
                      <line
                        x1="16"
                        y1="16"
                        x2="22"
                        y2="10"
                        style={{
                          fill: "none",
                          stroke: "#FFFFFF",
                          strokeWidth: 2,
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeMiterlimit: 10,
                        }}
                      />
                      <polygon
                        points="30,6 26,6 26,2 22,6 22,10 26,10"
                        style={{
                          fill: "none",
                          stroke: "#FFFFFF",
                          strokeWidth: 2,
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeMiterlimit: 10,
                        }}
                      />
                      <circle
                        cx="16"
                        cy="16"
                        r="6"
                        style={{
                          fill: "none",
                          stroke: "#FFFFFF",
                          strokeWidth: 2,
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeMiterlimit: 10,
                        }}
                      />
                      <path
                        d="M27,9c1.3,2,2,4.4,2,7c0,7.2-5.8,13-13,13S3,23.2,3,16S8.8,3,16,3c2.6,0,5,0.7,7,2"
                        style={{
                          fill: "none",
                          stroke: "#FFFFFF",
                          strokeWidth: 2,
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeMiterlimit: 10,
                        }}
                      />
                    </svg>
                  </span>
                </div>
                <div className="p-4">
                  <h1 className="uppercase text-3xl text-center  font-semibold">
                    Our Mission
                  </h1>
                  <p className="text-center my-4">
                    Ensuring every journey is smooth, safe and memorable
                  </p>
                </div>
              </div>
              <div className="bg-[#F2F4F9] border rounded-xl mt-10 md:mt-0">
                <div className="bg-[#0D274E] mx-auto   -mt-10 rounded-full w-fit p-4">
                  <span>
                    <svg
                      width="50px"
                      height="50px"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="none"
                        d="M20 12C20 16.4183 16.4183 20 12 20M20 12C20 7.58172 16.4183 4 12 4M20 12H22M12 20C7.58172 20 4 16.4183 4 12M12 20V22M4 12C4 7.58172 7.58172 4 12 4M4 12H2M12 4V2M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
                        stroke="#FFFFFF"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
                <div className="p-4">
                  <h1 className="uppercase text-3xl text-center  font-semibold">
                    Our Vision
                  </h1>
                  <p className="text-center my-4">
                    Connecting people and places with effortless car rentals
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 ">
              <div className="bg-[#0D274E] text-white rounded-xl p-8 flex flex-col gap-2 items-center justify-center ">
                <h1 className="text-6xl font-semibold">14</h1>
                <p className="text-xl font-medium">Years of Experience</p>
              </div>
            </div>
          </div>
          <div className="relative h-full rounded-tl-3xl rounded-br-3xl shadow-xl hidden lg:block">
            <Image
              src={man}
              alt="man"
              className=" w-full  rounded-tl-3xl rounded-br-3xl  xl:h-[600px] lg:h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
