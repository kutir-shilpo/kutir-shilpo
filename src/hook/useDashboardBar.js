"use client"

import { useState } from "react";

const useDashboardBar = () => {
    const [visibleDashboardItem,setVisibleDashboardItem]=useState(false);
    return [visibleDashboardItem,setVisibleDashboardItem];
};

export default useDashboardBar;