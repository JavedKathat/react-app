import { SlSpeedometer } from "react-icons/sl";
import { BsFuelPump } from "react-icons/bs";
import { GiGearStickPattern } from "react-icons/gi";
import { MdOpenInNew } from "react-icons/md";
import { Separator } from "./ui/separator";

function CarItem({ car, index }) {
  return (
    <div key={index} className="rounded-xl bg-white border shadow-md cursor-pointer">
      <img src={car?.image} width={'100%'} height={250} alt={car?.name}
       className="rounded-t-xl"
       />
      <div className="p-4">
        <h2 className="font-bold text-lg mb-2">{car?.name}</h2>
        <Separator/>
        <div className="grid grid-cols-3 mt-5">
            <div className="flex flex-col items-center">
            <SlSpeedometer className="text-lg mb-1" />
            <h2>{car.miles}Miles</h2>
            </div>

            <div className="flex flex-col items-center">
            <BsFuelPump  className="text-lg mb-1"/> 
            <h2>{car.fuelType}</h2>
            </div>

            <div className="flex flex-col items-center">
            <GiGearStickPattern className="text-lg mb-1" />
            <h2>{car.gearType}</h2>
            </div>
        </div>
        <Separator className="my-2 " />
        <div className="flex items-center justify-between">
            <h2 className="font-bold text-xl">{car.price}</h2>
            <h2 className="text-primary text-sm flex items-center gap-1">View Details<MdOpenInNew /></h2>
        </div>
      </div>
    </div>
  );
}

export default CarItem;
