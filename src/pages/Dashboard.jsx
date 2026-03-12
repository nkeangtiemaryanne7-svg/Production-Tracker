function Dashboard(){

return(

<div className="layout">

<Sidebar/>

<div className="content">

<h1>Dashboard</h1>

<div className="stats">

<div className="stat-box">
<h3>150</h3>
<p>Products in Inventory</p>
</div>

<div className="stat-box">
<h3>32</h3>
<p>Production Tasks</p>
</div>

<div className="stat-box">
<h3>12</h3>
<p>Pending Requests</p>
</div>

</div>

</div>

</div>

)

}

export default Dashboard;