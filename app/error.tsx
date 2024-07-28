"use client";
import Link from "next/link";
import React from "react";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-gray-50">
      <div className="max-w-md text-center">
        <h1 className="text-6xl font-bold text-red-600 mb-4">Oops!</h1>
        <h2 className="text-3xl font-semibold text-slate-800 mb-4">
          Something Went Wrong
        </h2>
        <p className="text-lg text-slate-600 mb-6">
          We are experiencing some technical difficulties. Please try again
          later.
        </p>
        <img
          src="/images/error.svg" // Ensure this image exists or use a different one
          alt="Error"
          className="w-full h-auto max-w-sm mx-auto mb-6"
        />
        <Link
          href="/"
          className="inline-block px-6 py-3 text-lg font-medium text-white bg-cyan-600 rounded-lg shadow-lg hover:bg-cyan-700 transition-colors"
        >
          Back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
