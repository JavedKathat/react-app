import Category from "./components/Category"
import Header from "./components/Header"
import Hero from "./components/Hero"
import MostSearchedCar from "./components/MostSearchedCar"
import FakeData from "./Shared/FakeData"

function Home() {
  console.log(FakeData.carList);
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
    </div>
  )
}

export default Home
