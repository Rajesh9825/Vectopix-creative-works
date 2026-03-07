import { useParams, useNavigate } from "react-router-dom";
import { portfolioStructure } from "@/data/portfolioData";

const CategoryPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  const categories = portfolioStructure[category as keyof typeof portfolioStructure];

  return (
    <div className="container mx-auto px-6 py-24">

      <h1 className="text-5xl font-bold mb-12">{category}</h1>

      <div className="grid md:grid-cols-3 gap-8">

        {Object.keys(categories).map((sub) => (

          <div
            key={sub}
            className="p-8 border rounded-xl cursor-pointer hover:shadow-xl"
            onClick={() =>
              navigate(`/portfolio/${category}/${encodeURIComponent(sub)}`)
            }
          >
            <h3 className="text-xl font-semibold">{sub}</h3>
          </div>

        ))}

      </div>
    </div>
  );
};

export default CategoryPage;