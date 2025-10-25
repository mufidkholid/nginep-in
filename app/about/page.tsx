import Image from "next/image";
import HeaderSection from "@/components/HeaderSection";
import { IoEyeOutline, IoLocateOutline } from "react-icons/io5";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Tentang Kami",
  description: "Mengenal lebih dekat Nginep.in",
}
const AboutPage = () => {
 return (
   <div>
     <HeaderSection title="Tentang Kami" subTitle="Mengenal lebih dekat Nginep.in" />
     <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
       <div className="grid lg:grid-cols-2 gap-12 items-center">
         {/* Image Section */}
         <div className="relative">
           <Image src="/about-image.jpg" alt="Tentang Nginep.in" width={650} height={579} className="rounded-2xl object-cover w-full shadow-lg" />
           {/* Decorative Element */}
           <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-linear-to-r from-blue-500 to-indigo-600 rounded-2xl -z-10"></div>
         </div>

         {/* Content Section */}
         <div className="space-y-8">
           <div>
             <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
               Mengenal <span className="text-blue-600">Nginep.in</span>
             </h1>
             <p className="text-lg text-gray-700 leading-relaxed">Sebagai penyedia akomodasi terkemuka, kami berkomitmen untuk memberikan pengalaman menginap yang tak terlupakan dengan pelayanan terbaik dan fasilitas premium.</p>
           </div>

           <div className="space-y-6 pt-4">
             {/* Vision */}
             <div className="flex gap-6 p-6 bg-linear-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
               <div className="flex-none">
                 <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                   <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                   </svg>
                 </div>
               </div>
               <div className="flex-1">
                 <h4 className="text-xl font-semibold text-gray-900 mb-3">Visi Kami</h4>
                 <p className="text-gray-600 leading-relaxed">Menjadi platform penyedia akomodasi terdepan yang memberikan pengalaman menginap terbaik dengan inovasi dan kenyamanan maksimal bagi setiap tamu.</p>
               </div>
             </div>

             {/* Mission */}
             <div className="flex gap-6 p-6 bg-linear-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-100">
               <div className="flex-none">
                 <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                   <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path
                       strokeLinecap="round"
                       strokeLinejoin="round"
                       strokeWidth={2}
                       d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                     />
                   </svg>
                 </div>
               </div>
               <div className="flex-1">
                 <h4 className="text-xl font-semibold text-gray-900 mb-3">Misi Kami</h4>
                 <p className="text-gray-600 leading-relaxed">Menyediakan akomodasi berkualitas tinggi dengan pelayanan prima, memastikan setiap tamu merasakan kenyamanan rumah sendiri sambil menikmati fasilitas terbaik.</p>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
 );
};

export default AboutPage;
