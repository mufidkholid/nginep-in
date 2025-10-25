import Image from "next/image";
import { getReservationById } from "@/lib/data";
import { formatCurrency, formatDate } from "@/lib/utils";
import { differenceInCalendarDays } from "date-fns";
import PaymentButton from "./PaymentButton";
import { HiOutlineIdentification, HiOutlineUser, HiOutlineEnvelope, HiOutlinePhone, HiOutlineCalendarDays, HiOutlineClock, HiOutlineCurrencyDollar, HiOutlineChartBar } from "react-icons/hi2";

const icons = {
  id: <HiOutlineIdentification className="text-blue-600 w-5 h-5" />,
  name: <HiOutlineUser className="text-blue-600 w-5 h-5" />,
  email: <HiOutlineEnvelope className="text-blue-600 w-5 h-5" />,
  phone: <HiOutlinePhone className="text-blue-600 w-5 h-5" />,
  calendar: <HiOutlineCalendarDays className="text-blue-600 w-5 h-5" />,
  clock: <HiOutlineClock className="text-blue-600 w-5 h-5" />,
  money: <HiOutlineCurrencyDollar className="text-blue-600 w-5 h-5" />,
  chart: <HiOutlineChartBar className="text-blue-600 w-5 h-5" />,
};

const CheckoutDetail = async ({ reservationId }: { reservationId: string }) => {
  const reservation = await getReservationById(reservationId);
  if (!reservation || !reservation.Payment) return <h1>No reservation found</h1>;

  const duration = differenceInCalendarDays(reservation.endDate, reservation.startDate);

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {/* Reservation Details */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 order-2 lg:order-1">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-linear-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
            <HiOutlineIdentification className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Detail Reservasi</h2>
        </div>

        <div className="space-y-4">
          {[
            { label: "ID Reservasi", value: `#${reservation.id}`, icon: icons.id },
            { label: "Nama", value: reservation.User.name, icon: icons.name },
            { label: "Email", value: reservation.User.email, icon: icons.email },
            { label: "Nomor Telepon", value: reservation.User.phone, icon: icons.phone },
            { label: "Check-in", value: formatDate(reservation.startDate.toISOString()), icon: icons.calendar },
            { label: "Check-out", value: formatDate(reservation.endDate.toISOString()), icon: icons.calendar },
            { label: "Durasi", value: `${duration} Malam`, icon: icons.clock },
            { label: "Total Pembayaran", value: formatCurrency(reservation.Payment.amount), icon: icons.money },
            {
              label: "Status",
              value: reservation.Payment.status,
              icon: icons.chart,
              status: reservation.Payment.status.toLowerCase(),
            },
          ].map((item, index) => (
            <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
              <div className="flex items-center space-x-3">
                {item.icon}
                <span className="text-gray-600 font-medium">{item.label}</span>
              </div>
              <div className="text-right">
                {item.status ? (
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold border ${
                      item.status === "paid" ? "bg-green-100 text-green-700 border-green-200" : item.status === "unpaid" ? "bg-orange-100 text-orange-700 border-orange-200" : "bg-gray-100 text-gray-700 border-gray-200"
                    }`}
                  >
                    {item.value}
                  </span>
                ) : (
                  <span className="text-gray-900 font-semibold">{item.value}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Room Info & Payment */}
      <div className="space-y-6 order-1 lg:order-2">
        {/* Room Card */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/5 relative">
              <Image src={reservation.Room.image} alt={reservation.Room.name} width={400} height={300} className="object-cover w-full h-48 md:h-full" />
            </div>
            <div className="md:w-3/5 p-6 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{reservation.Room.name}</h3>
              <div className="flex items-center space-x-2">
                <HiOutlineCurrencyDollar className="text-gray-600 w-5 h-5" />
                <span className="text-xl font-semibold text-gray-900">{formatCurrency(reservation.price)}</span>
                <span className="text-gray-500">/ malam</span>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Button */}
        <PaymentButton reservation={reservation} />
      </div>
    </div>
  );
};

export default CheckoutDetail;
