import React from "react";

const SplitPayment = () => {
  return (
    <section>
      <div className="w-full max-w-7xl mx-auto px-6 md:px-4  undefined">
        <div className="flex flex-col justify-center md:text-center text-[28px] md:text-[40px] leading-[34px] md:leading-[1.2] tx-black-primary md:pb-16 font-medium">
          <p data-aos="fade-up">
            Split your payments, anywhere and everywhere.
          </p>
          <p data-aos="fade-up">
            <span className="green-gradient-text">
              Earn the best rewards.&nbsp;
            </span>
            Enjoy round the clock&nbsp;
            <span className="green-gradient-text">WhatsApp support.&nbsp;</span>
            It
          </p>
          <p data-aos="fade-up">
            takes just 5 minutes to get your card, and it’s&nbsp;
            <span
              style={{
                backgroundImage:
                  "linear-gradient(140.86deg, #65ECD8 11.07%, #FDEF78 80.28%)",
              }}
              className="green-gradient-text"
            >
              lifetime free:&nbsp;
            </span>
            no{" "}
          </p>
          <p data-aos="fade-up">joining fee, no annual charges.</p>
        </div>
        <div className="flex md:justify-center py-12" data-aos="fade-up">
          <div
            style={{
              background:
                "linear-gradient(140.86deg, #65ECD8 11.07%, #FDEF78 80.28%)",
            }}
            className="flex w-[96px] md:w-[150px] h-[96px] md:h-[150px] rounded-[50%] justify-center animate-bounce"
          >
            <img
              alt="down_arrow"
              src="/images/down_arrow.svg"
              loading="lazy"
              className="w-9 md:w-14 "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SplitPayment;
