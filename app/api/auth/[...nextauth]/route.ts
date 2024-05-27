import NextAuth from "next-auth";
import { Account, User as AuthUser } from "next-auth";
// import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import User from '@/models/User';
import { connect } from '@/db/db';

export const authOptions: any = {
    // Configure one or more authentication providers
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials: any) {
                await connect();
                try {
                    const user = await User.findOne({ email: credentials.email });
                    if (user) {
                        const isPasswordCorrect = await bcrypt.compare(
                            credentials.password,
                            user.password
                        );
                        if (isPasswordCorrect) {
                            return user;
                        }
                    }
                    // Return null if user is not found or password is incorrect
                    return null;

                } catch (error: any) {
                    throw new Error(error);
                }
            }
        }),
        // GithubProvider({
        //   clientId: process.env.GITHUB_ID,
        //   clientSecret: process.env.GITHUB_SECRET,
        // }),
        // ...add more providers here
    ],
    // pages: {
    //     signIn: '/auth/signin',  // You can specify a custom sign-in page here
    //     error: '/auth/error',    // You can specify a custom error page here
    //     signOut: '/auth/signout' // You can specify a custom sign-out page here
    // }
}
export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
