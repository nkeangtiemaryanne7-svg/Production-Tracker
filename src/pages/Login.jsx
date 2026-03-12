import {useState} from "react";
 function Login(){

const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

const handleSubmit=(e)=>{

e.preventDefault();

if(!email || !password){

alert("Enter email and password");

return;

}

alert("Login Successful");

}

return(

<div className="login-container">

<form className="login-box" onSubmit={handleSubmit}>

<h2>System Login</h2>

<input
type="email"
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<button>Login</button>

</form>

</div>

)

}

export default Login;