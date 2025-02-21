import { Button } from "@/components/ui/button";

function OwnerDetails({ carDetails }) {
  return (
    <div className="p-10 rounded-xl shadow-md border gap-5 mt-7">
      <div className="flex justify-start gap-3">
        <img
          src={carDetails?.userImageUrl}
          className="w-[40px] h-[40px] object-cover"
        />
        <h2 className="font-bold text-xl mt-3">{carDetails?.userName}</h2>
      </div>
      <h2 className="text-gray-500 mb-3">{carDetails?.createdBy}</h2>
      <Button className="w-full">Message owner</Button>
    </div>
  );
}

export default OwnerDetails;
