"use client";

import React, { useEffect, useState } from "react";

interface Condition {
  conditionName: string;
  conditionType: string;
  conditionClassList: string[];
  backoffType: string;
  backoffValue: number;
}

const ViewConditionsPage = () => {
  const [conditions, setConditions] = useState<Condition[]>([]);

  useEffect(() => {
    const fetchConditions = async () => {
      const res = await fetch("/api/get-conditions");
      const data = await res.json();
      setConditions(data);
    };

    fetchConditions();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Submitted Conditions
      </h1>

      {conditions.length === 0 ? (
        <p className="text-center text-gray-400">No conditions found.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {conditions.map((condition, idx) => (
            <div
              key={idx}
              className="bg-gray-800 rounded-lg shadow-md p-5 border border-gray-700"
            >
              <h2 className="text-xl font-semibold mb-3 text-blue-400">
                {condition.conditionName}
              </h2>
              <ul className="space-y-1 text-sm text-gray-300">
                <li>
                  <span className="font-medium text-white">Type:</span>{" "}
                  {condition.conditionType}
                </li>
                <li>
                  <span className="font-medium text-white">Backoff Type:</span>{" "}
                  {condition.backoffType}
                </li>
                <li>
                  <span className="font-medium text-white">Backoff Value:</span>{" "}
                  {condition.backoffValue}
                </li>
                <li>
                  <span className="font-medium text-white">Classes:</span>{" "}
                  <ul className="list-disc list-inside ml-4">
                    {condition.conditionClassList.map((cls, i) => (
                      <li key={i}>{cls}</li>
                    ))}
                  </ul>
                </li>
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ViewConditionsPage;
