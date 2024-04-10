import { useEffect, useState } from "react";
import { RECEIPE_URL } from "../utils/constants";
import ReceipeCard, { withPopularLabel } from "./ReceipeCard";
import { Link } from "react-router-dom";
import CardShimmer from "./CardShimmer";
import ErrorComponent from "./ErrorComponent";

const MainContainer = () => {
  const [receipes, setReceipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const PopularReceipeCard = withPopularLabel(ReceipeCard);

  const getReceipes = async () => {
    const check = localStorage.getItem("popular");

    if (check) {
      setReceipes(JSON.parse(check));
      setLoading(false);
    } else {
      try {
        setLoading(true);
        const data = await fetch(RECEIPE_URL);
        const json = await data.json();
        console.log(json);
        setReceipes(json?.recipes);
        localStorage.setItem(
          "popular",
          JSON.stringify(json.recipes ? json.recipes : null)
        );
        setLoading(false);
        setError(null);
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    }
  };
  useEffect(() => {
    getReceipes();
  }, []);

  const handlebuttonClick = () => {
    setLoading(true);
   const filterData = receipes.filter(receipe => receipe.vegetarian)
   setReceipes(filterData)
   setLoading(false)
  }
  return loading ? (
    <CardShimmer />
  ) : !error ? (
    <div>
      <button className="mt-6 ml-12 px-4 py-2 font-bold border-[2px] rounded-lg hover:bg-green-500  hover:text-white hover:border-green-500" onClick={handlebuttonClick}>
        Veg
      </button>
      <div className="mx-auto md:ml-4 mt-4 p-2 flex flex-wrap">
        {receipes?.map((receipe) => (
          <Link key={receipe.id} to={"/receipe?id=" + receipe.id}>
            {receipe.veryPopular ? (
              <PopularReceipeCard data={receipe} />
            ) : (
              <ReceipeCard data={receipe} />
            )}
          </Link>
        ))}
      </div>
    </div>
  ) : (
    <ErrorComponent errorData={error} />
  );
};

export default MainContainer;
