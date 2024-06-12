import Image from "next/image";
import React from "react";

const LoaderPage = () => {
  return (
    <div className="absolute top-0 left-0 bg-card w-full h-full flex items-center justify-center z-50">
      <Image
        alt="Loader"
        src="/logo.svg"
        height={150}
        width={150}
        className="animate-pulse"
      />
    </div>
  );
};

export default LoaderPage;
