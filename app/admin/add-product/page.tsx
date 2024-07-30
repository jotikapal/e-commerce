"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@supabase/supabase-js";
import { v4 as uuidv4 } from "uuid";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

interface SupabaseRef {
  data: {
    path: string;
    fullPath: string;
    id: string;
  },
  error: any
}
const Page = () => {
  const [error, setError] = useState("");
  const [file, setFile] = useState<string | null>(null);
  const [uploadStatus, setUploadStatus] = useState("");
  const [category, setCategory] = useState([])
  const [subcategory, setSubcategory] = useState([])

  const variants = ['size', 'color', 'fabric'];
  const [selectedVariants, setSelectedVariants] = useState([]);

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
    const productName = e.target[0].value;
    const description = e.target[1].value;
    const image = e.target[2].value;
    const categoryId = e.target[3].value;
    const subCategoryId = e.target[4].value;
    const variants = e.target[5].value;
    const price = e.target[6].value;

    if (!file) {
      return alert('please upload file')
    }

    if (
      !validateField(productName, "ProductName") ||
      !validateField(description, "Description") ||
      !validateField(image, "Image") ||
      !validateField(categoryId, "Category") ||
      !validateField(subCategoryId, "Subcategory") ||
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
          productName,
          description,
          image: `${supabaseUrl}/storage/v1/object/public/${file}`,
          categoryId,
          subCategoryId,
          variants: selectedVariants,
          price: Number(price),
        }),
      });
      if (response.ok) {
        setError("");
        router.push("/admin/all-products");
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Error,try again");
        // notifiction
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

  useEffect(() => {

    const fetchCategory = async () => {
      try {
        const response = await fetch('/api/category');
        if (!response.ok) {
          throw new Error('Failed to fetch Category')
        }
        const data = await response.json()
        setCategory(data)
      } catch (error) {
        console.log('Error fetching Category:', error)
      }
    }

    const fetchSubcategory = async () => {
      try {
        const response = await fetch('/api/subcategory');
        if (!response.ok) {
          throw new Error('Failed to fetch Subcategory')
        }
        const data = await response.json()
        setSubcategory(data);
      } catch (error) {
        console.log('Error fetching Subcategory:', error)
      }
    }

    fetchCategory()
    fetchSubcategory()

  }, []);

  const handleVariantChange = (item: string) => {
    setSelectedVariants(prevVariants => prevVariants.includes(item) ? prevVariants.filter(variant => variant !== item) : [...prevVariants, item]);
  };

  console.log(selectedVariants, "selectedVariants")

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
            placeholder="ProductName"
            required
          />

          <textarea
            className="textarea border mb-5 p-2 w-full rounded focus:outline-none focus:border-blue-400 focus:text-black"
            placeholder="Description"
          ></textarea>


          <input type="file" onChange={handleFileChange} />
          {uploadStatus && <p>{uploadStatus}</p>}
          {file ? <img style={{ width: 200, height: 200 }} src={`${supabaseUrl}/storage/v1/object/public/${file}`} alt="product image" /> : null}

          <label className="w-full mb-2 mr-10">Category:</label>
          <select
            className="border rounded focus:outline-none focus:border-blue-400 focus:text-black mb-5 p-2"
            required
          >
            <option value="">Select Category</option>
            {category.map((item: any) => (
              <option value={item._id} key={item._id}>{item.name}</option>
            ))}
          </select>
          <br />

          <label className="w-full mb-2 mr-3">Subcategory:</label>
          <select
            className="border rounded focus:outline-none focus:border-blue-400 focus:text-black mb-5 p-2"
            required
          >
            <option value="">Select Subcategory</option>
            {subcategory.map((item: any) => (
              <option value={item._id} key={item._id}>{item.name}</option>
            ))}
          </select>
          <br />

          <label className="w-full mb-2 mr-12">Variants:</label>
          <select
            className="border rounded focus:outline-none focus:border-blue-400 focus:text-black mb-5 p-2"
            required
            value={selectedVariants}
            onChange={(e) => handleVariantChange(e.target.value)}
            multiple
          >
            <option value="">Select Variants</option>
            {variants.map((item, index) => (
              <option value={item} key={index}>{item}</option>
            ))}
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
