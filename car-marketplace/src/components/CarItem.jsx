import { SlSpeedometer } from "react-icons/sl";
import { BsFuelPump } from "react-icons/bs";
import { GiGearStickPattern } from "react-icons/gi";
import { MdOpenInNew } from "react-icons/md";
import { Separator } from "./ui/separator";
import { use, useEffect } from "react";
import { Link } from "react-router-dom";


function CarItem({ car, index }) {
  useEffect(() => {
  },[]);

  const imageUrl = car?.images?.[0]?.imageUrl || "default-image-url.jpg"; // Use a fallback image if imageUrl is undefined

  return (
    <Link to={`/listing-details/${car?.id}`}>
    <div key={index} className="rounded-xl bg-white border shadow-md cursor-pointer hover:shadow-xl hover:shadow-slate-400 hover:transition-shadow">
      <h2 className="absolute m-2 bg-green-500 px-2 rounded-full text-sm">{car?.condition}</h2>
      <img src={imageUrl} width={'100%'} height={250} alt={car?.listingTitle} className="rounded-t-xl h-[180px] object-cover" />
      <div className="p-4">
        <h2 className="font-bold text-lg mb-2">{car?.listingTitle}</h2>
        <Separator/>
        <div className="grid grid-cols-3 mt-5">
            <div className="flex flex-col items-center">
            <SlSpeedometer className="text-lg mb-1" />
            <h2>{car?.mileage} Miles</h2>
            </div>

            <div className="flex flex-col items-center">
            <BsFuelPump  className="text-lg mb-1"/> 
            <h2>{car?.fuelType}</h2>
            </div>

            <div className="flex flex-col items-center">
            <GiGearStickPattern className="text-lg mb-1" />
            <h2>{car?.transmission}</h2>
            </div>
        </div>
        <Separator className="my-2 " />
        <div className="flex items-center justify-between">
            <h2 className="font-bold text-xl">{car?.sellingPrice}</h2>
            <h2 className="text-primary text-sm flex items-center gap-1">View Details<MdOpenInNew /></h2>
        </div>
      </div>
    </div>
    </Link>
  );
}


export default CarItem;
