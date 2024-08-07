import type { Metadata } from "next";
  

import { getServerSession } from "next-auth";
import Sidebar from "../components/Sidebar";
import { AUTH_CONFIG } from "../lib/auth";
 
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const session = await getServerSession(AUTH_CONFIG);

  return (
   <main>
     {children}
     {JSON.stringify(session)}
   { session ? <Sidebar/>: null}  
   </main>
  );
}
