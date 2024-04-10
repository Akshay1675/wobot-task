
const ErrorComponent = ({errorData}) => {
  
  return (
    <div className="ml-20 mt-16 text-center">
      <p className="font-bold text-xl text-red-600">Error: {errorData.message} </p>
    </div>
  )
}

export default ErrorComponent
