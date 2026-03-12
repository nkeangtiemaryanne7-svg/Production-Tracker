import {useState} from "react";

function Inventory(){

const [items,setItems]=useState([]);

const [name,setName]=useState("");
const [quantity,setQuantity]=useState("");

const addItem=(e)=>{

e.preventDefault();

if(!name || !quantity){

alert("Enter item details");
return;

}

const newItem={

id:Date.now(),
name,
quantity

}

setItems([...items,newItem])

setName("")
setQuantity("")

}

return(

<div className="page">

<h1>Inventory Management</h1>

<form onSubmit={addItem} className="form">

<input
placeholder="Item Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<input
type="number"
placeholder="Quantity"
value={quantity}
onChange={(e)=>setQuantity(e.target.value)}
/>

<button>Add Item</button>

</form>

<table>

<thead>

<tr>
<th>ID</th>
<th>Name</th>
<th>Quantity</th>
</tr>

</thead>

<tbody>

{items.map((item)=>(
<tr key={item.id}>
<td>{item.id}</td>
<td>{item.name}</td>
<td>{item.quantity}</td>
</tr>
))}

</tbody>

</table>

</div>

)

}

export default Inventory;