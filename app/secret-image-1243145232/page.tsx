import Image from "next/image";
import React from "react";

const SecretImage = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <Image alt="Image" src="/location.jpeg" height={500} width={500} />
    </div>
  );
};

export default SecretImage;
