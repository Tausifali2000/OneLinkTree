
import { Route,Routes } from "react-router-dom"
import DesktopLayout from "./layout/DesktopLayout"
import Home from "./pages/Home"
import Games from "./pages/categories/Games"
import Enter from "./pages/categories/Enter"
import Anime from "./pages/categories/Anime"
import Soft from "./pages/categories/Soft"


function App() {
 

  return (
   <>
   <Routes>
    <Route path="/" element={<DesktopLayout />}>
      <Route index element={<Home />} />
      <Route path="/games" element={<Games />} />
      <Route path="/entertainment" element={<Enter />} />
      <Route path="/anime" element={<Anime />} />
      <Route path="/softwares" element={<Soft />} />
    </Route>
  </Routes>
  
   </>
  )
}

export default App
