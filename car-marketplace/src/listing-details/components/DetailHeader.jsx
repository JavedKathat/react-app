import { MdCalendarMonth } from "react-icons/md";
import { MdSpeed } from "react-icons/md";
import { GiGearStickPattern } from "react-icons/gi";
import { BsFuelPump } from "react-icons/bs";

function DetailHeader({ carDetails }) {
  const textClasses = 'text-primary text-[16px] flex gap-2 items-center bg-blue-50 rounded-full px-4 py-1';
  return (
    <div>
      {carDetails?.listingTitle ? <div>
      <h2 className="font-bold text-4xl">{carDetails?.listingTitle}</h2>
      <p className="text-sm">{carDetails?.tagline}</p>

      <div className="mt-8 flex items-center gap-5 flex-wrap">
        <h2 className={textClasses} >
          <MdCalendarMonth />
          {carDetails?.year}
        </h2>
        <h2 className={textClasses}>
          <MdSpeed />
          {carDetails?.mileage}miles
        </h2>
        <h2 className={textClasses}>
          <GiGearStickPattern />
          {carDetails?.transmission}
        </h2>
        <h2 className={textClasses}>
          <BsFuelPump />
          {carDetails?.fuelType}
        </h2>
      </div>
    </div> :
    <div className="w-full h-[200px] rounded-lg bg-slate-200 animate-pulse">

    </div>}
    </div>
  );
}

export default DetailHeader;
