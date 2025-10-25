import { formatCurrency } from "@/lib/utils";
import { Room } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";


const Card = ({room} : {room: Room}) => {
 return (
   <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
     {/* Image Section */}
     <div className="h-64 w-full relative overflow-hidden">
       <Image src={room.image} width={400} height={256} alt={room.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
       {/* Price Badge */}
       <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
         <span className="text-lg font-bold text-gray-900">{formatCurrency(room.price)}</span>
         <span className="text-gray-500 text-sm ml-1">/malam</span>
       </div>

       {/* Overlay on Hover */}
       <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
     </div>

     {/* Content Section */}
     <div className="p-6">
       {/* Room Name */}
       <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-1 group-hover:text-blue-600 transition-colors duration-200">
         <Link href={`/room/${room.id}`}>{room.name}</Link>
       </h3>

       {/* Room Features */}
       <div className="flex items-center space-x-4 text-gray-600 mb-4">
         <div className="flex items-center space-x-1">
           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
           </svg>
           <span className="text-sm">
             {room.capacity} {room.capacity === 1 ? "Orang" : "Orang"}
           </span>
         </div>
       </div>

       {/* Divider */}
       <div className="border-t border-gray-200 my-4"></div>

       {/* Action Button */}
       <div className="flex items-center justify-between">
         <div className="flex items-center space-x-1 text-green-600">
           <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
             <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
           </svg>
           <span className="text-sm font-medium">Tersedia</span>
         </div>

         <Link
           href={`/room/${room.id}`}
           className="bg-linear-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-md flex items-center space-x-2"
         >
           <span>Pesan Sekarang</span>
           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
           </svg>
         </Link>
       </div>
     </div>
   </div>
 );
};
export default Card;