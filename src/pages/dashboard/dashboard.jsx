import React from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import StatCard from "../../components/StatCard";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="p-6 flex flex-wrap gap-6">
          <StatCard
            title="Users"
            value="1,234"
            description="New users this month"
            color="text-blue-600"
          />
          <StatCard
            title="Revenue"
            value="$12,345"
            description="Earnings this month"
            color="text-green-600"
          />
          <StatCard
            title="Orders"
            value="567"
            description="Pending orders"
            color="text-orange-500"
          />
          <StatCard
            title="Products"
            value="78"
            description="Active products"
            color="text-purple-500"
          />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
