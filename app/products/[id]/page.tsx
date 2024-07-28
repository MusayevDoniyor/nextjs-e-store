"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation"; // Use useRouter from 'next/navigation'

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

const api_url = "https://fakestoreapi.com/products";

const Product = ({ params }: { params: { id: string } }) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get<Product>(`${api_url}/${params.id}`);
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
        setError("Failed to load product");
        setLoading(false);
      }
    };

    fetchProduct();
  }, [params.id]);

  if (loading)
    return (
      <div className="container mx-auto px-8 py-12 text-center">
        <p className="text-lg font-semibold text-slate-800">Loading...</p>
      </div>
    );
  if (error)
    return (
      <div className="container mx-auto px-8 py-12 text-center">
        <p className="text-lg font-semibold text-red-600">{error}</p>
      </div>
    );

  if (!product)
    return (
      <div className="container mx-auto px-8 py-12 text-center">
        <p className="text-lg font-semibold text-slate-800">
          Product not found
        </p>
      </div>
    );

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto bg-slate-100 p-6 rounded-lg shadow-lg">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-96 object-cover rounded-t-lg mb-4"
        />
        <h1 className="text-3xl font-bold mb-4 text-slate-800 text-center">
          {product.title}
        </h1>
        <p className="text-xl font-semibold mb-2 text-slate-800 text-center">
          Price: ${product.price}
        </p>
        <p className="text-slate-600 text-center">{product.description}</p>
      </div>
    </div>
  );
};

export default Product;
