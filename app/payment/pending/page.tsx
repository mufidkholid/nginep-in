import { Metadata } from "next";
import Link from "next/link";
import { HiClock } from "react-icons/hi2";

export const metadata: Metadata = {
  title: "Pembayaran Tertunda",
};

const PaymentPending = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 md:p-12 text-center">
        <div className="w-24 h-24 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <HiClock className="text-yellow-600 w-14 h-14" />
        </div>

        <div className="space-y-4 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Pembayaran Tertunda!</h1>
          <div className="space-y-2">
            <p className="text-lg text-gray-600">Pembayaran Anda sedang dalam proses verifikasi.</p>
          </div>
        </div>

        <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-200 max-w-md mx-auto mb-8">
          <p className="text-yellow-700 font-medium">⏳ Pembayaran sedang diproses.</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/my-reservation"
            className="bg-linear-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg"
          >
            Cek Status Reservasi
          </Link>
          <Link href="/room" className="bg-transparent border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg">
            Cari Kamar Lain
          </Link>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-gray-500 text-sm">
            Butuh bantuan?{" "}
            <a href="/contact" className="text-blue-600 hover:text-blue-700 font-medium">
              Hubungi Customer Service
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default PaymentPending;
