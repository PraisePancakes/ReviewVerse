import React from "react";
import { LiaStarSolid } from "react-icons/lia";

const Logo = () => {
  return (
    <div className="flex gap-10 mb-10">
      <LiaStarSolid size={30} color="gold" />
      <LiaStarSolid size={25} color="gold" />
      <LiaStarSolid size={15} color="gold" />
      <LiaStarSolid size={25} color="gold" />
      <LiaStarSolid size={30} color="gold" />
    </div>
  );
};

export default Logo;
