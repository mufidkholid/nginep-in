import ContactForm from "@/components/ContactFrom";
import HeaderSection from "@/components/HeaderSection";
import { Metadata } from "next";
import { IoCallOutline, IoLocationOutline, IoMailOutline } from "react-icons/io5";

export const metadata: Metadata = {
  title: "Kontak Kami",
};

const ContactPage = () => {
  return (
    <div>
      <HeaderSection title="Hubungi Kami" subTitle="Kami siap membantu Anda" />
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h1 className="text-lg text-blue-600 font-semibold mb-3">Kontak</h1>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Mari Berbincang <span className="text-blue-600">Bersama</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">Tim customer service kami siap membantu menjawab pertanyaan dan memberikan solusi terbaik untuk kebutuhan menginap Anda.</p>
            </div>

            <div className="space-y-6 pt-4">
              {/* Email */}
              <div className="flex gap-6 p-6 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex-none">
                  <div className="w-14 h-14 bg-linear-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Email</h4>
                  <p className="text-gray-600 text-lg">hello@nginep.in</p>
                  <p className="text-gray-500 text-sm mt-1">Respon dalam 1x24 jam</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-6 p-6 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex-none">
                  <div className="w-14 h-14 bg-linear-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Telepon</h4>
                  <p className="text-gray-600 text-lg">+62 21 1234 5678</p>
                  <p className="text-gray-500 text-sm mt-1">Senin - Minggu, 08:00 - 22:00 WIB</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex gap-6 p-6 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex-none">
                  <div className="w-14 h-14 bg-linear-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Alamat Kantor</h4>
                  <p className="text-gray-600">
                    Jl. Jenderal Sudirman No. 123
                    <br />
                    Kebayoran Baru, Jakarta Selatan
                    <br />
                    DKI Jakarta 12190
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
