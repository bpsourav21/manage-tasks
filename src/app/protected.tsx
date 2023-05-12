"use client"

import Loader from "@/component/Loader";
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation";
import React from "react";

type Props = {
    children?: React.ReactNode;
};

export default function ProtectedRoute({ children }: Props) {
    const { status } = useSession({
        required: true,
        onUnauthenticated() {
            redirect("/login");
        },
    });

    if (status === "loading") {
        return <Loader />;
    }
    
    return <React.Fragment>{children}</React.Fragment>;
} 