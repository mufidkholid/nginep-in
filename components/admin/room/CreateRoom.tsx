import { getAmenities } from "@/lib/data";
import CreateForm from "./CreateForm"

const CreateRoom = async () => {
  const amenities = await getAmenities();

  if(!amenities) return null;

  return (
    <div>
      <h1 className="font-bold text-3xl mb-4 text-gray-800">Buat Kamar Baru</h1>
      <CreateForm amenities={amenities} />
    </div>
  );
}

export default CreateRoom