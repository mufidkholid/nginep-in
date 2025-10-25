import { auth } from "@/auth";
import MyReserveList from "@/components/MyReserveList";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "My Reservation",
}

const MyReservationPage = async () => {
  const session = await auth();
  if(!session || !session.user) redirect('/signin')

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto mt-10 py-20 px-4">
        <div className="flex items-center justify-between">
          <div className="mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-linear-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Halo, {session.user.name} 👋</h3>
                <p className="text-gray-600 font-medium">Riwayat pemesanan Anda</p>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-sm">
          <MyReserveList />
        </div>
      </div>
    </div>
  );
};

export default MyReservationPage;
