import { getAmenities, getRoomsById } from "@/lib/data";
import EditForm from "./EditForm";
import { notFound } from "next/navigation";

const EditRoom = async ({roomId}: {roomId: string}) => {
  const [amenities, room] = await Promise.all([getAmenities(), getRoomsById(roomId)]);

  if (!amenities || !room) return notFound();

  return (
    <div>
      <h1 className="font-bold text-3xl mb-4 text-gray-800">Edit Room</h1>
      <EditForm amenities={amenities} room={room} />
    </div>
  );
};

export default EditRoom;
