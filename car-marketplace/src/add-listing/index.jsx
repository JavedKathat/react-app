// import Footer from "@/components/Footer"
import Header from "@/components/Header";
import carDetails from "@/Shared/carDetails.json";
import InputField from "./components/InputField";
import DropdownField from "./components/DropdownField";
import TextAreaField from "./components/TextAreaField";
import { Separator } from "@/components/ui/separator";
import features from "@/Shared/features.json";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { db } from "../../configs";
import { CarListing } from "../../configs/schema";
import IconField from "./components/IconField";

function AddListing() {
  const [formData, setFormData] = useState([]);
  const [featuresData, setFeaturesData] = useState([]);


  /**
   * Save Input field Data using handleInputChange
   * @param {*} name 
   * @param {*} value 
   */
  const handleInputChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(formData);
  };

  /**
   * Save Features Data using handleFeaturesData
   * @param {*} name 
   * @param {*} value 
   */
  const handleFeaturesData = (name, value) =>{
    setFeaturesData((prevData) =>({
      ...prevData,
      [name]: value,
    }));
    console.log(featuresData)
  };

  const onSubmit =async(e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const result = await db.insert(CarListing).values({
        ...formData,
        features:featuresData
      });
      if(result){
        console.log("Data saved succesfully")
      }
      
    } catch (e) {
      console.log("Error occured while saving data ", e)
    }
  }
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
                <div key={index} className="mb-1">
                  <label className="text-sm text-gray-600 flex items-center gap-2 mb-1">
                  <IconField icon={item?.icon}/>
                    {item.label}{" "}
                    {item.required && <span className="text-red-600">*</span>}
                  </label>
                  {item.fieldType === "text" || item.fieldType === "number" ? (
                    <InputField
                      item={item}
                      handleInputChange={handleInputChange}
                    />
                  ) : item.fieldType === "dropdown" ? (
                    <DropdownField item={item} handleInputChange={handleInputChange}/>
                  ) : item.fieldType === "textarea" ? (
                    <TextAreaField item={item} handleInputChange={handleInputChange}/>
                  ) : null}
                </div>
              ))}
            </div>
          </div>

          <Separator className="my-10" />
          {/* Features */}
          <div>
            <h2 className="font-medium text-xl my-6">Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
              {features.features.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Checkbox onCheckedChange={(value)=>(handleFeaturesData(item.name,value))}/> <h2>{item.label}</h2>
                </div>
              ))}
            </div>
          </div>
          {/* Car Images */}

          {/* Save Data */}
          <div className="mt-10 flex justify-end">
            <Button onClick={(e)=>onSubmit(e)} className="bg-primary text-white py-2 rounded-lg mt-10 me-10">
              Save Data
            </Button>
          </div>
        </form>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default AddListing;
