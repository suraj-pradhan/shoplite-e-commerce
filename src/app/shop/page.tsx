"use client";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import OfferBar from "@/components/OfferBar";
import { useEffect, useState } from "react";

export default function Shop() {
  const [product, setProduct] = useState([] as any[]);
  useEffect(() => {
    const getData = async () => {
      const query = await fetch("https://dummyjson.com/products");
      const response = await query.json();
      setProduct(response.products);
    };
    getData();
  });
  return (
    <main>
      <OfferBar />
      <NavBar />
      <h1>Product List</h1>
      {product.map((item) => (
        <div key={item.title}>
          <h2>
            Name: {item.title}
            <Image
              src={item.images[0]}
              alt="Image placeholder"
              width={200}
              height={100}
            ></Image>
          </h2>
        </div>
      ))}
      <Footer />
    </main>
  );
}
