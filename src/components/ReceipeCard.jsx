import { data } from "autoprefixer"

const ReceipeCard = ({data}) => {
  return (
    <div className=' py-4 w-[300px] md:mx-3 mx-7  hover:text-orange-600'>
      <img src={data.image} alt={data.title} className="w-[300px] rounded-lg"/>
      <h1 className="pt-2 font-bold text-lg w-72">{data.title}</h1>
    </div>
  )
}

export const withPopularLabel = (ReceipeCard) => {
  return (props) => {
    return (
      <div className="">
       <label className="absolute bg-black text-white m-2 p-2 rounded-md font-bold">Popular</label>
       <ReceipeCard {...props}/>
      </div>
    )
  }
  
}

export default ReceipeCard
