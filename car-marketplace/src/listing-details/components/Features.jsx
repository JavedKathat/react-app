import { FaCheck } from "react-icons/fa6";
function Features({features}) {
    // if (typeof features === 'object' && !Array.isArray(features)) {
    //     for (const [key, value] of Object.entries(features)) {
    //       console.log(`features ${key}: ${value}`);
    //     }
    //   } else {
    //     console.error("features is not an object");
    //   }
  
      
  return (
    <div>
        <div className="w-[95%] my-7 p-10 bg-white rounded-xl border shadow-md hover:bg-slate-50">
            <h2 className="text-2xl font-medium">Features</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4">
                {Object.entries(features).map(([feature, value])=>(
                    <div key={feature} className="flex gap-2 mb-1 align-middle items-center">
                        {value&& <FaCheck className="text-primary text-xl bg-blue-100 rounded-full font-medium p-1"/>}
                        {feature} 
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Features