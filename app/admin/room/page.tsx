import TableRoom from "@/components/admin/room/TableRoom";
import Link from "next/link";
import { Suspense } from "react";

const RoomPage = () => {
  return (
    <div className="max-w-7xl px-4 py-16 mt-10 mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Daftar Kamar</h1>
        <Link href="/admin/room/create" className="bg-linear-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl">
          Buat Baru
        </Link>
      </div>
      <Suspense fallback={<div>Loading Data...</div>}>
        <TableRoom />
      </Suspense>
    </div>
  );
};

export default RoomPage;
