import Link from "next/link";
import React from "react";
import { FaTwitter, FaFacebookF, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-linear-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 w-full py-12 md:py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="mb-6 block">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-linear-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">N</span>
                </div>
                <span className="text-2xl font-bold text-white">Nginep.in</span>
              </div>
            </Link>
            <p className="text-gray-300 leading-relaxed mb-6">Tempat terbaik untuk menemukan pengalaman menginap yang tak terlupakan. Nikmati kenyamanan dan pelayanan terbaik kami.</p>
            <div className="flex space-x-4">
              {/* Twitter */}
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors duration-300">
                <FaTwitter className="w-5 h-5 text-white" />
              </a>

              {/* Facebook */}
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300">
                <FaFacebookF className="w-5 h-5 text-white" />
              </a>

              {/* Instagram */}
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300">
                <FaInstagram className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 text-lg font-bold text-white flex items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
              Menu Utama
            </h4>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group">
                  <span className="w-1 h-1 bg-gray-500 rounded-full mr-3 group-hover:bg-blue-500 transition-colors"></span>
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group">
                  <span className="w-1 h-1 bg-gray-500 rounded-full mr-3 group-hover:bg-blue-500 transition-colors"></span>
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/room" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group">
                  <span className="w-1 h-1 bg-gray-500 rounded-full mr-3 group-hover:bg-blue-500 transition-colors"></span>
                  Kamar & Harga
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group">
                  <span className="w-1 h-1 bg-gray-500 rounded-full mr-3 group-hover:bg-blue-500 transition-colors"></span>
                  Hubungi Kami
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="mb-6 text-lg font-bold text-white flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
              Informasi Legal
            </h4>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group">
                  <span className="w-1 h-1 bg-gray-500 rounded-full mr-3 group-hover:bg-green-500 transition-colors"></span>
                  Kebijakan Privasi
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group">
                  <span className="w-1 h-1 bg-gray-500 rounded-full mr-3 group-hover:bg-green-500 transition-colors"></span>
                  Syarat & Ketentuan
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group">
                  <span className="w-1 h-1 bg-gray-500 rounded-full mr-3 group-hover:bg-green-500 transition-colors"></span>
                  Metode Pembayaran
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group">
                  <span className="w-1 h-1 bg-gray-500 rounded-full mr-3 group-hover:bg-green-500 transition-colors"></span>
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="mb-6 text-lg font-bold text-white flex items-center">
              <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
              Newsletter
            </h4>
            <p className="text-gray-300 mb-6 leading-relaxed">Dapatkan penawaran spesial dan update terbaru langsung ke email Anda.</p>
            <form className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="alamat.email@anda.com"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                />
                <svg className="w-5 h-5 text-gray-400 absolute right-3 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
              </div>
              <button
                type="submit"
                className="w-full bg-linear-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
              >
                Berlangganan
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              &copy; 2025 <span className="text-white font-semibold">Nginep.in</span>. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Terima pembayaran dengan:</span>
              <div className="flex space-x-2">
                <div className="w-8 h-5 bg-gray-600 rounded flex items-center justify-center">
                  <span className="text-xs font-bold text-white">BCA</span>
                </div>
                <div className="w-8 h-5 bg-gray-600 rounded flex items-center justify-center">
                  <span className="text-xs font-bold text-white">BNI</span>
                </div>
                <div className="w-8 h-5 bg-gray-600 rounded flex items-center justify-center">
                  <span className="text-xs font-bold text-white">BRI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
