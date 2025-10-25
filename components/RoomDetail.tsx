import Image from "next/image";
import { getDisabledRoomById, getRoomDetailById } from "@/lib/data";
import { notFound } from "next/navigation";
import { IoCheckmark, IoPeopleOutline } from "react-icons/io5";
import { formatCurrency } from "@/lib/utils";
import ReserveForm from "./ReserveForm";

const RoomDetail = async ({ roomId }: { roomId: string }) => {
  const [room, disabledDate] = await Promise.all([getRoomDetailById(roomId), getDisabledRoomById(roomId)]);
  if (!room || !disabledDate) return notFound();

  return (
    <div className="max-w-7xl py-12 px-4 grid lg:grid-cols-12 gap-8 mx-auto">
      {/* Main Content */}
      <div className="lg:col-span-8">
        {/* Room Image */}
        <div className="relative rounded-2xl overflow-hidden mb-8">
          <Image src={room.image} alt={room.name} width={770} height={430} priority className="w-full h-auto object-cover" />
          {/* Price Badge */}
          <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg">
            <span className="text-2xl font-bold text-gray-900">{formatCurrency(room.price)}</span>
            <span className="text-gray-500 text-sm ml-1">/malam</span>
          </div>
        </div>

        {/* Room Title & Description */}
        <div className="mb-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">{room.name}</h1>
          <p className="text-lg text-gray-700 leading-relaxed">{room.description}</p>
        </div>

        {/* Facilities Section */}
        <div className="bg-gray-50 rounded-2xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
            Fasilitas
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {room.RoomAmenities.map((item) => (
              <div className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-gray-200 hover:border-blue-300 transition-colors duration-200" key={item.id}>
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center shrink-0">
                  <IoCheckmark className="size-5 text-green-600" />
                </div>
                <span className="text-gray-700 font-medium">{item.Amenities.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reservation Sidebar */}
      <div className="lg:col-span-4">
        <div className="bg-white rounded-2xl border border-gray-200 shadow-lg sticky top-8">
          {/* Header */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2 text-gray-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="font-medium">
                  {room.capacity} {room.capacity === 1 ? "Orang" : "Orang"}
                </span>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-gray-900">{formatCurrency(room.price)}</div>
                <div className="text-gray-500 text-sm">per malam</div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Check-in: 14:00</span>
              </div>
              <div className="flex items-center space-x-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Check-out: 12:00</span>
              </div>
            </div>
          </div>

          {/* Reservation Form */}
          <div className="p-6">
            <ReserveForm room={room} disabledDate={disabledDate} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetail;
