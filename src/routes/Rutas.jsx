import { Routes, Route} from "react-router-dom";
import Home from "../components/Home";
import SignIn from "../components/SignIn";
import Trivia from "../components/Trivia";





export default function Rutas () {
 return( <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/registro" element={<SignIn/>}/>
            <Route path="/trivia" element={<Trivia/>}/>
        </Routes>)
}