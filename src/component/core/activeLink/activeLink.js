"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const ActiveLink = ({href,className,children}) => {
    const currentPage=usePathname();
    return (
        <Link href={href} className={`${currentPage===href&&"bg-slate-50"} ${className}`}>
            {children}
        </Link>
    );
};

export default ActiveLink;