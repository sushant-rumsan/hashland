"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import RightHeroImage from "@/components/right-hero";
import { useWriteProjectTransferOwnership } from "../../../hooks/contracts/generated/project";
import { CONTRACT_ADDRESS } from "@/constants/contract";

const TransferLand: React.FC = () => {
  const [formData, setFormData] = useState({
    plotId: "",
    ownerAddress: "",
    ownerUsername: "",
    plotPrice: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  const { writeContract, isPending, isSuccess } =
    useWriteProjectTransferOwnership();

  // Generic handler for form inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { plotId, ownerAddress, ownerUsername, plotPrice } = formData;

    if (!plotId || !ownerAddress || !ownerUsername || !plotPrice) {
      alert("Please fill in all fields");
      return;
    }

    try {
      writeContract({
        address: CONTRACT_ADDRESS,
        args: [BigInt(+formData.plotId), formData.ownerAddress as `0x${string}`, BigInt(+formData.plotPrice)],
      });
      
    } catch (error) {
      console.error("Error transferring plot:", error);
      alert("Failed to transfer plot. Please try again.");
    }
  };

  useEffect(() => {
    if (isSuccess) {
      setSuccessMessage("Transfer ownership was successful!");
      setSuccessMessage(`Plot transferred successfully!`);
      setFormData({ plotId: "", ownerAddress: "", ownerUsername: "", plotPrice: "" });
      setTimeout(() => setSuccessMessage(""), 3000);
    }
  }, [isSuccess]);

  return (
    <>
      <div className="min-h-screen mt-12 flex items-center justify-center bg-cover bg-gradient-to-r from-gray-100 to-gray-200 relative py-12">
        <div className="relative max-w-7xl w-full mx-auto shadow-sm rounded-lg overflow-hidden flex justify-between">
          {/* Left Side - Form & Description */}
          <div className="flex flex-col justify-center w-[60%]">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Transfer Land Plot
            </h1>
            <ul className="text-gray-600 mb-8">
              <li>Government Portal for Land Management.</li>
              <li>You can transfer your land to another account.</li>
              <li className="text-red-600">
                Be cautious, you can't undo transfers and no one can help!!!
              </li>
            </ul>

            {successMessage && (
              <div className="mb-4 p-3 text-green-700 bg-green-100 rounded-lg shadow-md">
                {successMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="plotId" className="block text-left text-gray-600">
                  Plot ID
                </label>
                <input
                  type="text"
                  id="plotId"
                  value={formData.plotId}
                  onChange={handleChange}
                  className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition"
                  placeholder="123456"
                />
              </div>

              <div className="flex w-full gap-4 justify-between">
                <div className="w-full">
                  <label htmlFor="ownerAddress" className="block text-left text-gray-600">
                    New Owner Address
                  </label>
                  <input
                    type="text"
                    id="ownerAddress"
                    value={formData.ownerAddress}
                    onChange={handleChange}
                    className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition"
                    placeholder="0x1234567898765432123456789"
                  />
                </div>

                <div className="w-full">
                  <label htmlFor="ownerUsername" className="block text-left text-gray-600">
                    New Owner Username
                  </label>
                  <input
                    type="text"
                    id="ownerUsername"
                    value={formData.ownerUsername}
                    onChange={handleChange}
                    className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition"
                    placeholder="john_doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="plotPrice" className="block text-left text-gray-600">
                  Plot Price
                </label>
                <p className="text-xs text-gray-500">Used for tax calculations only</p>
                <input
                  type="text"
                  id="plotPrice"
                  value={formData.plotPrice}
                  onChange={handleChange}
                  className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition"
                  placeholder="100000000"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 mt-6 font-bold text-white bg-red-500 rounded-lg shadow-lg hover:from-pink-600 hover:to-red-600 focus:ring-2 focus:ring-pink-500 transition"
                disabled={isPending}
              >
                {isPending ? "Processing..." : "Transfer Plot"}
              </button>

              <p className="mt-2 text-sm">
                Can't transfer?{" "}
                <a href="#" className="text-blue-400">
                  Request support ticket.
                </a>
              </p>
              <p className="text-xs -mt-2">Only landowners can request.</p>
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

export default TransferLand;
