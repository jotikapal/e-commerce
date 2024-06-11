"use client"
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [click, setClick] = useState(true);

  function handleclick() {
    if (click) {
      return "clicked"
    } else {
      return "click"
    }
  }

  useEffect(() => {
    handleclick()
  })

  return (
    <>
      <div className="flex justify-center">Home</div>
      <button className="bg-black text-white h-6" onClick={() => setClick(prevClick => !prevClick)}>{handleclick()}</button>
    </>
  );
}
