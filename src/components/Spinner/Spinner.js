import React from "react";

const Spinner = () => {
  return (
    <div className=" spinner-container absolute min-h-screen min-w-full  top-0  flex justify-center items-center">
      <div class="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Spinner;
