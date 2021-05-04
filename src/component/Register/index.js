import React, {useState, useEffect} from "react";
import firebase from'../../config/Firebase'

import NavBar from '../molecules'

const Register =()=> {

    //const[fullname, setfullname] = useState("")
    //const[username, setusername] = useState("")
    const[fullName, setfullName] = useState("")
    const[email, setEmail] = useState("")
    const[password,setPassword] = useState("")
    //const[phonenumber, setphonenumber] = useState("")
    //const[address, setaddress] = useState("")


    // const handleSubmit =()=>{
    //     const data ={
    //         fullname:fullname,
    //         username: username,
    //         email:email,
    //         phonenumber: phonenumber,
    //         address: address,

    //     };
    //     console.log(data)
    // }

    const onsubmit =() =>{
        const data ={
            fullName : fullName,
            email: email,
        };

        
        firebase.auth().
        createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
        
        // console.log(userCredential)
           const userId = userCredential.user.uid
            firebase
            .database()
            .ref('users/' + userId)
            .set(data)
            .then(res =>console.log("succes",res));
          
  })
        .catch((error) => {
        
            console.log(error)
  });

        
    };
  
    

    return(
        <div className="container mt-5">
            <NavBar/>
            <h3>Register</h3>

            {/* <p>full Name</p>
            <input placeholder= "Masukkan Full Name" 
            value={fullname} 
            onChange ={(e)=>setfullname(e.target.value)}
            />


            <p>User Name</p>
            <input placeholder= "Masukkan User Name" 
            value={username} 
            onChange ={(e)=>setusername(e.target.value)}
            /> */}

            <p className="mt-4">Nama Lengkap</p>
            <input placeholder= "Masukkan Nama lengkap" 
            value={fullName} 
            onChange ={(e)=>setfullName(e.target.value)}
            />

            <p className="mt-4">Email</p>
            <input placeholder= "Masukkan User email" 
            value={email} 
            onChange ={(e)=>setEmail(e.target.value)}
            />

            <p className="mt-4">Password</p>
            <input placeholder= "Masukkan Password"
            type="password" 
            value={password} 
            onChange ={(e)=>setPassword(e.target.value)}
            />

            {/* <p>phone Number</p>
            <input placeholder="Masukkan Phone Number"
            value={phonenumber}
            onChange ={(e)=>setphonenumber(e.target.value)}
            />

            
            <p>Address</p>
            <input placeholder="Masukkan address "
            value={address}
            onChange ={(e)=>setaddress(e.target.value)}
            /> */}


            <br/>
            <br/> 
            <button type="button"onClick={onsubmit}
            className="btn btn-primary">Submit
            </button> 
        </div>

    );
};

export default Register;