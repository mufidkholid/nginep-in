import CardSkeleton from "./CardSkeleton";

const RoomSkeleton = () => {
  return (
    <div className="max-w-7xl py-6 pb-20 px-4 mx-auto">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
    </div>
  );
};

export default RoomSkeleton;
