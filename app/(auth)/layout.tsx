import React from "react";
import {Container} from "lucide-react";
import Link from "next/link";

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}){
    return (
        <div className="h-screen flex justify-center items-center">
            {children}
        </div>
    )
}