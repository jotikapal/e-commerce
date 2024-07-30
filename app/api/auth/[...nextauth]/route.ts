import { AUTH_CONFIG } from "@/app/lib/auth";
import NextAuth from "next-auth"; 
 
export const handler = NextAuth(AUTH_CONFIG);
export { handler as GET, handler as POST };
