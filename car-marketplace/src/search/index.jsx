import Service from "@/Shared/Service";
import { db } from "../../configs";
import { CarImages, CarListing } from "../../configs/schema";
import { eq } from "drizzle-orm";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

function SearchByOptions() {
  const [searchParam] = useSearchParams();
  const condition = searchParam.get("cars");
  const make = searchParam.get("make");
  const price = searchParam.get("price");
  console.log(condition, make, price);

  useEffect(()=>{
    getCarListing();
  },[]);

  const getCarListing = async () => {
    const result = await db
      .select()
      .from(CarListing)
      .innerJoin(CarImages, eq(CarListing.id, CarImages.carListingId))
      .where(condition!=undefined&&eq(CarListing.condition, condition))
      .where(make!=undefined&&eq(CarListing.make, make));
    //   .where(price!=undefined&&eq(CarListing.price, price))
      
    const resp = Service.FormatResult(result)
    console.log(resp);
    
  };

  return <div>SearchByOptions</div>;
}

export default SearchByOptions;
