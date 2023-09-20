"use client"
import { Icon } from "@iconify/react";

const Dashboard = ({onClick,className}) => {
    return <Icon onClick={onClick} className={className} icon="iwwa:dashboard" />;
};

export default Dashboard;