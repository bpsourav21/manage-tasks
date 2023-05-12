"use client"

import { CurrentUserDto, LoginDto, UserDto } from "@/dto/common";
import { useState } from "react";
import { userInfoKey } from "../helpers/constant";
import { getStoageData, setStoageData } from "../helpers/storage";
import { useRouter } from "next/navigation";

import { signIn, signOut } from "next-auth/react";
import Link from "next/link";

const Login = () => {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<null | string>(null);

    const onSubmitForm = async (e: any) => {
        e.preventDefault();
        const Login: LoginDto = {
            Email: email,
            Password: password
        }

        const data = await getStoageData(userInfoKey);
        const user: UserDto | null = data.find((val: any) => val.Email == email && val.Password == password);

        var res = await signIn('credentials',
            {
                redirect: false,
                user: JSON.stringify(user),
                callbackUrl: "/"
            }
        );

        if (res?.error) {
            setError("Email id or Password not matched!!!")
            setTimeout(() => {
                setError(null);
            }, 3000)
        }
        else {
            setError(null);
            router.push("/")
        }
    }

    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={onSubmitForm}>
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
                        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Login</button>
                    </div>
                    <div className="mt-2 text-center">
                        <span className="text-sm text-blue-500">
                            <Link href="/signup">
                                Click here to Signup
                            </Link>
                        </span>
                    </div>
                </form>
            </div>
        </div>

    )
}
export default Login;