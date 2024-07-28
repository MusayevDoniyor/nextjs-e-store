import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-gray-50">
      <div className="max-w-md text-center">
        <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-slate-800 mb-4">
          Oops! Page Not Found
        </h2>
        <p className="text-lg text-slate-600 mb-6">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <img
          src="/not-found.svg" // Ensure you have an appropriate image or illustration
          alt="404 Not Found"
          className="w-full h-auto max-w-sm mx-auto mb-6"
        />
        <Link
          href="/"
          className="inline-block px-6 py-3 text-lg font-medium text-white bg-cyan-600 rounded-lg shadow-lg hover:bg-cyan-700 transition-colors"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
