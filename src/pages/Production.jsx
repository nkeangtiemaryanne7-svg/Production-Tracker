import {useState} from "react";
function Production(){

const [product,setProduct]=useState("")
const [quantity,setQuantity]=useState("")
const [status,setStatus]=useState("Pending")

const [records,setRecords]=useState([])

const addProduction=(e)=>{

e.preventDefault()

if(!product || !quantity){

alert("Enter production details")
return

}

const newRecord={

id:Date.now(),
product,
quantity,
status

}

setRecords([...records,newRecord])

setProduct("")
setQuantity("")

}

return(

<div className="page">

<h1>Production Tracking</h1>

<form onSubmit={addProduction} className="form">

<input
placeholder="Product Name"
value={product}
onChange={(e)=>setProduct(e.target.value)}
/>

<input
type="number"
placeholder="Quantity"
value={quantity}
onChange={(e)=>setQuantity(e.target.value)}
/>

<select
value={status}
onChange={(e)=>setStatus(e.target.value)}
>

<option>Pending</option>
<option>In Progress</option>
<option>Completed</option>

</select>

<button>Add Production</button>

</form>

<table>

<thead>

<tr>
<th>ID</th>
<th>Product</th>
<th>Quantity</th>
<th>Status</th>
</tr>

</thead>

<tbody>

{records.map((r)=>(
<tr key={r.id}>
<td>{r.id}</td>
<td>{r.product}</td>
<td>{r.quantity}</td>
<td>{r.status}</td>
</tr>
))}

</tbody>

</table>

</div>

)

}

export default Production;