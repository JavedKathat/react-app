import Header from "@/components/Header";
import { Search } from "@/components/Search";
import { db } from "../../../configs";
import { CarImages, CarListing } from "../../../configs/schema";
import { useParams } from "react-router-dom";
import { eq } from "drizzle-orm";
import { useEffect, useState } from "react";
import Service from "@/Shared/Service";
import CarItem from "@/components/CarItem";
import { Separator } from "@/components/ui/separator";

function SearchByCategory() {
  const { category } = useParams();
  const [carList, setCarList] = useState([]);

  useEffect(() => {
    GetCarList();
  }, []);

  const GetCarList = async () => {
    const result = await db
      .select()
      .from(CarListing)
      .innerJoin(CarImages, eq(CarListing.id, CarImages.carListingId))
      .where(eq(CarListing.category, category));
    const resp = await Service.FormatResult(result);
    setCarList(resp);
  };
  return (
    <div>
      <Header />
      <div className="bg-blue-900 p-16 flex justify-center">
        <Search />
      </div>
      <div className=" px-10 my-16 md:px-20">
        <h2 className="text-4xl font-bold">{category}</h2>
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

        {/* {carList.map((car, index) => (
          <div
            key={index}
            className="border rounded-lg p-3 items-center flex flex-col hover:shadow-lg cursor-pointer"
          >
            <img src={car.image} alt={car.name} width={250} height={250} />
            <h2 className="mt-2">{car.name}</h2>
            <h2 className="mt-2">Price: {car.price}</h2>
            <h2 className="mt-2">Year: {car.year}</h2>
          </div>
        ))} */}
      </div>
    </div>
  );
}

export default SearchByCategory;
