import React, {useState, useEffect} from "react";
import NavBar from '../molecules'

const Login =()=> {

    
    const[username, setusername] = useState("")
    const[password, setpassword] = useState("")

    const handleSubmit =()=>{
        const data ={
            username: username,
            password: password,
        };
        console.log(data)
    }
  

    return(
        <div className="container">
            <NavBar/>
            <h3>Login</h3>
            <p>User Name</p>
            <input placeholder= "Masukkan User Name Anda" 
            value={username} 
            onChange ={(e)=>setusername(e.target.value)}
            />
            <p>Pasword</p>
            <input placeholder="Masukkan Password Anda"
            type="password"//membuat password menjadi tidak terbaca
            value={password}
            onChange ={(e)=>setpassword(e.target.value)}
            />
            <br></br> 
            <button type="button"onClick={handleSubmit} className="btn btn-primary">Submit
            </button> 
        </div>

    );
};

export default Login;