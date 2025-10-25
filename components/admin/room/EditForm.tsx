"use client";
import { updateRoom } from "@/lib/actions";
import { RoomProps } from "@/types/room";
import { Amenities } from "@prisma/client";
import { PutBlobResult } from "@vercel/blob";
import clsx from "clsx";
import Image from "next/image";
import { useActionState, useRef, useState, useTransition } from "react";
import { IoCloudUploadOutline, IoTrashOutline } from "react-icons/io5";
import { BarLoader } from "react-spinners";

const EditForm = ({ amenities, room }: { amenities: Amenities[]; room: RoomProps }) => {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState(room.image);
  const [message, setMessage] = useState("");
  const [pending, startTransition] = useTransition();

  const handelUpload = () => {
    if (!inputFileRef.current?.files) return null;
    const file = inputFileRef.current.files[0];
    const formData = new FormData();
    formData.set("file", file);

    startTransition(async () => {
      try {
        const response = await fetch("/api/upload", {
          method: "PUT",
          body: formData,
        });
        const data = await response.json();
        if (response.status != 200) {
          setMessage(data.message);
        }
        const img = data as PutBlobResult;
        setImage(img.url);
      } catch (error) {
        console.log(error);
      }
    });
  };

  const deleteImage = (image: string) => {
    startTransition(async () => {
      try {
        await fetch(`/api/upload?imageUrl=${image}`, {
          method: "DELETE",
        });
        setImage("");
      } catch (error) {
        console.log(error);
      }
    });
  };

  const [state, formAction, isPending] = useActionState(updateRoom.bind(null, image, room.id), null);

  const checkedAmenities = room.RoomAmenities.map((item) => item.amenitiesId);

  return (
    <form action={formAction}>
      <div className="grid lg:grid-cols-12 gap-6">
        {/* Left Column - Room Details */}
        <div className="lg:col-span-8 space-y-6">
          {/* Room Name */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <label className="block text-sm font-semibold text-gray-900 mb-3">
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span>Nama Kamar</span>
              </div>
            </label>
            <input
              type="text"
              defaultValue={room.name}
              name="name"
              placeholder="Masukkan nama kamar"
              className="py-3 px-4 rounded-xl border border-gray-300 w-full bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none placeholder-gray-400"
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

          {/* Description */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <label className="block text-sm font-semibold text-gray-900 mb-3">
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
                <span>Deskripsi Kamar</span>
              </div>
            </label>
            <textarea
              name="description"
              defaultValue={room.description}
              rows={6}
              placeholder="Tulis deskripsi lengkap tentang kamar ini"
              className="py-3 px-4 rounded-xl border border-gray-300 w-full bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none placeholder-gray-400 resize-none"
            ></textarea>
            <div aria-live="polite" aria-atomic="true">
              {state?.error?.description && (
                <p className="text-sm text-red-600 flex items-center mt-2">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {state.error.description}
                </p>
              )}
            </div>
          </div>

          {/* Amenities */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <label className="block text-sm font-semibold text-gray-900 mb-4">
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                <span>Fasilitas Kamar</span>
              </div>
            </label>
            <div className="grid md:grid-cols-2 gap-3">
              {amenities.map((item) => (
                <div className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200" key={item.id}>
                  <input type="checkbox" value={item.id} name="amenities" defaultChecked={checkedAmenities.includes(item.id)} className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500 focus:ring-2" />
                  <label className="ms-3 text-sm font-medium text-gray-700 capitalize">{item.name}</label>
                </div>
              ))}
            </div>
            <div aria-live="polite" aria-atomic="true">
              {state?.error?.amenities && (
                <p className="text-sm text-red-600 flex items-center mt-3">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {state.error.amenities}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Right Column - Image & Pricing */}
        <div className="lg:col-span-4 space-y-6">
          {/* Image Upload */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <label className="block text-sm font-semibold text-gray-900 mb-3">Gambar Kamar</label>
            <label
              htmlFor="input-file"
              className="flex flex-col items-center justify-center aspect-video border-2 border-dashed border-gray-300 rounded-xl cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors duration-200 relative overflow-hidden"
            >
              <div className="flex flex-col items-center justify-center text-gray-500 z-10 p-4">
                {pending ? (
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-2"></div>
                    <p className="text-sm">Mengunggah...</p>
                  </div>
                ) : null}
                {image ? (
                  <button
                    type="button"
                    onClick={() => deleteImage(image)}
                    className="flex items-center justify-center bg-red-500 size-8 rounded-full absolute top-3 right-3 text-white hover:bg-red-600 transition-colors duration-200 z-20 shadow-lg"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                ) : (
                  <div className="flex flex-col items-center justify-center">
                    <svg className="w-12 h-12 text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <p className="text-sm font-medium text-gray-700 mb-1">Ubah Gambar</p>
                    {message ? <p className="text-xs text-red-500">{message}</p> : <p className="text-xs text-gray-500 text-center">PNG, JPG, JPEG, GIF (Maks: 4MB)</p>}
                  </div>
                )}
              </div>
              {!image ? (
                <input type="file" ref={inputFileRef} onChange={handelUpload} className="hidden" id="input-file" accept="image/*" />
              ) : (
                <Image src={image} alt="Preview gambar kamar" width={400} height={300} className="absolute inset-0 w-full h-full object-cover" />
              )}
            </label>
            {!image && room.image && (
              <div className="mt-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-xs text-blue-700 text-center">Gambar saat ini masih digunakan</p>
              </div>
            )}
          </div>

          {/* Capacity & Price */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 space-y-4">
            {/* Capacity */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span>Kapasitas</span>
                </div>
              </label>
              <input
                type="number"
                defaultValue={room.capacity}
                name="capacity"
                placeholder="Jumlah orang"
                className="py-3 px-4 rounded-xl border border-gray-300 w-full bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none placeholder-gray-400"
              />
              <div aria-live="polite" aria-atomic="true">
                {state?.error?.capacity && (
                  <p className="text-sm text-red-600 flex items-center mt-2">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {state.error.capacity}
                  </p>
                )}
              </div>
            </div>

            {/* Price */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                  <span>Harga per Malam</span>
                </div>
              </label>
              <input
                type="number"
                defaultValue={room.price}
                name="price"
                placeholder="Masukkan harga"
                className="py-3 px-4 rounded-xl border border-gray-300 w-full bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none placeholder-gray-400"
              />
              <div aria-live="polite" aria-atomic="true">
                {state?.error?.price && (
                  <p className="text-sm text-red-600 flex items-center mt-2">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {state.error.price}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Submit Button & Messages */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            {/* General Message */}
            {state?.message ? (
              <div className="mb-4 p-4 bg-red-100 border border-red-200 rounded-xl">
                <p className="text-sm text-red-700 flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {state.message}
                </p>
              </div>
            ) : null}

            <button
              type="submit"
              className={clsx("w-full py-4 px-6 text-center font-semibold text-white rounded-xl transition-all duration-300 flex items-center justify-center space-x-2", {
                "bg-linear-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 hover:shadow-lg transform hover:-translate-y-0.5": !isPending,
                "bg-gray-400 cursor-not-allowed": isPending,
              })}
              disabled={isPending}
            >
              {isPending ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Memperbarui...</span>
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  <span>Perbarui Kamar</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
export default EditForm;
