import { Button } from "@/components/ui/button";
import { MdOutlineLocalOffer } from "react-icons/md";

function Pricing({carDetails}) {
  return (
    <div className="border bg-white shadow-md rounded-xl p-10">
        <h2 className="text-xl">Our Price</h2>
        
        <h2 className="text-3xl font-bold flex items-center my-3">₹{carDetails.sellingPrice} Lac</h2>

        <Button className="w-full mt-7" size="lg"><MdOutlineLocalOffer className="text-xl mr-1" />Make an Offer now!</Button>
    </div>
  )
}

export default Pricing