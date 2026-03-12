import { Link } from "react-router-dom";
export function Sidebar() {
  return (
    <div className="sidebar">
      <h3>Menu</h3>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/inventory">Inventory</Link>
      <Link to="/production">Production</Link>
      <Link to="/reports">Reports</Link>
    </div>
  );
}
export default Sidebar;