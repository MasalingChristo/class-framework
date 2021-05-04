import React, {useState, useEffect} from "react";
import NavBar from '../molecules'
import firebase from '../../config/Firebase'

const Login =()=> {

    
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")

    const handleSubmit =()=>{
        const data ={
            email: email,
            password: password,
        };
        //console.log(data)
    }
    firebase.auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        console.log(userCredential)

   
  })
  .catch((error) => {

    console.log('error')
    
  });
  

    return(
        <div className="container">
            <NavBar/>
            <h3>Login</h3>
            <p>Email</p>
            <input placeholder= "Masukkan Email Anda" 
            value={email} 
            onChange ={(e)=>setEmail(e.target.value)}
            />
            <p>Password</p>
            <input placeholder="Masukkan Password Anda"
            type="password"//membuat password menjadi tidak terbaca
            value={password}
            onChange ={(e)=>setPassword(e.target.value)}
            />
            <br></br> 
            <br/>
            <button type="button"onClick={handleSubmit} 
            className="btn btn-primary">Submit
            </button> 
        </div>

    );
};

export default Login;