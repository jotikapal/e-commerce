"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link';

const page = () => {
    const [data, setData] = useState<any[]>([]);
    const [category, setCategory] = useState<any[]>([]);
    const [subcategory, setSubcategory] = useState<any[]>([]);

    const getData = async () => {
        try {
            const response = await fetch('/api/product');
            if (!response.ok) {
                throw new Error('Failed to fetch data')
            }
            const data = await response.json();
            setData(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const getCategory = async () => {
        try {
            const response = await fetch('/api/category');
            if (!response.ok) {
                throw new Error('Failed to fetch data')
            }
            const data = await response.json();
            console.log(data, "category data")
            setCategory(data);
            console.log(category, "category under")
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const getSubcategory = async () => {
        try {
            const response = await fetch('/api/subcategory');
            if (!response.ok) {
                throw new Error('Failed to fetch data')
            }
            const data = await response.json();
            setSubcategory(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        getData()
        getCategory()
        getSubcategory()
    }, []);

    console.log(data, "data")
    console.log(category, "category")
    console.log(subcategory, "subcategory")

    return (
        <>
            <div className='border rounded mx-7 mt-7 w-full'>
                <div className='py-5 pl-5 bg-slate-100'>
                    <h2 className="font-bold">Products Table</h2>
                </div>
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Image</th>
                                <th>Category</th>
                                <th>Subcategory</th>
                                <th>Variants</th>
                                <th>Price</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item: any, index) => {
                                const categoryName = category.find((cat) => cat._id === item.categoryId)?.name;
                                const subcategoryName = subcategory.find((subcat) => subcat._id === item.subCategoryId)?.name;
                                return (
                                    <tr key={item._id}>
                                        <td>{index + 1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.description}</td>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{categoryName}</td>
                                        <td>{subcategoryName}</td>
                                        <td>{item.variants.join(", ")} </td>
                                        <td><span className="badge badge-ghost badge-sm">{item.price}.Rs</span></td>
                                        <th>
                                            <button className="btn btn-ghost btn-xs">
                                                <Link href={`/admin/single-product/${item._id}`}>See Product</Link>
                                            </button>
                                        </th>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div >
        </>
    )
}
export default page;
