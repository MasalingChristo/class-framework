import React,{useState, useEffect} from 'react';
import firebase from '../../config/Firebase';
//import NavBar from '../molecules'

const Dashboard = () =>{

    const[productName, setProductName]= useState ('')
    const[category, setCategory]= useState ('')
    const[price, setPrice] = useState ('')
    const [product, setProduct] = useState ([])
    const [button, setButton] = useState ("Save")
    const [selectedProduct, setSelectedProduct] = useState ({})

    useEffect(()=>{
        firebase
        .database()
        .ref('products')
        .on('value', (res) => {
            
            if(res.val()){
                const rawData = res.val();
                const productArr = [];
                Object.keys(rawData).map(item => productArr.push({
                    id: item,
                    ...rawData[item],
                })); 
                setProduct(productArr);         
            }
        });
    },[]);


    const resetForm = () =>{
        setProductName("");
        setCategory("");
        setPrice("");
        setButton('Save')
        setSelectedProduct({})
    }

    const onSubmit = () =>{
        const data={
            productName:productName,
            category:category,
            price:parseFloat(price) + 1000,
        };
        if(button === 'Save'){

            firebase.database().ref('products').push(data);
        }
        else{
            //update
            firebase.database().ref(`products/${selectedProduct.id}`).set(data);

            //update cara lain
        //  firebase.database()
            // .ref('products')
            // .child(setSelectedProduct.id)
            // .update(data)
        }
        
        resetForm(); 
    }

    const onUpdateData = (item)=>{
        setProductName(item.productName)
        setCategory(item.category)
        setPrice(item.price)
        setSelectedProduct(item)
        setButton("Update")
    }

    const onDeleteData =  (item) => {

        firebase.database().ref(`products/${item.id}`).remove();
    }

    return(
        // <div className="container">
        //     <NavBar/>
        //     <h3>Dashboard</h3>
            
        // </div>

        <div className="container">
            <h3>Dashboard</h3>

            <div className="col-4">

            <p>Product Name</p>
            <input
            placeholder="Type the product name"
            className="form-control" 
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            />
            
            <p>Category</p>
            <input
            placeholder="Type the category"
            className="form-control" 
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            />

            <p>Price</p>
            <input
            placeholder="Type the price"
            className="form-control" 
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            />

            <br/>
            <button className="btn btn-primary"
            onClick={onSubmit}
            >{button}</button>

            {
                button === 'Update' &&<button className="btn btn-warning"
                onClick={resetForm}>
                Cancel Update
                </button>
            }


            </div>
            <hr/>
            <table class="table table-striped table-hover">
            <thead>
                <tr> 
                    <th>Product Name</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    product.map(item =>(
                        <tr key={item.id}>
                            <td>{item.productName}</td>
                            <td>{item.category}</td>
                            <td>{item.price}</td>
                            <td>
                                <button className="btn btn-success"
                                onClick={()=>onUpdateData(item)}>
                                Update</button>


                                <button className="btn btn-danger"
                                onClick={()=>onDeleteData(item)}>
                                Delete</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
            </table>
        </div>
    )
}
export default Dashboard;