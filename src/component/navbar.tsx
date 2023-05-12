"use client"
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
    const { data: session } = useSession();

    let currentUser = session?.user;
    const onLoggedOut = () => {
        signOut();
    }

    return (
        <>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-gray-800 mb-3">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <a
                            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                            href="#pablo"
                        >
                            Manage Tasks
                        </a>
                        {!!currentUser && (
                            <div className="flex justify-between items-center">
                                <h5 className="text-white text-md">{currentUser.name}</h5>
                                <button
                                    className="text-white cursor-pointer text-md leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                                    type="button"
                                    onClick={onLoggedOut}
                                >
                                    <span>Logout</span>
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;