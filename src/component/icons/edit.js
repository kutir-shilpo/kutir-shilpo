"use client"

import { Icon } from "@iconify/react";

const Edit = ({onClick,className}) => {
    return <Icon
    onClick={onClick}
    className={className}
      icon="fa-regular:edit"
    />
};

export default Edit;