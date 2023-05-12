import { UserDto } from "@/dto/common";
import type { NextAuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            name: "Sign in",
            credentials: {
                // email: {
                //     label: "Email",
                //     type: "email",
                //     placeholder: "example@example.com",
                // },
                // password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                // HACK:: Generating User object from FE side
                try {
                    //@ts-ignore
                    const parsedUser: UserDto = JSON.parse(credentials.user);
                    const user: User = {
                        id: parsedUser.Id,
                        name: parsedUser.Name,
                        email: parsedUser.Email
                    }

                    return user;
                } catch (error) {
                    return null;
                }
            },
        }),
    ],
};
