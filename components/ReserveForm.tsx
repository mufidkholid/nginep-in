"use client";
import { useActionState, useState } from "react";
import { addDays } from "date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { createReserve } from "@/lib/actions";
import { DisabledDateProps, RoomDetailProps } from "@/types/room";
import clsx from "clsx";

const ReserveForm = ({ room, disabledDate }: { room: RoomDetailProps; disabledDate: DisabledDateProps[] }) => {
  const StartDate = new Date();
  const EndDate = addDays(StartDate, 1);

  const [startDate, setStartDate] = useState(StartDate);
  const [endDate, setEndDate] = useState(EndDate);

  const handleDateChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setStartDate(start ?? StartDate);
    setEndDate(end ?? EndDate);
  };

  const [state, formAction, isPending] = useActionState(createReserve.bind(null, room.id, room.price, startDate, endDate), null);

  const excludesDate = disabledDate.map((item) => {
    return {
      start: (item.startDate),
      end: (item.endDate),
    };
  });

  return (
    <div>
      <form action={formAction}>
        {/* Date Picker Section */}
        <div className="mb-6">
          <label className="block mb-3 text-sm font-semibold text-gray-900">
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>Tanggal Menginap</span>
            </div>
          </label>
          <DatePicker
            selected={startDate}
            startDate={startDate}
            endDate={endDate}
            minDate={new Date()}
            selectsRange={true}
            onChange={handleDateChange}
            excludeDateIntervals={excludesDate}
            dateFormat={["dd/MM/yyyy"]}
            wrapperClassName="w-full"
            className="py-3 px-4 rounded-xl border border-gray-300 w-full bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none"
            placeholderText="Pilih tanggal check-in & check-out"
          />
          <div aria-live="polite" aria-atomic="true">
            {state?.messageDate && (
              <p className="text-sm text-red-600 flex items-center mt-2">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {state.messageDate}
              </p>
            )}
          </div>
        </div>

        {/* Guest Information */}
        <div className="space-y-6">
          {/* Name Field */}
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-900">
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>Nama Lengkap</span>
              </div>
            </label>
            <input
              type="text"
              name="name"
              className="py-3 px-4 rounded-xl border border-gray-300 w-full bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none placeholder-gray-400"
              placeholder="Masukkan nama lengkap"
            />
            <div aria-live="polite" aria-atomic="true">
              {state?.error?.name && (
                <p className="text-sm text-red-600 flex items-center mt-2">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {state.error.name}
                </p>
              )}
            </div>
          </div>

          {/* Phone Field */}
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-900">
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>Nomor Handphone</span>
              </div>
            </label>
            <input
              type="text"
              name="phone"
              className="py-3 px-4 rounded-xl border border-gray-300 w-full bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none placeholder-gray-400"
              placeholder="Contoh: 081234567890"
            />
            <div aria-live="polite" aria-atomic="true">
              {state?.error?.phone && (
                <p className="text-sm text-red-600 flex items-center mt-2">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {state.error.phone}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isPending}
          className={clsx("mt-8 py-4 px-6 text-center font-semibold text-white w-full rounded-xl transition-all duration-300 flex items-center justify-center space-x-2", {
            "bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 hover:shadow-lg transform hover:-translate-y-0.5": !isPending,
            "bg-gray-400 cursor-not-allowed": isPending,
          })}
        >
          {isPending ? (
            <>
              <svg className="w-5 h-5 animate-spin text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Memproses...</span>
            </>
          ) : (
            <>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>Pesan Sekarang</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ReserveForm;
