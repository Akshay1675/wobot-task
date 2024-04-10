import {Search} from "lucide-react"
import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

const Header = () => {

  const [value, setValue] = useState("")

  const currentPage = useLocation()
  const navigate = useNavigate()
  const handleClick = () => {
    navigate("/search?q=" + value)
  }
  // const getQueryData = async () => {
  //   const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${value}&apiKey=${import.meta.env.VITE_API_KEY}`)
  //   const json = await data.json()
  //   dispatch(addSearchResults(json))
    
  // }

  // useEffect(() => {
  //   getQueryData()
  // }, [value])
  return (
    <div className="p-6 justify-between text-center md:flex items-center shadow-lg">
      <h1 className="font-bold text-2xl text-orange-500">Receipe Book</h1>
      <div className="flex items-center ">
      <input value={value} onChange={(e) => setValue(e.target.value)} placeholder="Find a receipe" className="w-96 my-4 md:my-0 md:py-2 py-1 px-4 font-semibold border-black border-[1px] rounded-tl-lg rounded-bl-lg "/>
      <Search className="border-black border-[1px] rounded-tr-lg rounded-br-lg md:h-[42px]  h-[34px] md:w-10 md:p-2 w-8" onClick={handleClick}/>
      </div>
      <div className="md:mx-4 justify-between flex items-center">
      {(currentPage.pathname === "/receipe" || currentPage.pathname === "/search") && <button className="mr-6 px-4 py-2 bg-orange-400 text-black font-bold rounded-lg hover:bg-orange-400/80 " onClick={() => navigate("/")}>Home</button>}
      </div>
      
    </div>
  )
}

export default Header
