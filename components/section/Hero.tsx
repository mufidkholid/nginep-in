import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative h-screen text-white overflow-hidden">
      {/* Background Image + Overlay */}
      <div className="absolute inset-0">
        <Image src="/hero.jpg" alt="Hotel Mewah" fill className="object-cover object-center w-full h-full" priority />
        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-black/30 backdrop-blur-[2px]" />
      </div>

      {/* Content */}
      <div className="relative flex flex-col justify-center items-center h-full text-center px-6 animate-fadeIn">
        {/* Heading Section */}
        <div className="max-w-3xl mx-auto space-y-5">
          <div>
            <span className="inline-block px-4 py-1.5 bg-blue-500/20 backdrop-blur-md rounded-full text-blue-100 text-sm font-medium border border-blue-400/30 shadow-sm">✨ Pengalaman Menginap Terbaik</span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">Rasakan Kenyamanan Tanpa Batas</h1>

          <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">Temukan kenyamanan tak tertandingi dengan fasilitas premium dan pelayanan terbaik di jantung kota.</p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 md:gap-5 mt-8">
          <Link
            href="/room"
            className="group relative bg-linear-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 py-3 px-8 text-base font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center min-w-40"
          >
            <span className="relative z-10 flex items-center space-x-2">
              <span>Pesan Sekarang</span>
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </Link>

          <Link
            href="/contact"
            className="group relative bg-transparent border-2 border-white/70 hover:border-white hover:bg-white/10 backdrop-blur-sm py-3 px-8 text-base font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center min-w-40"
          >
            <span className="relative z-10 flex items-center space-x-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span>Hubungi Kami</span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );

};

export default Hero;
