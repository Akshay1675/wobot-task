import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { NONVEG_ICON, VEG_ICON } from "../utils/constants";
import { Clock } from "lucide-react";
import InfoShimmer from "./InfoShimmer";

const ReceipeInfo = () => {
  const [loading, setLoading] = useState(true);
  const [receipeInfo, setReceipeInfo] = useState(null);
  const [search] = useSearchParams();
  const id = search.get("id");
  const getReceipeInfo = async () => {
    setLoading(true);
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${import.meta.env.VITE_API_KEY}`
    );
    const json = await data.json();
    console.log(json);
    setReceipeInfo(json);
    setLoading(false);
  };
  useEffect(() => {
    getReceipeInfo();
  }, [id]);

  window.scrollTo(top)

  return loading ? (
    <InfoShimmer />
  ) : (
    <div className="mt-16 md:mx-40 p-2 md:w-[1000px]">
      <h1 className="md:text-5xl text-2xl font-bold md:w-[600px]">{receipeInfo?.title}</h1>
      <div className="flex items-center mt-4">
        <div className="flex items-center mx-2">
          <Clock />
          <p className="font-normal md:text-base text-sm text-slate-500 mx-2">
            {receipeInfo?.readyInMinutes} mins
          </p>
        </div>
        {receipeInfo?.vegetarian ? (
          <img src={VEG_ICON} alt="veg" className="w-10" />
        ) : (
          <img src={NONVEG_ICON} alt="Non veg" className="w-12" />
        )}
      </div>
      <p
        dangerouslySetInnerHTML={{ __html: receipeInfo?.summary }}
        className="font-normal md:text-lg text-sm my-6"
      ></p>
      <img
        src={receipeInfo?.image}
        alt={receipeInfo?.title}
        className="w-[600px] my-6 rounded-lg"
      />
      <h3 className="md:text-4xl text-xl mt-8 font-bold">Ingredients</h3>
      <ul className="my-4 ">
        {receipeInfo?.extendedIngredients?.map((ingredient) => (
          <li key={ingredient.id} className="font-medium list-item list-inside  list-disc text-lg my-2">
            {ingredient.name}
          </li>
        ))}
      </ul>
      <h3 className="md:text-4xl text-xl font-bold mt-8 mb-2">Directions</h3>
      <p
        dangerouslySetInnerHTML={{ __html: receipeInfo?.instructions }}
        className=" md:text-lg text-base font-normal pb-4"
      ></p>
    </div>
  );
};

export default ReceipeInfo;
