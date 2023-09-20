"use client"
import { Icon } from "@iconify/react";

const Delete = ({onClick,className}) => {
    return <Icon
    onClick={()=>onclick}
    className={className}
    icon="heroicons-outline:trash"
  />
};

export default Delete;