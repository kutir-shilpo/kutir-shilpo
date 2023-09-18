"use client"
import { usePathname } from "next/navigation";

const ModifyProduct = () => {
    const path = usePathname();
    console.log(path.split("/")[-1]);
    return (
        <div>
            This is modify product
        </div>
    );
};

export default ModifyProduct;