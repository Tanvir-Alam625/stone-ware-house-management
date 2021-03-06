import React from "react";

const Spinner = () => {
  return (
    <div className=" spinner-container absolute min-h-screen min-w-full  top-0  flex justify-center items-center z-20">
      <div className="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Spinner;
