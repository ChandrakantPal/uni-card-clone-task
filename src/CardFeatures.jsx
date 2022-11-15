import React from "react";

const CardFeatures = () => {
  return (
    <section className="py-12 lg:py-[100px] bg-black">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-4  md:flex md:justify-between">
        <div className="flex false w-full items-center md:flex-col md:max-w-xs my-12 md:my-0">
          <div className="flex-[50%] flex-shrink-0 flex w-full">
            <div className="w-full h-36 relative">
              <img
                className="absolute md:relative md:left-auto md:-translate-x-0 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-20 md:w-28 h-auto mx-auto md:mx-0"
                src="/images/redesign/whatsapp_bubble.webp"
                alt=""
              />
            </div>
          </div>
          <div className="flex-[50%] flex flex-col">
            <p className="font-medium text-base text-white leading-[18px] md:text-2xl">
              Help, just a WhatsApp away. Anytime, Anyday.
            </p>
            <p className="text-sm text-gray-400 mt-2 md:text-lg">
              <span>
                During hectic work hours. On lazy sunday mornings. In the thick
                of night. Anytime.
              </span>
            </p>
          </div>
        </div>
        <div className="flex flex-row-reverse w-full items-center md:flex-col md:max-w-xs my-12 md:my-0">
          <div className="flex-[50%] flex-shrink-0 flex w-full">
            <div className="w-full h-36 relative">
              <img
                className="absolute md:relative md:left-auto md:-translate-x-0 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-20 md:w-28 h-auto mx-auto md:mx-0"
                src="/images/redesign/rupee_bubble.webp"
                alt=""
              />
            </div>
          </div>
          <div className="flex-[50%] flex flex-col">
            <p className="font-medium text-base text-white leading-[18px] md:text-2xl">
              {" "}
              No hidden charges, no last minute surprises.
            </p>
            <p className="text-sm text-gray-400 mt-2 md:text-lg">
              <span>
                100% money back guarantee if a charge is applied without your
                knowledge.
              </span>
            </p>
          </div>
        </div>
        <div className="flex false w-full items-center md:flex-col md:max-w-xs my-12 md:my-0">
          <div className="flex-[50%] flex-shrink-0 flex w-full">
            <div className="w-full h-36 relative">
              <img
                className="absolute md:relative md:left-auto md:-translate-x-0 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-20 md:w-28 h-auto mx-auto md:mx-0"
                src="/images/redesign/antivirus_bubble.webp"
                alt=""
              />
            </div>
          </div>
          <div className="flex-[50%] flex flex-col">
            <p className="font-medium text-base text-white leading-[18px] md:text-2xl">
              {" "}
              Super secure. Because we care about your money.
            </p>
            <p className="text-sm text-gray-400 mt-2 md:text-lg">
              <span>
                <img
                  style={{ marginTop: "24px" }}
                  src="/images/pcidss_cert.svg"
                  alt="PCI Logo"
                />
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardFeatures;
