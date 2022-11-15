import React from "react";
import KnowMoreButton from "./components/KnowMoreButton";

const PayCard = () => {
  return (
    <section className="py-12 lg:py-[100px] bg-black">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-4  md:flex my-auto md:pb-[50px]">
        <div
          className="mx-auto w-[300px] md:w-[500px] md:max-w-[500px] md:h-[500px] mb-[50px] md:flex-[50%]"
          data-aos="fade-up"
        >
          <video
            muted
            autoPlay
            loop
            playsInline
            disablePictureInPicture
            className="w-full h-full"
          >
            <source src="/videos/one-third.mp4" type="video/mp4" />
            <source src="/videos/one-third.webm" type="video/webm" />
          </video>
        </div>
        <div
          className="m-auto w-full md:max-w-md lg:max-w-lg"
          data-aos="fade-up"
        >
          <span className="text-lg uni-gradient-primary md:text-4xl md:leading-8">
            <span className="uni-gradient-primary"> Uni Pay 1/3rd Card </span>
          </span>
          <p className="text-[28px] leading-[1.2] font-medium sm:text-3xl break-words text-white md:text-5xl">
            With Great Flexibility,
            <br />
            Comes Great Power.
          </p>
          <p className="text-gray-400 text-[14px] md:text-2xl md:leading-7 my-4 md:my-8">
            Split your spends into
            <span className="text-white"> 3 parts over 3 months</span> at
            <br /> no extra charges. And,{" "}
            <span className="text-white">get 1% rewards</span> if you pay in 1
            month.
          </p>
          <div className="mt-8 md:mt-16">
            <KnowMoreButton />
          </div>
        </div>
      </div>
      <div className="w-full max-w-7xl mx-auto px-6 md:px-4  md:flex my-auto md:flex-row-reverse pt-[50px]">
        <div
          className="mx-auto w-[300px] md:w-[500px] md:max-w-[500px] md:h-[500px] mb-[50px] md:flex-[50%]"
          style={{ opacity: 1, transform: "none" }}
        >
          <video
            muted
            autoPlay
            loop
            playsInline
            disablePictureInPicture
            className="w-full h-full"
          >
            <source src="/videos/pay_half.mp4" type="video/mp4" />
            <source src="/videos/pay_half.webm" type="video/webm" />
          </video>
        </div>
        <div
          className="m-auto w-full md:max-w-md lg:max-w-lg"
          style={{ opacity: 1, transform: "none" }}
        >
          <span className="text-lg uni-gradient-primary md:text-4xl md:leading-8">
            <span className="uni-gradient-secondary">Uni Pay 1/2 Card</span>
          </span>
          <p className="text-[28px] leading-[1.2] font-medium sm:text-3xl break-words text-white md:text-5xl">
            Smart Payments, <br /> Delightful Rewards.
          </p>
          <p className="text-gray-400 text-[14px] md:text-2xl md:leading-7 my-4 md:my-8">
            <span className="text-white">Split your spends in 2.</span> Or,{" "}
            <br />
            pay in 1 month &amp; get{" "}
            <span className="text-white">1.2% rewards!</span>
          </p>
          <div className="mt-8 md:mt-16">
            <KnowMoreButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PayCard;
