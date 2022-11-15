import React from "react";

const Header = () => {
  return (
    <header className="flex flex-col justify-center fixed w-[100%] min-h-[80px] z-20 top-0 left-0 right-0">
      <div style={{ background: "black" }}>
        <div className="flex items-center justify-between w-[100%] max-w-[1330px] px-[20px] py-0 mx-auto my-0 h-[80px]">
          <div style={{ cursor: "pointer" }} className="w-[80px]">
            <svg
              className="Logo_logo_white__zowGB"
              viewBox="0 0 85 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M54.894 39.5039H48.6641V19.77H54.894V39.5039ZM30.4021 25.9999V39.504H24.1723V22.3647C24.1723 21.6765 24.4457 21.0165 24.9322 20.5301C25.4188 20.0435 26.0787 19.77 26.7669 19.77H42.3312C43.0195 19.77 43.6793 20.0435 44.1657 20.5301C44.6523 21.0165 44.9257 21.6765 44.9257 22.3647V39.504H38.696V25.9999H30.4021ZM14.2345 33.2742V19.7702H20.4644V36.9095C20.4644 37.5977 20.1909 38.2576 19.7044 38.744C19.2179 39.2307 18.5579 39.5041 17.87 39.5041H2.30544C1.61752 39.5041 0.957379 39.2307 0.470894 38.744C-0.0157201 38.2576 -0.289062 37.5977 -0.289062 36.9095V19.7702H5.9407V33.2742H14.2345Z"
                fill="white"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M65.289 19.7708C65.289 21.8685 63.5858 23.5717 61.4882 23.5717C59.3905 23.5717 57.6875 21.8685 57.6875 19.7708C57.6875 17.6732 59.3905 15.9702 61.4882 15.9702C63.5858 15.9702 65.289 17.6732 65.289 19.7708Z"
                fill="#00DCC8"
              ></path>
            </svg>
          </div>
          <div className="flex">
            <div className="menu-container hidden md:flex">
              <div className="pl-20">
                <a className="apply_btn no-underline visited:text-white text-white font-medium">
                  Pay 1/3rd Card
                </a>
                <div className="w-full mt-1 h-[2px] undefined"></div>
              </div>
              <div className="pl-20">
                <a className="apply_btn no-underline visited:text-white text-white font-medium">
                  Pay 1/2 Card
                </a>
                <div className="w-full mt-1 h-[2px] undefined"></div>
              </div>
            </div>
            <div className="md:hidden flex pl-20">
              <button
                className="w-12 h-12 flex justify-center items-center"
                aria-label="menu"
              >
                <svg
                  width="31"
                  height="20"
                  viewBox="0 0 31 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="31" height="2" fill="white"></rect>
                  <rect width="31" height="2" fill="white"></rect>
                  <rect width="31" height="2" fill="white"></rect>
                  <rect y="9" width="31" height="2" fill="white"></rect>
                  <rect y="9" width="31" height="2" fill="white"></rect>
                  <rect y="9" width="31" height="2" fill="white"></rect>
                  <rect y="18" width="31" height="2" fill="white"></rect>
                  <rect y="18" width="31" height="2" fill="white"></rect>
                  <rect y="18" width="31" height="2" fill="white"></rect>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden"></div>
    </header>
  );
};

export default Header;
