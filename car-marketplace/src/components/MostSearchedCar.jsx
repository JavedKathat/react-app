import CarItem from "./CarItem";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { db } from "../../configs";
import { CarImages, CarListing } from "../../configs/schema";
import Service from "@/Shared/Service";
import { desc, eq } from "drizzle-orm";
import { useEffect, useState } from "react";

const MostSearchedCar = () => {
 const [carList, setCarList] = useState([]);
  useEffect(() => {
    GetPopularCarList();
  },[0]);
  const GetPopularCarList=async()=>{
    const result = await db
          .select()
          .from(CarListing)
          .leftJoin(CarImages, eq(CarListing.id, CarImages.carListingId))
          .orderBy(desc(CarListing.id))
          .limit(10)
    
          const resp=Service.FormatResult(result);
          // console.log(resp);
          setCarList(resp);
  }  

  return (
    <div className="mx-24 ">
      <h2 className="font-bold text-3xl text-center mt-16 mb-8">
        Most Searched Car
      </h2>

      {/* CarItem section */}
      <Carousel>
        <CarouselContent>
          {carList.map((car, index) => (
            <CarouselItem key={index} className=" md:basis-1/3 lg:basis-1/4">
              <CarItem car={car} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <div className="mt-16">
      </div>
    </div>
  );
};

export default MostSearchedCar;
