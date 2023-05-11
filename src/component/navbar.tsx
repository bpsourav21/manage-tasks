"use client"
import { userInfoKey } from "@/app/helpers/constant";
import { getStoageData, isUserLoggedIn, setCurrentUser } from "@/app/helpers/storage";
import { SignupDto } from "@/dto/common";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
    const router = useRouter();
    const [currentUser, updateCurrentUser] = useState<SignupDto | null>(null);

    useEffect(() => {
        syncupUser()
    }, [])

    const syncupUser = async () => {
        const isUser = await isUserLoggedIn();
        const users = await getStoageData(userInfoKey);
        const user = users.find((u: SignupDto) => u.Email == isUser);
        updateCurrentUser(user);
    }

    const onLoggedOut = () => {
        setCurrentUser();
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
                                <h5 className="text-white text-md">{currentUser.Name}</h5>
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