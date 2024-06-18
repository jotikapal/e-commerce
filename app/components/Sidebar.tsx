import React from 'react'
import Link from 'next/link';
import { getServerSession } from "next-auth";
import User from '@/models/User';

const Sidebar = async () => {

    // let session = await getServerSession();
    // console.log(session, "session")

    let session: any = await getServerSession();
    console.log(session, "session");

    session.user.userType = "ADMIN";

    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        {session.user.userType === "ADMIN" ? (
                            <li><Link href='/product-form'>Add Product</Link></li>
                        ) : null}
                        <li><Link href='/all-products'>All Products</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Sidebar;
