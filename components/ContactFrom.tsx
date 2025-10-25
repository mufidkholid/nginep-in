"use client";

import { ContactMessage } from "@/lib/actions";
import clsx from "clsx";
import { useActionState } from "react";

const ContactForm = () => {
  const [state, formAction, isPending] = useActionState(ContactMessage, null);
  return (
    <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Kirim Pesan</h3>
        <p className="text-gray-600">Isi form berikut dan kami akan segera merespons</p>
      </div>

      {state?.message ? (
        <div className="p-4 mb-6 text-sm text-green-800 rounded-xl bg-green-50 border border-green-200 flex items-center" role="alert">
          <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="font-medium">{state.message}</span>
        </div>
      ) : null}

      <form action={formAction}>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Name Field */}
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-gray-700">
              Nama Lengkap *
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="bg-gray-50 p-4 border border-gray-300 rounded-xl w-full font-light transition-all duration-200 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
              placeholder="Masukkan nama lengkap"
            />
            <div aria-live="polite" aria-atomic="true">
              {state?.error?.name && (
                <p className="text-sm text-red-600 flex items-center mt-1">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {state.error.name}
                </p>
              )}
            </div>
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email *
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 p-4 border border-gray-300 rounded-xl w-full font-light transition-all duration-200 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
              placeholder="nama@email.com"
            />
            <div aria-live="polite" aria-atomic="true">
              {state?.error?.email && (
                <p className="text-sm text-red-600 flex items-center mt-1">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {state.error.email}
                </p>
              )}
            </div>
          </div>

          {/* Subject Field */}
          <div className="md:col-span-2 space-y-2">
            <label htmlFor="subject" className="text-sm font-medium text-gray-700">
              Subjek *
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              className="bg-gray-50 p-4 border border-gray-300 rounded-xl w-full font-light transition-all duration-200 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
              placeholder="Ketik subjek pesan"
            />
            <div aria-live="polite" aria-atomic="true">
              {state?.error?.subject && (
                <p className="text-sm text-red-600 flex items-center mt-1">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {state.error.subject}
                </p>
              )}
            </div>
          </div>

          {/* Message Field */}
          <div className="md:col-span-2 space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-gray-700">
              Pesan *
            </label>
            <textarea
              name="message"
              id="message"
              rows={5}
              className="bg-gray-50 p-4 border border-gray-300 rounded-xl w-full font-light transition-all duration-200 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none resize-none"
              placeholder="Tulis pesan detail Anda di sini..."
            ></textarea>
            <div aria-live="polite" aria-atomic="true">
              {state?.error?.message && (
                <p className="text-sm text-red-600 flex items-center mt-1">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {state.error.message}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className={clsx("mt-6 px-8 py-4 text-center font-semibold text-white rounded-xl w-full transition-all duration-300 flex items-center justify-center space-x-2", {
            "bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 hover:shadow-lg transform hover:-translate-y-0.5": !isPending,
            "bg-gray-400 cursor-not-allowed opacity-70": isPending,
          })}
          disabled={isPending}
        >
          {isPending ? (
            <>
              <svg className="w-5 h-5 animate-spin text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Mengirim...</span>
            </>
          ) : (
            <>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              <span>Kirim Pesan</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
};
export default ContactForm;
