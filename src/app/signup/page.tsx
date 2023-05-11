"use client"

import { SignupDto } from "@/dto/common";
import { useState } from "react";
import { userInfoKey } from "../helpers/constant";
import { getStoageData, setStoageData } from "../helpers/storage";
import { useRouter } from "next/navigation";

const Signup = () => {
    const router = useRouter();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<null | string>(null);

    const onSubmitForm = async (e: any) => {
        e.preventDefault();
        const signup: SignupDto = {
            Name: name,
            Email: email,
            Password: password
        }

        const data = await getStoageData(userInfoKey);
        const isMatch = data.find((val: any) => val.Email == email);
        if (!isMatch) {
            data.push(signup)
            setStoageData(userInfoKey, data);
            router.push('/Login')
            setError(null);
        }
        else {
            setError("User already exists");
            setTimeout(() => {
                setError(null);
            }, 3000)
        }

    }

    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={onSubmitForm}>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
                        <div className="mt-2">
                            <input
                                id="name" name="text"
                                type="name"
                                autoComplete="name"
                                required
                                onChange={(e: any) => setName(e.target.value)}
                                className="block w-full rounded-md border-0 px-5 px-5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                        <div className="mt-2">
                            <input
                                id="email" name="email"
                                type="email"
                                autoComplete="email"
                                required
                                onChange={(e: any) => setEmail(e.target.value)}
                                className="block w-full rounded-md border-0 px-5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                        </div>
                        <div className="mt-2">
                            <input
                                id="password" name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                onChange={(e: any) => setPassword(e.target.value)}
                                className="block w-full rounded-md border-0 px-5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    {error && (
                        <div className="mt-1">
                            <h4 className="text-sm text-red-500 text-center">{error}</h4>
                        </div>
                    )}

                    <div>
                        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign up</button>
                    </div>
                </form>
            </div>
        </div>

    )
}
export default Signup;