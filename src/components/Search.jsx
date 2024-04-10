import { Link, useSearchParams } from "react-router-dom"
import { useEffect, useState } from "react"
import ReceipeCard from "./ReceipeCard";
import CardShimmer from "./CardShimmer";



const Search = () => {
  const [searchResults, setSearchResults] = useState([])
  const [loading, setLoading] = useState(true)
  const [value] = useSearchParams()   
  const query = value.get("q")
  
  const getSearchResults = async () => {
    setLoading(true)
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${import.meta.env.VITE_API_KEY}`)
    const json = await data.json()
    setSearchResults(json.results)
    setLoading(false)
  }
  useEffect(() => {
    getSearchResults()
  }, [query])
  
  return loading ? <CardShimmer /> :  (
    searchResults.length ? <div className="mx-auto md:ml-4 mt-4 p-2 flex flex-wrap">
      {searchResults?.map(s => <Link key={s.id} to={"/receipe?id=" + s.id}><ReceipeCard data={s}/></Link>) 
       }
    </div> : <div className="text-center mt-10  mx-auto">
        <h1 className="text-2xl  font-bold">0 results found for your search.</h1>
        <p className="text-lg mt-6 font-semibold">Please try another search term</p>
      </div>
  )
}

export default Search
