"use client";
import { useState, useEffect } from "react";
import axios from "axios";

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
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-lg text-gray-700">Loading...</p>
      </div>
    );
  if (error)
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <p className="text-lg text-red-500">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Retry
        </button>
      </div>
    );

  if (!product)
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-lg text-gray-700">Product not found</p>
      </div>
    );

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <div className="flex flex-col items-center">
        <img
          src={product.image}
          alt={product.title}
          className="w-full max-w-sm object-cover rounded-md mb-4"
        />
        <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
        <p className="text-xl text-green-500 mb-4">Price: ${product.price}</p>
        <p className="text-gray-700">{product.description}</p>
      </div>
    </div>
  );
};

export default Product;
