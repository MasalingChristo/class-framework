// import React, {useState, useEffect} from "react";
// import NavBar from '../molecules'

// const Login =()=> {

    
//     const[email, setemail] = useState("")
//     const[firstname, setfirstname] = useState("")
//     const[lastname, setlastname] = useState("")
   


//     const handleSubmit =()=>{
//         const data ={
            
//             email:email,
//             firstname:firstname,
//             lastname: lastname,
//         };
//         console.log(data)
//     }
  
//     return(
//         <div className="container">
//             <NavBar/>
//             <h3>Register</h3>

            

//             <p>Email</p>
//             <input placeholder= "Masukkan User email" 
//             value={email} 
//             onChange ={(e)=>setemail(e.target.value)}
//             />

//             <p>first Name</p>
//             <input placeholder= "Masukkan first Name" 
//             value={firstname} 
//             onChange ={(e)=>setfirstname(e.target.value)}
//             />

//             <p>last Name</p>
//             <input placeholder= "Masukkan Last Name" 
//             value={lastname} 
//             onChange ={(e)=>setlastname(e.target.value)}
//             />



//             <br></br> 
//             <button type="button"onClick={handleSubmit}>Save
//             </button> 
//         </div>

//     );
// };

// export default Login;