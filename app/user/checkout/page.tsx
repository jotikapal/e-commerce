"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const Checkout = () => {
  interface Product {
    _id: number;
    image: string;
    productName: string;
    price: number;
    quantity: number;
  }

  const [products, setProducts] = useState<Product[]>([]);
  const [userdata, setUserData] = useState<any>(null);
  const [totalPrice, setTotalPrice] = useState(0);
  // const overAllPrice= (70);
  const tax = 70;
  const [error, setError] = useState("");

  const router = useRouter();
  const { data: session } = useSession();
  console.log(session, "session");

  const fetchUserdata = async (userId: any) => {
    try {
      const response = await fetch(`/api/signup/${userId}`);
      if (!response.ok) {
        throw new Error("Failed to fetch User data");
      }
      const data = await response.json();
      // console.log(data, "data");
      setUserData(data);
      // console.log(userdata, "userdata1");
    } catch (error: any) {
      console.error("Error fetching User data:", error);
    }
  };
  console.log(userdata, "userdata");

  useEffect(() => {
    if (session) {
      const userId = session.user.id;
      fetchUserdata(userId);
      // console.log(userId, "userId");
      // console.log(session, "session");
    }

    const allProducts = JSON.parse(localStorage.getItem("cart") || "[]");
    setProducts(allProducts);

    const total = allProducts.reduce(
      (sum: number, item: Product) => sum + item.price * item.quantity,
      0
    );
    setTotalPrice(total);
    // setOverAllPrice(70 + total);
  }, [session]);

  const validateField = (field: any, fieldName: any) => {
    if (!field || field.length <= 2) {
      setError(`${fieldName} is invalid`);
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("dcjsdvsv")

    const firstName = e.target[0].value;
    const lastName = e.target[1].value;
    const email = e.target[2].value;
    const contactNumber = e.target[3].value;
    const addressLine = e.target[4].value;
    const city = e.target[5].value;
    const state = e.target[6].value;
    const zipCode = e.target[7].value;

    if (
      !validateField(firstName, "First Name") ||
      // !validateField(lastName, "Last Name") ||
      !validateField(email, "Email") ||
      !validateField(contactNumber, "Contact no.") ||
      !validateField(addressLine, "Address Line") ||
      !validateField(city, "City") ||
      !validateField(state, "State") ||
      !validateField(zipCode, "Zip Code")
    ) {
      return;
    }
    setError("");
    console.log("dcjsdvsv 234234")

    try {
      const response = await fetch("/api/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: session.user.id,
          // addressId:,
          firstName,
          lastName,
          email,
          contactNumber,
          addressLine,
          city,
          state,
          zipCode,
          products,
          totalPrice: totalPrice + tax,
          // productName, description, image, categoryId, subCategoryId, variants, price
        }),
      });
      if (response.ok) {
        setError("");
        router.push("/admin/");
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
  // console.log(userdata,"userdata")
  return (
    <div>
      <div className="font-[sans-serif] bg-white">
        <div className="flex max-sm:flex-col gap-12 max-lg:gap-4 h-full">
          <div className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 sm:h-screen sm:sticky sm:top-0 lg:min-w-[370px] sm:min-w-[300px]">
            <div className="relative h-full">
              <div className="px-4 py-8 sm:overflow-auto sm:h-[calc(100vh-60px)]">
                <div className="space-y-4">
                  {products.map((item) => (
                    <div className="flex items-start gap-4" key={item._id}>
                      <div className="w-32 h-28 max-lg:w-24 max-lg:h-24 flex p-3 shrink-0 bg-gray-300 rounded-md">
                        <img
                          src={item.image}
                          className="w-full object-contain"
                        />
                      </div>
                      <div className="w-full">
                        <h3 className="text-base text-white">
                          {item.productName}
                        </h3>
                        <ul className="text-xs text-gray-300 space-y-2 mt-2">
                          <li className="flex flex-wrap gap-4">
                            Size <span className="ml-auto">37</span>
                          </li>
                          <li className="flex flex-wrap gap-4">
                            Quantity{" "}
                            <span className="ml-auto">{item.quantity}</span>
                          </li>
                          <li className="flex flex-wrap gap-4">
                            Total Price{" "}
                            <span className="ml-auto">
                              {item.quantity > 1
                                ? item.price * item.quantity
                                : item.price}
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-white my-4 text-xs space-y-2">
                  <div className="flex justify-between">
                    <p className="">Product Price: </p>
                    {totalPrice}
                  </div>
                  <div className="flex justify-between">
                    <p className="">Shipping charges: </p>50
                  </div>
                  <div className="flex justify-between">
                    <p className="mb-2">Tax: </p>20
                  </div>
                </div>
              </div>

              <div className="md:absolute md:left-0 md:bottom-0 bg-gray-800 w-full p-4 text-white">
                <h4 className="flex flex-wrap gap-4 text-base ">
                  Total <span className="ml-auto">{totalPrice + tax}</span>
                </h4>
              </div>
            </div>
          </div>

          <div className="max-w-4xl w-full h-max rounded-md px-4 py-8 sticky top-0">
            <h2 className="text-2xl font-bold text-gray-800">
              Complete your order
            </h2>
            <form className="mt-8" onSubmit={handleSubmit}>
              <div>
                <h3 className="text-base text-gray-800 mb-4">
                  Personal Details
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="First Name"
                      value={userdata ? userdata.firstName : ""}
                      className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                      required
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      placeholder="Email *"
                      value={userdata ? userdata.email : ""}
                      className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                      required
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Contact no. *"
                      pattern="[0-9]{10,10}"
                      maxlength="10"
                      value={userdata ? userdata.contactNumber : ""}
                      className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-base text-gray-800 mb-4">
                  Shipping Address
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <textarea
                      placeholder="Address Line"
                      className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="City"
                      className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="State"
                      className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Zip Code"
                      className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                    />
                  </div>
                </div>

                <div className="flex gap-4 max-md:flex-col mt-8">
                  <button
                    type="button"
                    className="rounded-md px-6 py-3 w-full text-sm tracking-wide bg-transparent hover:bg-gray-100 border border-gray-300 text-gray-800 max-md:order-1"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="rounded-md px-6 py-3 w-full text-sm tracking-wide bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    Complete Purchase
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
