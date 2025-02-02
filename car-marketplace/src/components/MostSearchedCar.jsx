import FakeData from "@/Shared/FakeData";
import CarItem from "./CarItem";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const MostSearchedCar = () => {
  return (
    <div className="mx-24 ">
      <h2 className="font-bold text-3xl text-center mt-16 mb-8">
        Most Searched Car
      </h2>

      {/* CarItem section */}
      <Carousel>
        <CarouselContent>
          {FakeData.carList.map((car, index) => (
            <CarouselItem key={index} className="basis-1/4">
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
