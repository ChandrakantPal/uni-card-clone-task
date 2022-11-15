import React from "react";

const ApplyNowButton = () => {
  return (
    <div className="w-full bottom-0 z-40 fixed md:hidden py-8 black-gradient">
      <div className="w-[90vw] mx-auto md:mx-0 md:max-w-[280px] font-medium">
        <div className="flex flex-col transition-all ease-in">
          <button className="p-4 rounded-lg z-10 flex justify-between items-center bg-[#FDEF78] text-black -mt-2 disabled:bg-[#AEAB8C]">
            <span>Apply now</span>
            <img
              src="/images/right_arrow.svg"
              alt="right_arrow"
              width="21px"
              className="inline ml-3 css-0"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplyNowButton;
