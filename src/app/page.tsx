"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import { FaLandmark } from "react-icons/fa"; // For a small icon in the description
import RightHeroImage from "@/components/right-hero";
import { useWriteProjectRegisterPlot } from "../../hooks/contracts/generated/project";
import { CONTRACT_ADDRESS } from "@/constants/contract";

const RegisterLand: React.FC = () => {
  const [plotId, setPlotId] = useState("");
  const [location, setLocation] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const {writeContract, isPending, isSuccess} = useWriteProjectRegisterPlot();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (plotId && location) {
      

        writeContract({
          address: CONTRACT_ADDRESS,
          args: [BigInt(+plotId), location, BigInt(0)],
        });

    } else {
      alert("Please fill in both Plot ID and Location");
    }
  };

  useEffect(() => {
    if(isSuccess) {
      setSuccessMessage(`Plot ID ${plotId} registered successfully!`);
      setPlotId("");
      setLocation("");
      setTimeout(() => setSuccessMessage(""), 3000); // clear message after 3 seconds
    }
  }, [isSuccess])

  return (
    <>
      <div className="min-h-screen mt-8 flex items-center justify-center bg-cover bg-gradient-to-r from-gray-100 to-gray-200 relative py-12">
        <div className="relative max-w-7xl w-full mx-auto shadow-sm rounded-lg overflow-hidden flex justify-between">
          {/* Left Side - Form & Description */}
          <div className="  flex flex-col justify-center w-[60%]">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Register Land Plot
            </h1>
            <ul className="text-gray-600 mb-8">
              <li>Government Portal for Land Management.</li>
              <li>Can be accessed by state government and local government.</li>
            </ul>

            {successMessage && (
              <div className="mb-4 p-3 text-green-700 bg-green-100 rounded-lg shadow-md">
                {successMessage}
              </div>
            )}

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
                  value={plotId}
                  onChange={(e) => setPlotId(e.target.value)}
                  className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition"
                  placeholder="123456"
                />
              </div>

              <div>
                <label
                  htmlFor="location"
                  className="block text-left text-gray-600"
                >
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition"
                  placeholder="Kathmandu"
                />
              </div>

              <button
              disabled={isPending}
                type="submit"
                className="w-full py-3 mt-6 font-bold text-white bg-gradient-to-r from-pink-500 to-red-500 rounded-lg shadow-lg hover:from-pink-600 hover:to-red-600 focus:ring-2 focus:ring-pink-500 transition"
              >
                {isPending ? 'Registering...' : 'Register Plot'}
              </button>

              <p className="mt-2 text-sm">
                Can't register?{" "}
                <a href="#" className="text-blue-400">
                  Request support ticket.
                </a>
              </p>
              <p className="text-xs -mt-2">
                Only registered government employees can request.
              </p>
            </form>
          </div>

          {/* Right Side - Image */}
          <div className="relative w-[30%] flex justify-end">
            <RightHeroImage />
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterLand;
