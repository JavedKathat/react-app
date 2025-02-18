import Data from "@/Shared/Data";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className="mt-40">
      <h2 className="font-bold text-3xl text-center mb-6">Browse by Type</h2>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-6 px-20">
        {Data.Category.map((category, index) => (
          <Link key={index} to={'search/'+category.name}>
            <div  className="border rounded-lg p-3 items-center flex flex-col hover:shadow-lg cursor-pointer">
                <img key={category.id} src={category.icon} alt={category.name} width={35} height={35}/>
                <h2 className="mt-2">{category.name}</h2>
            </div>
            </Link>
        ))} 
      </div>
    </div>
  );
};

export default Category;
