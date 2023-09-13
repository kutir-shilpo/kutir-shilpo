"use client"
import { Icon } from "@iconify/react";

const BarLeft = ({className,onClick}) => {
    return <Icon onClick={onClick} className={className} icon="fa-solid:align-left" />;
};

export default BarLeft;