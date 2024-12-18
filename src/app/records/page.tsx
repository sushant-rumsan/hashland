"use client";

import RightHeroImage from "@/components/right-hero";
import React, { useState } from "react";
import { useReadProjectGetPlot } from "../../../hooks/contracts/generated/project";
import { CONTRACT_ADDRESS } from "@/constants/contract";

const Records: React.FC = () => {
  const [plotId, setPlotId] = useState("");
  const { data } = useReadProjectGetPlot({
    address: CONTRACT_ADDRESS,
    args: [BigInt(plotId)],
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setPlotId(e.target["plotId"]?.value as string);
  };

  return (
    <>
      <div className="min-h-screen mt-8 flex flex-col items-center justify-center bg-cover bg-gradient-to-r from-gray-100 to-gray-200 relative py-12">
        <div className="relative max-w-7xl w-full mx-auto shadow-sm rounded-lg overflow-hidden flex justify-between">
          {/* Left Side - Form & Description */}
          <div className="flex flex-col justify-center w-[60%] p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              View Land Record
            </h1>
            <ul className="text-gray-600 mb-8">
              <li>Government Portal for Land Management.</li>
              <li>Can be accessed by everyone.</li>
            </ul>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="plotId"
                  className="block text-left text-gray-600"
                >
                  Plot ID
                </label>
                <input
                  type="text"
                  id="plotId"
                  name="plotId"
                  className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition"
                  placeholder="123456"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 mt-6 font-bold text-white bg-gradient-to-r from-pink-500 to-red-500 rounded-lg shadow-lg hover:from-pink-600 hover:to-red-600 focus:ring-2 focus:ring-pink-500 transition"
              >
                View Record
              </button>

              <p className="mt-2 text-sm">
                Can't find your land?{" "}
                <a href="#" className="text-blue-400">
                  Request support ticket.
                </a>
              </p>

              <p className="text-xs -mt-2">Anyone can request.</p>
            </form>
          </div>

          {/* Right Side - Image */}
          <div className="relative w-[30%] flex justify-end">
            <RightHeroImage />
          </div>
        </div>
        {data && data[1] != '' && (
          <div className="relative max-w-7xl w-full mx-auto mt-8 shadow-sm rounded-lg overflow-hidden p-8">
            <h3 className="text-3xl mb-6">Records</h3>
            <div className="grid grid-cols-3 gap-6">
              <div className="p-4 bg-gray-100 rounded-lg shadow-md">
                <h3 className="text-sm font-semibold text-gray-600">
                  Location
                </h3>
                <p className="text-sm text-gray-800">{data[1]}</p>
              </div>
              <div className="p-4 bg-gray-100 rounded-lg shadow-md">
                <h3 className="text-sm font-semibold text-gray-600">Owner</h3>
                <p className="text-gray-800 text-sm">{data[2]}</p>
              </div>
              <div className="p-4 bg-gray-100 rounded-lg shadow-md">
                <h3 className="text-sm font-semibold text-gray-600">
                  Last Traded Price
                </h3>
                <p className="text-sm text-gray-800">Rs {data[3]}</p>
              </div>
            </div>
          </div>
        )}
        
      </div>

      
    </>
  );
};

export default Records;
