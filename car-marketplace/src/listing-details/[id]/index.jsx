import Header from "@/components/Header";
import DetailHeader from "../components/DetailHeader";
import { useParams } from "react-router-dom";
import { db } from "../../../configs";
import { CarImages, CarListing } from "../../../configs/schema";
import { eq } from "drizzle-orm";
import Service from "@/Shared/Service";
import { useEffect, useState } from "react";

function ListingDetails() {
  const { id } = useParams();
  const [carDetails, setCarDetails] = useState([]);

  useEffect(()=>{
    GetCarListing();
  },[]);

  const GetCarListing = async () => {
    const result = await db
      .select()
      .from(CarListing)
      .innerJoin(CarImages, eq(CarListing.id, CarImages.carListingId))
      .where(eq(CarListing.id, id));
    const resp = Service.FormatResult(result);
    setCarDetails(resp[0]);
  };
  return (
    <div>
      <Header />

      {/* Header Details Components */}
      <div className="p-10 md:px-10">
        <DetailHeader carDetails={carDetails}/>
      </div>
    </div>
  );
}

export default ListingDetails;
