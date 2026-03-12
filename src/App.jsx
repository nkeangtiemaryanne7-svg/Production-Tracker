import {Routes,Route} from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Sidebar from "./components/Sidebar.jsx";

import Home from "./pages/Login.jsx";
import About from "./pages/About.jsx";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Inventory from "./pages/Inventory.jsx";
import Production from "./pages/production.jsx";
import Reports from "./pages/Reports.jsx";



function App(){

return(

<div>

<Navbar/>

<Routes>

<Route path="/" element={<Home/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/dashboard" element={<Dashboard/>}/>
<Route path="/inventory" element={<Inventory/>}/>
<Route path="/production" element={<Production/>}/>
<Route path="/reports" element={<Reports/>}/>

</Routes>

<Footer/>

</div>

)

}

export default App;