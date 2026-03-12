import {Link} from "react-router-dom";
 function Navbar(){

return(
<>
<nav className="navbar">

<h2>Production Tracker</h2>

<div className="nav-links">

<Link to="/">Home</Link>
<Link to="/dashboard">Dashboard</Link>
<Link to="/inventory">Inventory</Link>
<Link to="/production">Production</Link>
<Link to="/reports">Reports</Link>
<Link to="/about">About</Link>
<Link to="/login">Login</Link>

</div>

</nav>
</>

)

}

export default Navbar;