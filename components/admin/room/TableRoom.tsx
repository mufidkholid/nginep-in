import { getRooms } from "@/lib/data";
import { formatCurrency, formatDate } from "@/lib/utils";
import Image from "next/image";
import { DeleteButton, EditButton } from "./Button";


const TableRoom = async () => {
  const rooms = await getRooms();

  if(!rooms?.length) return <p>No Room Found</p>

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-linear-to-r from-gray-50 to-gray-100">
            <tr>
              <th className="px-6 py-4 text-left">
                <span className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Gambar</span>
              </th>
              <th className="px-6 py-4 text-left">
                <span className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Nama Kamar</span>
              </th>
              <th className="px-6 py-4 text-left">
                <span className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Harga</span>
              </th>
              <th className="px-6 py-4 text-left">
                <span className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Tanggal Dibuat</span>
              </th>
              <th className="px-6 py-4 text-center">
                <span className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Aksi</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {rooms.map((room) => (
              <tr key={room.id} className="hover:bg-blue-50 transition-colors duration-200">
                <td className="px-6 py-4">
                  <div className="h-16 w-24 relative rounded-lg overflow-hidden border border-gray-200">
                    <Image src={room.image} fill sizes="20vw" alt={room.name} className="object-cover" />
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="font-medium text-gray-900">{room.name}</span>
                </td>
                <td className="px-6 py-4">
                  <span className="font-semibold text-blue-600">{formatCurrency(room.price)}</span>
                  <span className="text-gray-500 text-sm ml-1">/malam</span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-gray-600">{formatDate(room.createdAt.toString())}</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-center space-x-2">
                    <EditButton id={room.id} />
                    <DeleteButton id={room.id} image={room.image} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {rooms.length === 0 && (
        <div className="text-center py-12">
          <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
          <p className="text-gray-500 text-lg">Belum ada data kamar</p>
        </div>
      )}
    </div>
  );
}

export default TableRoom