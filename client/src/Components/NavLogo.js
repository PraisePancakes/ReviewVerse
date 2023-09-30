import React from "react";
import { LiaStarSolid } from "react-icons/lia";

const Logo = () => {
  return (
    <div className="flex gap-3 ">
      <LiaStarSolid size={25} color="gold" />
      <LiaStarSolid size={20} color="gold" />
      <LiaStarSolid size={10} color="gold" />
      <LiaStarSolid size={20} color="gold" />
      <LiaStarSolid size={25} color="gold" />
    </div>
  );
};

export default Logo;
