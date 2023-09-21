"use client"
import { Icon } from '@iconify/react';

const Information = ({onClick,className}) => {
    return <Icon onClick={onClick} className={className} icon="heroicons-outline:information-circle" />
};

export default Information;