import { getReservationById } from "@/lib/data";
import { notFound } from "next/navigation";
import { differenceInCalendarDays } from "date-fns";
import { formatCurrency, formatDate } from "@/lib/utils";
import { FiCalendar, FiClock, FiCreditCard, FiDollarSign, FiMail, FiPhone, FiUser, FiHome, FiCheckCircle, FiAlertCircle, FiXCircle } from "react-icons/fi";

const ReservationDetail = async ({ reservationId }: { reservationId: string }) => {
  const reservation = await getReservationById(reservationId);
  if (!reservation) return notFound();

  const getStatusIcon = (status?: string) => {
    switch (status) {
      case "paid":
      case "settlement":
      case "capture":
        return <FiCheckCircle className="text-green-500 w-5 h-5" />;
      case "pending":
        return <FiAlertCircle className="text-yellow-500 w-5 h-5" />;
      default:
        return <FiXCircle className="text-red-500 w-5 h-5" />;
    }
  };

  const durasi = differenceInCalendarDays(reservation.endDate, reservation.startDate);
  const status = reservation.Payment?.status || "Menunggu";

  return (
    <div className="w-full p-6 bg-white border border-gray-100 rounded-2xl shadow-xl transition hover:shadow-2xl duration-200">
      {/* Header */}
      <div className="mb-8 border-b pb-4 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <FiHome className="text-blue-600" /> Detail Reservasi
          </h2>
          <p className="text-gray-500 text-sm mt-1">Informasi lengkap mengenai reservasi Anda</p>
        </div>
        <div className="bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1 rounded-full">#{reservation.id}</div>
      </div>

      {/* Informasi Utama */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Kiri */}
        <div className="space-y-4">
          <div className="bg-gray-50 rounded-xl p-4 flex items-center gap-3">
            <FiCalendar className="text-blue-500 w-6 h-6" />
            <div>
              <p className="text-sm text-gray-500 font-medium">Tanggal Pesan</p>
              <p className="text-base font-semibold text-gray-900">{formatDate(reservation.startDate.toISOString())}</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-4 flex items-center gap-3">
            <FiClock className="text-indigo-500 w-6 h-6" />
            <div>
              <p className="text-sm text-gray-500 font-medium">Durasi</p>
              <p className="text-base font-semibold text-gray-900">{durasi} Malam</p>
            </div>
          </div>
        </div>

        {/* Kanan */}
        <div className="space-y-4">
          <div className="bg-gray-50 rounded-xl p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              {getStatusIcon(status)}
              <div>
                <p className="text-sm text-gray-500 font-medium">Status Pembayaran</p>
                <p className="text-base font-semibold text-gray-900 capitalize">{status}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-xl p-4 flex items-center gap-3">
              <FiCreditCard className="text-teal-500 w-6 h-6" />
              <div>
                <p className="text-sm text-gray-500 font-medium">Metode Bayar</p>
                <p className="text-base font-semibold text-gray-900 capitalize">{reservation.Payment?.method ? reservation.Payment.method.replace("_", " ") : "Belum dipilih"}</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-4 flex items-center gap-3">
              <FiDollarSign className="text-green-500 w-6 h-6" />
              <div>
                <p className="text-sm text-gray-500 font-medium">Total</p>
                <p className="text-base font-semibold text-gray-900">{reservation.Payment && formatCurrency(reservation.Payment.amount)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Informasi Tamu */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <FiUser className="text-blue-600" /> Informasi Tamu
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-blue-50 rounded-xl p-4 flex items-center gap-3">
            <FiUser className="text-blue-500 w-5 h-5" />
            <div>
              <p className="text-sm text-gray-500 font-medium">Nama Lengkap</p>
              <p className="text-base font-semibold text-gray-900">{reservation.User.name}</p>
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl p-4 flex items-center gap-3">
            <FiMail className="text-blue-500 w-5 h-5" />
            <div>
              <p className="text-sm text-gray-500 font-medium">Email</p>
              <p className="text-base font-semibold text-gray-900">{reservation.User.email}</p>
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl p-4 flex items-center gap-3">
            <FiPhone className="text-blue-500 w-5 h-5" />
            <div>
              <p className="text-sm text-gray-500 font-medium">Nomor Telepon</p>
              <p className="text-base font-semibold text-gray-900">{reservation.User.phone}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Detail Kamar */}
      <div className="bg-gray-50 rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <FiHome className="text-indigo-600" /> Detail Kamar & Jadwal
        </h3>

        <div className="overflow-hidden rounded-xl border border-gray-200">
          <table className="w-full text-sm text-left text-gray-700">
            <thead className="bg-white border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 font-semibold text-gray-900">Kamar</th>
                <th className="px-6 py-4 font-semibold text-gray-900">Check-in</th>
                <th className="px-6 py-4 font-semibold text-gray-900">Check-out</th>
                <th className="px-6 py-4 font-semibold text-gray-900">Durasi</th>
                <th className="px-6 py-4 font-semibold text-gray-900 text-right">Subtotal</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition">
                <td className="px-6 py-4">
                  <div className="flex flex-col">
                    <span className="font-semibold text-gray-900 text-base">{reservation.Room.name}</span>
                    <span className="text-gray-600 text-sm mt-1">Harga: {formatCurrency(reservation.price)}/malam</span>
                  </div>
                </td>
                <td className="px-6 py-4">{formatDate(reservation.startDate.toISOString())}</td>
                <td className="px-6 py-4">{formatDate(reservation.endDate.toISOString())}</td>
                <td className="px-6 py-4">{durasi} Malam</td>
                <td className="px-6 py-4 text-right font-semibold text-gray-900">{reservation.Payment && formatCurrency(reservation.Payment.amount)}</td>
              </tr>
            </tbody>
            <tfoot className="bg-gray-100 border-t border-gray-200">
              <tr>
                <td colSpan={4} className="px-6 py-4 font-bold text-gray-900 text-base">
                  Total Pembayaran
                </td>
                <td className="px-6 py-4 font-bold text-gray-900 text-base text-right">{reservation.Payment && formatCurrency(reservation.Payment.amount)}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ReservationDetail;
