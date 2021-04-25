import React, {useState, useEffect} from "react";
import NavBar from '../molecules'

const Login =()=> {

    const[fullname, setfullname] = useState("")
    const[username, setusername] = useState("")
    const[email, setemail] = useState("")
    const[phonenumber, setphonenumber] = useState("")
    const[address, setaddress] = useState("")


    const handleSubmit =()=>{
        const data ={
            fullname:fullname,
            username: username,
            email:email,
            phonenumber: phonenumber,
            address: address,

        };
        console.log(data)
    }
  

    return(
        <div className="container">
            <NavBar/>
            <h3>Register</h3>

            <p>full Name</p>
            <input placeholder= "Masukkan Full Name" 
            value={fullname} 
            onChange ={(e)=>setfullname(e.target.value)}
            />


            <p>User Name</p>
            <input placeholder= "Masukkan User Name" 
            value={username} 
            onChange ={(e)=>setusername(e.target.value)}
            />

            <p>Email</p>
            <input placeholder= "Masukkan User email" 
            value={email} 
            onChange ={(e)=>setemail(e.target.value)}
            />

            <p>phone Number</p>
            <input placeholder="Masukkan Phone Number"
            value={phonenumber}
            onChange ={(e)=>setphonenumber(e.target.value)}
            />

            
            <p>Address</p>
            <input placeholder="Masukkan address "
            value={address}
            onChange ={(e)=>setaddress(e.target.value)}
            />


            <br></br> 
            <button type="button"onClick={handleSubmit}>Submit
            </button> 
        </div>

    );
};

export default Login;