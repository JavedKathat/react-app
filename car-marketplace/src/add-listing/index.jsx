import Header from "@/components/Header";
import carDetails from "@/Shared/carDetails.json";
import InputField from "./components/InputField";
import DropdownField from "./components/DropdownField";
import TextAreaField from "./components/TextAreaField";
import { Separator } from "@/components/ui/separator";
import features from "@/Shared/features.json";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { db } from "../../configs";
import { CarImages, CarListing } from "../../configs/schema";
import IconField from "./components/IconField";
import UploadImages from "./components/UploadImages";
import { BiLoaderAlt } from "react-icons/bi";
import { toast } from "sonner";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

import moment from "moment";
import { eq } from "drizzle-orm";
import Service from "@/Shared/Service";

function AddListing({ title, action }) {
  const [formData, setFormData] = useState([]);
  const [featuresData, setFeaturesData] = useState([]);
  const [carImagesUrl, setCarImagesUrl] = useState([]);
  const [triggerUploadImages, setTriggerUploadImages] = useState();
  const [searchParams] = useSearchParams();
  const [carInfo, setCarInfo] = useState([]);
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const { user } = useUser();

  const mode = searchParams.get("mode");
  const recordId = searchParams.get("id");

  useEffect(() => {
    if (mode === "edit") {
      getListingDetails();
    }
  }, []);

  const getListingDetails = async () => {
    const result = await db
      .select()
      .from(CarListing)
      .innerJoin(CarImages, eq(CarListing.id, CarImages.carListingId))
      .where(eq(CarListing.id, recordId));

    const resp = Service.FormatResult(result);
    setCarInfo(resp[0]);
    setFormData(resp[0]);
    setFeaturesData(resp[0]?.features);
    setCarImagesUrl(resp[0]?.images);
  };

  // carImagesUrl.forEach((item) => {
  //   console.log(item.imageUrl);
  // });

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
    // console.log(formData);
  };

  /**
   * Save Features Data using handleFeaturesData
   * @param {*} name
   * @param {*} value
   */
  const handleFeaturesData = (name, value) => {
    setFeaturesData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // console.log(featuresData);
  };

  const onSubmit = async (e) => {
    setLoader(true);
    e.preventDefault();
    console.log(formData);
    toast("Please wait...");
    // console.log(user?.primaryEmailAddress?.emailAddress)
    if (mode == "edit") {
      const result = await db
        .update(CarListing)
        .set({
          ...formData,
          features: featuresData,
          createdBy: user?.primaryEmailAddress?.emailAddress,
          postedOn: moment().format("DD-MM-YYYY HH:mm:ss"),
        })
        .where(eq(CarListing.id, recordId)).returning({ id: CarListing.id });
        toast.success("Listing updated successfully");
        setLoader(false);
        navigate("/profile");
        console.log("Result  ", result);
        
    } else {
      try {
        const result = await db
          .insert(CarListing)
          .values({
            ...formData,
            features: featuresData,
            createdBy: user?.primaryEmailAddress?.emailAddress,
            postedOn: moment().format("DD-MM-YYYY HH:mm:ss"),
          })
          .returning({ id: CarListing.id });
        if (result) {
          console.log("Data saved succesfully");
          setTriggerUploadImages(result[0]?.id);
          toast.success("Listing saved successfully");
          setLoader(false);
          navigate("/profile");
        }
      } catch (e) {
        setLoader(false);
        console.log("Error occured while saving data ", e);
      }
    }
  };
  return (
    <div>
      <Header />
      <div className="px-10 md:px-20 my-10">
        <h2 className="text-4xl font-bold">{title} Listing</h2>
        <form className="mt-10 p-10 border rounded-xl">
          {/* Car Details */}
          <div className="">
            <h2 className="font-medium text-xl mb-6">Car Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {carDetails.carDetails.map((item, index) => (
                <div key={index} className="mb-1">
                  <label className="text-sm text-gray-600 flex items-center gap-2 mb-1">
                    <IconField icon={item?.icon} />
                    {item.label}{" "}
                    {item.required && <span className="text-red-600">*</span>}
                  </label>
                  {item.fieldType === "text" || item.fieldType === "number" ? (
                    <InputField
                      item={item}
                      handleInputChange={handleInputChange}
                      carInfo={carInfo }
                    />
                  ) : item.fieldType === "dropdown" ? (
                    <DropdownField
                      item={item}
                      handleInputChange={handleInputChange}
                      carInfo={carInfo}
                    />
                  ) : item.fieldType === "textarea" ? (
                    <TextAreaField
                      item={item}
                      handleInputChange={handleInputChange}
                      carInfo={carInfo}
                    />
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
                  <Checkbox
                    onCheckedChange={(value) =>
                      handleFeaturesData(item.name, value)
                    }
                    checked={featuresData?.[item?.name]}
                  />
                  <h2>{item.label}</h2>
                </div>
              ))}
            </div>
          </div>

          <Separator className="my-10" />
          {/* Car Images */}
          <UploadImages
            triggerUploadImages={triggerUploadImages}
            setLoader={(v) => {
              setLoader(v);
              navigate("/profile");
            }}
            carImagesUrl={carImagesUrl}
            carInfo={carInfo}
            mode={mode}
          />

          {/* Save Data */}
          <div className="mt-10 flex justify-end">
            <Button
              onClick={(e) => onSubmit(e)}
              className="bg-primary text-white py-2 rounded-lg mt-10 me-10"
              disabled={loader}
            >
              {!loader ? (
                action
              ) : (
                <BiLoaderAlt className="animate-spin text-lg" />
              )}
            </Button>
          </div>
        </form>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default AddListing;
