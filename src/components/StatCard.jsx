import React from "react";

const StatCard = ({ title, value, description, color }) => {
  return (
    <div className="w-full sm:w-1/2 lg:w-1/4 bg-white shadow-lg rounded-lg p-4">
      <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
      <p className={`text-2xl font-bold ${color} mt-2`}>{value}</p>
      <p className="text-sm text-gray-500 mt-1">{description}</p>
    </div>
  );
};

export default StatCard;
