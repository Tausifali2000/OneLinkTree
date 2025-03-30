import CatCard from "../component/CatCard";
import categories from "../data/Categories.js";
import { Link } from "react-router-dom";
import EssentialCard from "../component/EssentialCard.jsx";
import { essentialData } from "../data/essentialsData.js";

const Home = () => {
  return (
    <div className="w-full p-4">
      {/* Responsive Layout: Two Equal Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Categories Section */}
        <div className="flex flex-col  p-4">
          <h1 className="font-normal text-2xl mb-4">Categories</h1>

          {/* Grid for Category Cards with Max Column Width of 350px */}
          <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] max-w-[700px] gap-4">
            {categories.map((category, index) => (
              <Link
                key={index}
                to={`/${category.toLowerCase()}`}
                className="no-underline text-white hover:opacity-80"
              >
                <CatCard name={category} />
              </Link>
            ))}
          </div>
        </div>

        {/* Essentials Section */}
        <div className="flex flex-col p-4">
          <h2 className="font-normal text-2xl mb-4">Essentials</h2>
          
          {/* Grid for Essential Cards with Max Column Width of 350px */}
          <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] max-w-[700px] gap-4">
            {Object.values(essentialData).map((essential, index) => (
              <EssentialCard key={index} title={essential.title} items={essential.items} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
