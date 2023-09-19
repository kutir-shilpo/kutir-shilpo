"use client";
import { Icon } from "@iconify/react";

const BarRight = ({ onClick,className }) => {
  return <Icon onClick={()=>onClick()} className={className} icon="fa-solid:align-right" />;
};

export default BarRight;
