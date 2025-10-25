import { Metadata } from "next";
import Link from "next/link";
import { HiXCircle } from "react-icons/hi2";

export const metadata: Metadata = {
  title: "Pembayaran Gagal",
};

const PaymentFailure = () => {

 return (
   <div className="max-w-4xl mx-auto px-4 py-20">
     <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 md:p-12 text-center">
       <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
         <HiXCircle className="text-red-600 w-14 h-14" />
       </div>

       <div className="space-y-4 mb-8">
         <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Pembayaran Gagal!</h1>
         <div className="space-y-2">
           <p className="text-lg text-gray-600">Maaf, proses pembayaran Anda tidak berhasil.</p>
           <p className="text-gray-600">Silakan coba lagi atau gunakan metode pembayaran lainnya.</p>
         </div>
       </div>

       <div className="bg-red-50 rounded-xl p-4 border border-red-200 max-w-md mx-auto mb-8">
         <p className="text-red-700 font-medium">❌ Pembayaran tidak dapat diproses. Cek saldo atau kartu kredit Anda.</p>
       </div>

       <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
export default PaymentFailure;