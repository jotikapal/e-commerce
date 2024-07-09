import React from 'react'
import Link from 'next/link';
import { getServerSession } from "next-auth";
import User from '@/models/User';

const Sidebar = async () => {

    // let session = await getServerSession();

    let session: any = await getServerSession();
    console.log(session, "session");

    session.user.userType = "ADMIN";

    return (
        <div className=''>
            <div className="drawer lg:drawer-open bg-gray-400 text-gray-900 h-full">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    {/* bg-base-200 text-base-content */}
                    <ul className="menu p-4 w-80 min-h-full ">
                        {/* Sidebar content here */}
                        {session.user.userType === "ADMIN" ? (
                            <li className='my-2'><Link href='/admin/add-product'>Add Product</Link></li>
                        ) : null}
                        <li className='mb-2'><Link href='/admin/all-products'>All Products</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Sidebar;
