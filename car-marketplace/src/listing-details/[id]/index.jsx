import Header from "@/components/Header";
import DetailHeader from "../components/DetailHeader";
import { useParams } from "react-router-dom";
import { db } from "../../../configs";
import { CarImages, CarListing } from "../../../configs/schema";
import { eq } from "drizzle-orm";
import Service from "@/Shared/Service";
import { useEffect, useState } from "react";
import ImageGallery from "../components/ImageGallery";
import Description from "../components/Description";
import { BiLoaderAlt } from "react-icons/bi";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import Specification from "../components/Specification";
import OwnerDetails from "../components/OwnerDetails";
import FinanacialCalculator from "../components/FinanacialCalculator";
import Footer from "@/components/Footer";
import MostSearchedCar from "@/components/MostSearchedCar";

function ListingDetails() {
  const { id } = useParams();
  const [carDetails, setCarDetails] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    GetCarListing();
  }, [id]);

  const GetCarListing = async () => {
    const result = await db
      .select()
      .from(CarListing)
      .innerJoin(CarImages, eq(CarListing.id, CarImages.carListingId))
      .where(eq(CarListing.id, id));

    const resp = Service.FormatResult(result);
    setCarDetails(resp[0]);
    setLoader(true);

  };
  return (
    <div>
      <Header />

      {/* Header Details Components */}
      <div className="p-10 md:px-10">
        <DetailHeader carDetails={carDetails} />

        <div className="grid grid-cols-1 md:grid-cols-3 w-full mt-6">
          {/* Left  */}
          {!loader ? (
            <div className="w-full h-[310px] md:col-span-2 bg-slate-100 rounded-xl animate-pulse items-center flex justify-center border">
              <BiLoaderAlt className="animate-spin text-lg" />
            </div>
          ) : (
            <>
              <div className="md:col-span-2">
                {/* Image Gallery */}
                {loader ? <ImageGallery carDetails={carDetails} /> : ""}

                {/* Description */}
                <Description carDetails={carDetails} />

                {/* FeaturesList */}
                <Features features={carDetails?.features} />

                {/* FinanacialCalculator */}
                <FinanacialCalculator carDetails={carDetails} />
              </div>

              {/* Right */}
              <div>
                {/* Pricing */}
                <Pricing carDetails={carDetails} />

                {/* Car Specification */}
                <Specification carDetails={carDetails} />

                {/* Owners Details */}
                <OwnerDetails carDetails={carDetails}/>
              </div>
            </>
          )}
        </div>
        <MostSearchedCar/>
      </div>
      <Footer/>
    </div>
  );
}

export default ListingDetails;
