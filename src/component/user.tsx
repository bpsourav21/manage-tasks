"use client";

import { useSession } from "next-auth/react";

export const User = () => {
    const { data: session, status } = useSession();

    if (status === "loading") {
        return <p>Loading....</p>;
    }

    return (
        <>
            <h1>Client Session</h1>
            <pre>{JSON.stringify(session)}</pre>
        </>
    );
};