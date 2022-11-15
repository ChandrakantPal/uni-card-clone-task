import * as React from "react";

const Hero = () => {
  const [phone, setPhone] = React.useState("");
  const [checked, setChecked] = React.useState(true);
  return (
    <div>
      <section className="py-0 hero-background">
        <div className="flex mx-auto max-w-[1280px] w-full h-[100vh] justify-center z-0 relative">
          <img
            alt="card_asset"
            src="/images/redesign/card_asset.webp"
            className="z-0 absolute w-[225px] md:w-[450px] -translate-x-1/2 md:left-auto md:right-0 md:-translate-x-0 top-[20%] md:top-[22%] -translate-y-[50%] md:-translate-y-[50%] animate-bounce"
          />
          <div className="z-10 w-full mb-28 md:my-auto flex flex-col self-end md:self-center px-6">
            <h1 className="font-medium max-w-[300px] md:max-w-[550px] text-3xl md:text-[3.4rem] md:leading-[54px] text-white mb-20">
              <span>
                India’s Credit Revolution is here.{" "}
                <span className="uni-gradient-primary"> Pay 1/3rd. </span>{" "}
                Anywhere.
              </span>
            </h1>
            <div className="hidden md:block">
              <div className="flex justify-between items-center max-w-[94vw]">
                <div className="flex flex-col">
                  <form>
                    <div className="flex bg-[#454B51] p-1 pl-2 rounded-xl justify-between">
                      <div className="flex items-center">
                        <input
                          className="bg-[#454B51] border-0 outline-none text-white p-1 placeholder-[#7E8587] w-44"
                          placeholder="Enter Phone Number"
                          value={phone}
                          onChange={(e) => {
                            setPhone(e.target.value);
                          }}
                        />
                        <span className="w-6 flex items-center justify-end h-full"></span>
                      </div>
                      <button
                        type="submit"
                        className="text-center text-sm leading-7 justify-between pt-2 ml-2 bg-uni-yellow rounded-xl z-10 py-2 px-4 disabled:opacity-80 disabled:cursor-not-allowed"
                      >
                        <span>Apply Now</span>
                      </button>
                    </div>
                  </form>
                  <div className="consent flex items-center py-4 px-2 max-w-xs">
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={(e) => {
                        setChecked(e.target.checked);
                      }}
                      id="consent-msg"
                      className="mr-2"
                    />
                    <label
                      htmlFor="consent-msg"
                      className="consent text-uni-text-gray text-[10px] leading-3 cursor-pointer"
                    >
                      By submitting this information, you agree to be contacted
                      by Uni Cards over Call, SMS, Email or WhatsApp to guide
                      you through your application.
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex hidden max-w-xs flex-col justify-start">
                <div className="w-full max-w-[300px]">
                  <a
                    href="https://uni-growth.onelink.me/v6cm/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block google-btn-2 font-medium p-4 rounded-lg z-10 bg-[#FDEF78] text-black -mt-2 disabled:bg-[#AEAB8C]"
                  >
                    <div className="w-full flex justify-center items-center">
                      <span>Download</span>
                    </div>
                  </a>
                </div>
                <div className="my-2">
                  <p className="text-white text-[10px] leading-3">
                    Thank you for your interest in the Uni Card.
                    <br /> Download the Uni Cards app now and get your Uni Card
                    in minutes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
