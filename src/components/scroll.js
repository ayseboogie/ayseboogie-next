import React from "react";

const Scroll = ({ children }) => {
  return (
    <div className="flex w-full" id="scroll">
      <div className="flex-1 flex flex-wrap justify-end text-right text-sm md:text-base bg-purple-500 text-white text-center p-5 fixed right-0 bottom-0 w-32 h-14">
        {children}
      </div>
    </div>
  );
};
export default Scroll;
