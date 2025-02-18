import Service from "@/Shared/Service";
import { db } from "../../configs";
import { CarImages, CarListing } from "../../configs/schema";
import { eq } from "drizzle-orm";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import { Search } from "@/components/Search";
import { Separator } from "@radix-ui/react-select";
import CarItem from "@/components/CarItem";

function SearchByOptions() {
  const [searchParam] = useSearchParams();
  const [carList, setCarList] = useState([]);

  const condition = searchParam.get("cars");
  const make = searchParam.get("make");
  const price = searchParam.get("price");
  console.log(condition, make, price);


  useEffect(()=>{
    getCarListing();
  },[searchParam]);

  const getCarListing = async () => {
    const result = await db
      .select()
      .from(CarListing)
      .innerJoin(CarImages, eq(CarListing.id, CarImages.carListingId))
      .where(condition!=undefined&&eq(CarListing.condition, condition))
      .where(make!=undefined&&eq(CarListing.make, make));
    //   .where(price!=undefined&&eq(CarListing.price, price))
      
    const resp = Service.FormatResult(result);
    console.log(resp);
    setCarList(resp);
    
  };

  return  <div>
  <Header />
  <div className="bg-blue-900 p-16 flex justify-center">
    <Search />
  </div>
  <div className=" px-10 my-16 md:px-20">
    <h2 className="text-4xl font-bold">Searched Result</h2>
    <Separator className="my-2 p-[1px] bg-black"/>
  </div>
  {/* List of CarList */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-10 md:px-20">
    {carList.length > 0 ? carList.map((car, index) => (
        <div key={index}> 
        <CarItem car={car} />
        </div>
    )):
    [1,2,3,4,5,6].map((item, index) => (
        <div key={index} className="h-[320px] rounded-xl bg-slate-200 animate-pulse"></div>
    ))
    };

  </div>
</div>;
}

export default SearchByOptions;
