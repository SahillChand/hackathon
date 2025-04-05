"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const SearchPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    conditionName: "",
    conditionType: "",
    conditionClassList: "",
    backoffType: "",
    backoffValue: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "backoffValue" ? Number(value) : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const payload = {
      ...formData,
      conditionClassList: formData.conditionClassList
        .split(",")
        .map((s) => s.trim()),
    };
    router.push("/results");
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-6">
      <div className="bg-gray-800 rounded-lg shadow-lg p-8 max-w-lg w-full">
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Submit Condition
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-300 mb-1">Condition Name</label>
            <input
              name="conditionName"
              value={formData.conditionName}
              onChange={handleChange}
              placeholder="Enter condition name"
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-1">Condition Type</label>
            <input
              name="conditionType"
              value={formData.conditionType}
              onChange={handleChange}
              placeholder="Enter condition type"
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-1">
              Condition Class List
            </label>
            <input
              name="conditionClassList"
              value={formData.conditionClassList}
              onChange={handleChange}
              placeholder="Comma separated class names"
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-1">Backoff Type</label>
            <input
              name="backoffType"
              value={formData.backoffType}
              onChange={handleChange}
              placeholder="Enter backoff type"
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-1">Backoff Value</label>
            <input
              type="number"
              name="backoffValue"
              value={formData.backoffValue}
              onChange={handleChange}
              placeholder="Enter backoff value"
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="mt-4 bg-blue-600 px-6 py-3 rounded-md text-white font-semibold hover:bg-blue-700 transition duration-200"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchPage;
