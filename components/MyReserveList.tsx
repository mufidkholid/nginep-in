import { getReservationByUserId } from "@/lib/data";
import { formatCurrency, formatDate } from "@/lib/utils";
import Image from "next/image";
import { notFound } from "next/navigation";
import { differenceInCalendarDays } from "date-fns";
import Link from "next/link";

const MyReserveList = async () => {
  const reservaton = await getReservationByUserId();
  if (!reservaton) return notFound();

  return (
    <div className="space-y-6">
      {reservaton.map((item) => (
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl" key={item.id}>
          {/* Header */}
          <div className="bg-linear-to-r from-blue-50 to-indigo-50 px-6 py-4 border-b border-gray-200">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <h1 className="text-lg font-semibold text-gray-800">Reservasi #{item.id}</h1>
              </div>
              <div className="flex items-center space-x-2 mt-2 md:mt-0">
                <span className="text-sm text-gray-600">Status:</span>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase ${item.Payment?.status === "unpaid" ? "bg-red-100 text-red-700 border border-red-200" : "bg-green-100 text-green-700 border border-green-200"}`}>
                  {item.Payment?.status === "unpaid" ? "Belum Bayar" : "Lunas"}
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col lg:flex-row">
            {/* Image */}
            <div className="lg:w-2/5">
              <Image src={item.Room.image} width={500} height={300} className="w-full h-64 lg:h-full object-cover" alt="Kamar hotel" />
            </div>

            {/* Details */}
            <div className="lg:w-3/5 p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">Harga Kamar</span>
                    <span className="text-gray-900 font-semibold">{formatCurrency(item.price)}</span>
                  </div>

                  <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">Check-in</span>
                    <span className="text-gray-900 font-semibold">{formatDate(item.startDate.toISOString())}</span>
                  </div>

                  <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">Check-out</span>
                    <span className="text-gray-900 font-semibold">{formatDate(item.endDate.toISOString())}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">Durasi</span>
                    <span className="text-gray-900 font-semibold">{differenceInCalendarDays(item.endDate, item.startDate)} Malam</span>
                  </div>

                  <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">Total Pembayaran</span>
                    <span className="text-lg font-bold text-blue-600">{item.Payment && formatCurrency(item.Payment.amount)}</span>
                  </div>

                  <div className="pt-2">
                    <div className="flex justify-end">
                      {item.Payment?.status === "unpaid" ? (
                        <Link
                          href={`/checkout/${item.id}`}
                          className="px-6 py-3 bg-linear-to-r from-orange-500 to-red-500 text-white rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                        >
                          Lanjutkan Pembayaran
                        </Link>
                      ) : (
                        <Link
                          href={`/my-reservation/${item.id}`}
                          className="px-6 py-3 bg-linear-to-r from-blue-500 to-indigo-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                        >
                          Lihat Detail Reservasi
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyReserveList;
