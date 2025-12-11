import axios from "axios"
import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"



export default function SingleProduct() {

    const { id } = useParams()
    const [single, setSingle] = useState([])

    function getSingleProduct() {
        axios.get(`https://fakestoreapi.com/products/${id}`).then((resp) => {            
            setSingle(resp.data)

        })
            
       
    }


    useEffect(() => {
        getSingleProduct();
    }, [id])


    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                   <div className="card h-100 ">
                    <img className="card-img" src={single.image} alt="" />
                    <div className="card-body">
                        <h3 className="text-center">{single.title}</h3>
                    </div>
                   </div>
                </div>
            </div>
            
        </div>
    )
}