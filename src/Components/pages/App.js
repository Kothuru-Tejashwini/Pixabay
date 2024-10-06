import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page from "./Page1";
import Login from "./Login";
import Register from "./Register";
import Pagenew from "./Pagenew";
import Error from "./Error";
import "./Style.css"
// import Footer from "./Components/Footer"

export default function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Page/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/mainpage" element={<Pagenew/>}/>
      <Route path="*" element={<Error/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}
