"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

const api_url = "https://fakestoreapi.com/products";

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<Product[]>(api_url);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("Failed to load products");
        setLoading(false);
        router.push("/error");
      }
    };

    fetchProducts();
  }, [router]);

  if (loading)
    return (
      <p className="text-center text-lg font-semibold text-slate-800">
        Loading...
      </p>
    );

  return (
    <div className="container mx-auto px-8 py-12">
      <h1 className="text-4xl font-bold mb-6 text-slate-800 text-center">
        Our Products
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-slate-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
            <Link href={`/products/${product.id}`}>
              <h2 className="text-xl font-semibold mb-2 text-slate-800">
                {product.title}
              </h2>
            </Link>
            <p className="text-slate-600 mb-2">Price: ${product.price}</p>
            <p className="text-slate-600">{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
