import React from "react";

const Grocery = () => {
    return (
        <div className="grocery bg-gray-100 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mt-8">
            {/* Title Section */}
            <h1 className="text-2xl font-bold text-green-700 mb-4">
                Welcome to Our Grocery Store
            </h1>
            
            {/* Store Description */}
            <p className="text-gray-800 text-lg mb-6">
                We offer a wide variety of fresh and high-quality groceries to meet all your daily needs. Explore our collection of fruits, vegetables, dairy products, and much more.
            </p>
            
            {/* Grocery Items */}
            <div className="mb-6">
                <h2 className="text-xl font-semibold text-green-600 mb-2">Our Bestsellers:</h2>
                <ul className="list-disc list-inside text-gray-700">
                    <li>Fresh Fruits & Vegetables</li>
                    <li>Dairy Products</li>
                    <li>Snacks & Beverages</li>
                    <li>Grains, Pulses & Spices</li>
                    <li>Bakery Items</li>
                </ul>
            </div>
            
            {/* Action Button */}
            <button
                type="button"
                className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-all"
            >
                Shop Now
            </button>
        </div>
    );
};

export default Grocery;
