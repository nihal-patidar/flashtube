import Home from "./component/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Example from "./Example";
import About from "./component/About";
import Policies from "./component/Policies"


const App = () => {

  return (

  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/policies" element={<Policies/>} />
      </Routes>
    </BrowserRouter>
  </>
  )
}
export default App;