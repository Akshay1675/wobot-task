import { createBrowserRouter, Outlet } from "react-router-dom"
import Header from "./components/Header"
import MainContainer from "./components/MainContainer"
import ReceipeInfo from "./components/ReceipeInfo"
import Search from "./components/Search"
 

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/receipe",
        element: <ReceipeInfo />,
      },
      {
        path: "/search",
        element: <Search />,
      },
    ]
  }
])


function App() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default App
