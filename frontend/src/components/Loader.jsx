import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-[400px]">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin"></div>
        <div className="absolute top-0 left-0 w-16 h-16 border-4 border-transparent border-t-primary-400 rounded-full animate-spin animation-delay-150"></div>
      </div>
    </div>
  );
};

export default Loader;
