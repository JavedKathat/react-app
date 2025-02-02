// import Footer from "@/components/Footer"
import Header from "@/components/Header";
import carDetails from "@/Shared/carDetails.json";
import InputField from "./components/InputField";
import DropdownField from "./components/DropdownField";
import TextAreaField from "./components/TextAreaField";


function AddListing() {
  return (
    <div>
      <Header />
      <div className="px-10 md:px-20 my-10">
        <h2 className="text-4xl font-bold">Add New Listing</h2>
        <form className="mt-10 p-10 border rounded-xl">
          {/* Car Details */}
          <div className="">
            <h2 className="font-medium text-xl mb-6">Car Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {carDetails.carDetails.map((item, index) => (
                <div key={index} className="">
                  <label className="text-sm text-gray-600">{item.label} {item.required&&<span className="text-red-600">*</span>}</label>
                  {item.fieldType === "text" || item.fieldType === "number" ? (
                    <InputField item={item} />)
                    :item.fieldType === "dropdown" ? (<DropdownField item={item} />)
                    :item.fieldType === "textarea" ? (<TextAreaField item={item} />)
                   : null}
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          
          {/* Car Images */}
        </form>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default AddListing;
