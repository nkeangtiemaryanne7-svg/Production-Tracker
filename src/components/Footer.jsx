import {Link} from "react-router-dom"
function Footer(){

return(

<footer className="footer">

<div className="footer-container">

{/* Column 1 */}
<div className="footer-col">
<h3>Production Tracker</h3>
<p>
A system designed to help organizations manage inventory,
track production activities and generate reports efficiently.
</p>
</div>

{/* Column 2 */}
<div className="footer-col">
<h3>Quick Links</h3>
<ul>
<li>Home</li>
<li>Dashboard</li>
<li>Inventory</li>
<li>Production</li>
</ul>
</div>

{/* Column 3 */}
<div className="footer-col">
<h3>Services</h3>
<ul>
<li>Inventory Management</li>
<li>Production Tracking</li>
<li>Supply Requests</li>
<li>Reports</li>
</ul>
</div>

{/* Column 4 */}
<div className="footer-col">
<h3>Contact</h3>
<p>Email: support@tracker.com</p>
<p>Phone: +237 670 000 000</p>
<p>Location: Yaounde</p>
</div>

</div>

<div className="footer-bottom">

<p>© 2026 Production Tracker System</p>

</div>

</footer>

)

}

export default Footer;