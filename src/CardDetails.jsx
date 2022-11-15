import React from "react";

const CardDetails = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-4">
      <div className="flex justify-center flex-col">
        <div
          className="flex my-16 md:items-center flex-col md:flex-row
              
              w-full font-medium justify-center  md:pt-[70px] py-0 md:py-[60px] md:px-8"
        >
          <div className="flex flex-col justify-start text-[22px] leading-7 lg:text-[40px] text-[#1C2132] lg:leading-[1.2]">
            <div className="w-[220px] md:w-[300px] lg:w-[510px]">
              <div>
                <p>
                  Split your payments, anywhere and everywhere.
                  <span style={{ color: "#a4abb3" }}>
                    {" "}
                    Accepted at 99.9% of merchants.<span></span>
                  </span>
                </p>
              </div>
            </div>
            <div className="info-caption">
              <img
                src="/images/backed_by_visa.svg"
                alt=""
                className="mt-10 h-[50px] css-1e2fy0l"
                loading="lazy"
              />
            </div>
          </div>
          <div className="w-full pt-16 lg:pt-0 lg:w-[50%]">
            <div className="flex justify-center overflow-hidden">
              <div className="relative w-[280px] lg:w-[448px]">
                <img
                  alt=""
                  src="/images/redesign/semi-circle.svg"
                  className=" z-0 absolute w-[215px] lg:w-[380px] right-[60px] top-7 css-0"
                  data-aos="fade-up"
                  data-aos-duration="5000"
                />
                <img
                  alt=""
                  src="/images/redesign/places.webp"
                  className="relative z-10 -left-4 -bottom-4 w-[280px] lg:w-[448px] css-0"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex my-16 md:items-center flex-col md:flex-row-reverse
              
              w-full font-medium justify-center  md:pt-[70px] py-0 md:py-[60px] md:px-8"
        >
          <div className="flex flex-col justify-start text-[22px] leading-7 lg:text-[40px] text-[#1C2132] lg:leading-[1.2]">
            <div className="w-[220px] md:w-[300px] lg:w-[510px]">
              <div>
                <p>
                  Earn rewards every time you Pay in Full.{" "}
                  <span style={{ color: "#a4abb3", display: "block" }}>
                    Soon, get up to 5X value on Uni Store.
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="w-full pt-16 lg:pt-0 lg:w-[50%]">
            <div className="flex justify-center">
              <div className="relative w-[280px] lg:w-[448px]">
                <div
                  className=" relative rounded-full w-44 h-44 left-4 top-6 lg:w-72 lg:h-72 lg:top-10 lg:left-10"
                  style={{
                    backgroundColor: "#7AFFEC",
                  }}
                  data-aos="fade-up"
                  data-aos-duration="5000"
                ></div>
                <img
                  alt=""
                  src="/images/redesign/reward_points.webp"
                  loading="lazy"
                  className="absolute -top-8 left-4 w-[280px] lg:w-[448px] bg-transparent css-0"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex my-16 md:items-center flex-col md:flex-row
              
              w-full font-medium justify-center  md:pt-[70px] py-0 md:py-[60px] md:px-8"
        >
          <div className="flex flex-col justify-start text-[22px] leading-7 lg:text-[40px] text-[#1C2132] lg:leading-[1.2]">
            <div className="info-top-caption">
              <div>
                <p
                  style={{ lineHeight: "18px" }}
                  className="text-[#4FC8B6] text-sm mb-1"
                >
                  {" "}
                  Coming Soon!
                </p>
              </div>
            </div>
            <div className="w-[220px] md:w-[300px] lg:w-[510px]">
              <div>
                <p>Take all the time you need with longer EMIs.</p>
              </div>
            </div>
          </div>
          <div className="w-full pt-16 lg:pt-0 lg:w-[50%]">
            <div className="flex justify-center">
              <div className="relative w-[280px] lg:w-[448px] pl-8 lg:pl-16 pt-16 lg:pt-24">
                <img
                  alt=""
                  src="/images/redesign/semi-circle.svg"
                  loading="lazy"
                  className="relative w-56 lg:w-80 css-0"
                  data-aos="fade-up"
                  data-aos-duration="5000"
                  style={{
                    transform: "translateY(0px) rotate(180deg) translateZ(0px)",
                  }}
                />
                <img
                  alt=""
                  src="/images/redesign/time.webp"
                  loading="lazy"
                  className="absolute left-0 bottom-12 lg:bottom-16 lg:-left-4 w-[280px] lg:w-[448px] css-0"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex my-16 md:items-center flex-col md:flex-row-reverse
              
              w-full font-medium justify-center  md:pt-[70px] py-0 md:py-[60px] md:px-8"
        >
          <div className="flex flex-col justify-start text-[22px] leading-7 lg:text-[40px] text-[#1C2132] lg:leading-[1.2]">
            <div className="info-top-caption">
              <div>
                <p
                  style={{ lineHeight: "18px" }}
                  className="text-[#4FC8B6] text-sm mb-1"
                >
                  {" "}
                  Coming Soon!
                </p>
              </div>
            </div>
            <div className="w-[220px] md:w-[300px] lg:w-[510px]">
              <div>
                <p>Cash out to bank accounts with Uni Cash.</p>
              </div>
            </div>
          </div>
          <div className="w-full pt-16 lg:pt-0 lg:w-[50%]">
            <div className="flex justify-center">
              <div className="relative w-[280px] lg:w-[512px]">
                <div
                  className=" relative flex pl-12 lg:pl-28"
                  data-aos="fade-up"
                  data-aos-duration="5000"
                >
                  <div className="w-32 h-32 lg:w-52 lg:h-52 bg-uni-yellow rounded-full"></div>
                  <div className="w-16 h-16 ml-6 lg:w-24 lg:h-24 bg-uni-yellow rounded-full"></div>
                </div>
                <img
                  alt=""
                  src="/images/redesign/bank.webp"
                  loading="lazy"
                  className="absolute -top-4 w-[280px] sm:w-96 lg:w-[512px] css-0"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-40 font-medium justify-start md:justify-center text-[28px] leading-[34px] md:text-[40px] md:leading-[1.2] md:text-center">
          <p>
            Lifetime <span className="green-gradient-text">free. </span>
            <span className="block sm:inline-block md:text-center">
              No joining fee.
            </span>
            <span className="block md:text-center"> No annual charges. </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
