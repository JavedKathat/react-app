import IconField from "@/add-listing/components/IconField";
import { Separator } from "@/components/ui/separator";
import CarSpecification from "@/Shared/CarSpecification";

function Specification({ carDetails }) {
  return (
    <div className="p-10 rounded-xl shadow-md border mt-7">
      <h2 className="font-medium text-2xl">Specification</h2>
        {carDetails? CarSpecification.map((item, index) => (
        <>
          <div key={index} className="flex mt-3 justify-between items-center">
            <h2 className="flex gap-2">
              <IconField icon={item.icon} />
              {item.label}
            </h2>
            <h2>{carDetails[item.name]}</h2>
          </div>
          <Separator className="mt-1" />
        </>
      )):
      <div className="w-full h-[500px] rounded-xl bg-slate-50 animation-pluse"></div>
      }
    </div>
  );
}

export default Specification;
