import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import User from '@/models/User';
import { connect } from '@/db/db';

export const AUTH_CONFIG = {
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
              const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);
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
      // Add other providers here
    ],
    callbacks: {
      async session({ session, token, user }: any) {
        // console.log(session, token, "session,***************token");
        if (session && session.user) {
          session.user.id = token.sub;
          session.user.userType = token.userType;
        }
        return session;
      },
      async jwt({ token, user }: any) {
        // console.log(token, "***********************", user);
        if (user) {
          token.sub = user.id;
          token.userType = user.userType;
        }
        return token;
      },
    },
    secret: process.env.NEXTAUTH_SECRET,
    // pages: {
    //     signIn: '/auth/signin',  // You can specify a custom sign-in page here
    //     error: '/auth/error',    // You can specify a custom error page here
    //     signOut: '/auth/signout' // You can specify a custom sign-out page here
    // }
  };