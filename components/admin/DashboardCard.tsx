import { getRevenueAndReserve, getTotalCustomers } from "@/lib/data";
import { formatCurrency } from "@/lib/utils";
import { notFound } from "next/navigation";
import { LuChartArea, LuShoppingCart, LuUsers } from "react-icons/lu";

const DashboardCards = async () => {
  const [data, customer] = await Promise.all([
    getRevenueAndReserve(),
    getTotalCustomers(),
  ]);
  if(!data || !customer) return notFound()

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-4 pb-10">
      {/* Total Revenue */}
      <div className="flex items-center bg-white border border-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="p-5 bg-linear-to-br from-green-400 to-green-500 flex items-center justify-center">
          <LuChartArea className="size-10 text-white" />
        </div>
        <div className="px-5 py-3 text-gray-700">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Total Pendapatan</h3>
          <p className="text-2xl font-bold text-gray-800 mt-1">{formatCurrency(data.revenue)}</p>
        </div>
      </div>

      {/* Total Reservation */}
      <div className="flex items-center bg-white border border-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="p-5 bg-linear-to-br from-red-400 to-red-500 flex items-center justify-center">
          <LuShoppingCart className="size-10 text-white" />
        </div>
        <div className="px-5 py-3 text-gray-700">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Total Reservasi</h3>
          <p className="text-2xl font-bold text-gray-800 mt-1">{data.reserve}</p>
        </div>
      </div>

      {/* Total Customers */}
      <div className="flex items-center bg-white border border-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="p-5 bg-linear-to-br from-blue-400 to-indigo-500 flex items-center justify-center">
          <LuUsers className="size-10 text-white" />
        </div>
        <div className="px-5 py-3 text-gray-700">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Total Pelanggan</h3>
          <p className="text-2xl font-bold text-gray-800 mt-1">{customer.length}</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardCards;
