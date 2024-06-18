"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@supabase/supabase-js";
import { v4 as uuidv4 } from "uuid";

const supabaseUrl =  process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey =  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
 
const supabase = createClient(supabaseUrl, supabaseKey);

interface SupabaseRef  {
    data: {
        path: string;
        fullPath: string;
        id: string;
    },
    error:any
}
const Page = () => {
  const [error, setError] = useState("");
  const [file, setFile] = useState<string | null>(null);
  const [uploadStatus, setUploadStatus] = useState("");
  const router = useRouter();

  const validateField = (field: any, fieldName: any) => {
    if (!field || field.length <= 2) {
      setError(`${fieldName} is invalid`);
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const name = e.target[0].value;
    const description = e.target[1].value;
    const image = e.target[2].value;
    const category = e.target[3].value;
    const subcategory = e.target[4].value;
    const variants = e.target[5].value;
    const price = e.target[6].value;

    if(!file){
        return alert('please upload file')
    }

    if (
      !validateField(name, "Name") ||
      !validateField(description, "Description") ||
      !validateField(image, "Image") ||
      !validateField(category, "Category") ||
      !validateField(subcategory, "Subcategory") ||
      !validateField(variants, "Variants") ||
      !validateField(price, "Price")
    ) {
      return;
    }
    setError("");

    try {
      const response = await fetch("/api/product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          description,
          image: `${supabaseUrl}/storage/v1/object/public/${file}`,
          category,
          subcategory,
          variants,
          price: Number(price),
        }),
      });
      if (response.ok) {
        setError("");
        router.push("/all-products");
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Error,try again");
      }
    } catch (error) {
      setError("Error, try again");
      console.log(error);
    }
  };

  const handleFileChange = (event: any) => {
    handleFileUpload(event.target.files[0]);
  };

  const handleFileUpload = async (file: any) => {
    if (!file) {
      alert("Please select a file to upload.");
      return;
    }
    try {
      const fileName = `${uuidv4()}.png`; // Generate a new UUID for the file name
      setFile(null);
      const { data, error } = await supabase.storage
        .from("e-commerce")
        .upload(`products/${fileName}`, file, {
          cacheControl: "3600",
          upsert: false,
        }) as SupabaseRef;
      console.log(data, "data");

      if (error) {
        setUploadStatus(`Error: ${error.message}`);
      } else {
        setUploadStatus(`File uploaded successfully:  `);
        setFile(data?.fullPath)
      }
    } catch (error: any) {
      setUploadStatus(`Error: ${error.message}`);
    }
  };

  return (
    <div className="mt-5">
      <div className="flex justify-center flex-col border rounded bg-gray-100 p-5 ml-5">
        <div className="flex mb-10 mt-7">
          <h2 className="text-xl font-medium pl-2">Add Product</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="w-full border rounded focus:outline-none focus:border-blue-400 focus:text-black mb-5 p-2"
            placeholder="Name"
            required
          />
          {/* <input
                        type='text'
                        className='w-full border rounded focus:outline-none focus:border-blue-400 focus:text-black mb-5 p-2'
                        placeholder='Description'
                        required
                    /> */}
          <textarea
            className="textarea border mb-5 p-2 w-full rounded focus:outline-none focus:border-blue-400 focus:text-black"
            placeholder="Description"
          ></textarea>
          {/* <input
                        type='text'
                        className='w-full border rounded focus:outline-none focus:border-blue-400 focus:text-black mb-5 p-2'
                        placeholder='Image'
                        required
                    /> */}
          <input type="file" onChange={handleFileChange} />
          {uploadStatus && <p>{uploadStatus}</p>}
          { file ? <img style={{ width: 200 ,height: 200}} src={`${supabaseUrl}/storage/v1/object/public/${file}`} alt="product image" /> : null}
          <label className="w-full mb-2 mr-10">Category:</label>
          <select
            className="border rounded focus:outline-none focus:border-blue-400 focus:text-black mb-5 p-2"
            required
          >
            <option value="">Select Category</option>
            <option value="category1">Category one</option>
            <option value="category2">Category two</option>
          </select>
          <br />
          <label className="w-full mb-2 mr-3">Subcategory:</label>
          <select
            className="border rounded focus:outline-none focus:border-blue-400 focus:text-black mb-5 p-2"
            required
          >
            <option value="">Select Subcategory</option>
            <option value="subcategory1">Subcategory one</option>
            <option value="subcategory2">Subcategory two</option>
          </select>
          <br />
          <label className="w-full mb-2 mr-12">Variants:</label>
          <select
            className="border rounded focus:outline-none focus:border-blue-400 focus:text-black mb-5 p-2"
            required
          >
            <option value="">Select Variants</option>
            <option value="variant1">Variant one</option>
            <option value="variant2">Variant two</option>
          </select>
          <br />
          <input
            type="number"
            className="w-full border rounded focus:outline-none focus:border-blue-400 focus:text-black mb-5 p-2"
            placeholder="Price"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-400 mb-10"
          >
            Submit
          </button>
          {error && <p className="text-red-600 text-[16px] mt-4">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Page;
