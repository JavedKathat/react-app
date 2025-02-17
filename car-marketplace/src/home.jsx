import Category from "./components/Category"
import InfoSection from "@/components/InfoSection"
import Header from "./components/Header"
import Hero from "./components/Hero"
import MostSearchedCar from "./components/MostSearchedCar"
// import FakeData from "./Shared/FakeData"
import Footer from "./components/footer"

function Home() {
  // console.log(FakeData.carList);
  return (
    <div>
      {/* Header section */}
        <Header />
        {/* Hero section */}
        <Hero />
        {/* Category section */}
        <Category />
        {/* MostSearchedCar section */}
        <MostSearchedCar />
        {/* infoSection */}
        {/* <GridWithOffsetBackground />
         */}
         <InfoSection />
         {/* Footer section */}
         <Footer />
    </div>
  )
}

export default Home
