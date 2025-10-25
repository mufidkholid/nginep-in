
import { getReservations } from "@/lib/data";
import { formatCurrency, formatDate } from "@/lib/utils";
import Image from "next/image";


const ReservationList = async () => {
  const reservation = await getReservations();

  if (!reservation) return <p>No Reservation Found</p>;

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
                <span className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Nama Pemesan</span>
              </th>
              <th className="px-6 py-4 text-left">
                <span className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Check-in</span>
              </th>
              <th className="px-6 py-4 text-left">
                <span className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Check-out</span>
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
                <span className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Status</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {reservation.map((reserve) => (
              <tr key={reserve.id} className="hover:bg-blue-50 transition-colors duration-200">
                <td className="px-6 py-4">
                  <div className="h-16 w-24 relative rounded-lg overflow-hidden border border-gray-200">
                    <Image src={reserve.Room.image} fill sizes="20vw" alt={reserve.Room.name} className="object-cover" />
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="font-medium text-gray-900">{reserve.User.name}</span>
                </td>
                <td className="px-6 py-4">
                  <span className="font-medium text-gray-900">{formatDate(reserve.startDate.toISOString())}</span>
                </td>
                <td className="px-6 py-4">
                  <span className="font-medium text-gray-900">{formatDate(reserve.endDate.toISOString())}</span>
                </td>
                <td className="px-6 py-4">
                  <span className="font-medium text-gray-900">{reserve.Room.name}</span>
                </td>
                <td className="px-6 py-4">
                  <span className="font-semibold text-blue-600"> {formatCurrency(reserve.Payment?.amount || reserve.price)}</span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-gray-600">{formatDate(reserve.createdAt.toISOString())}</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-center">
                    <span
                      className={`px-3 py-1.5 rounded-full text-xs font-semibold capitalize ${
                        reserve.Payment?.status === "paid"
                          ? "bg-green-100 text-green-700 border border-green-200"
                          : reserve.Payment?.status === "unpaid"
                          ? "bg-orange-100 text-orange-700 border border-orange-200"
                          : "bg-gray-100 text-gray-700 border border-gray-200"
                      }`}
                    >
                      {reserve.Payment?.status === "paid" ? "Lunas" : reserve.Payment?.status === "unpaid" ? "Belum Bayar" : reserve.Payment?.status}
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {reservation.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📋</span>
            </div>
            <p className="text-gray-500 text-lg">Belum ada data reservasi</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ReservationList