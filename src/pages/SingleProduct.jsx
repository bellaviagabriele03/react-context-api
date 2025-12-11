import axios from "axios"
import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"



export default function SingleProduct() {

    const { id } = useParams()
    const [single, setSingle] = useState([])

    function getSingleProduct() {
        axios.get(`https://fakestoreapi.com/products/${id}`).then((resp) => {
            setSingle(resp.data)
            
            
            if(single.length -1 === 0) {
                console.log(single);
                
                
            }
        })


    }


    useEffect(() => {
        getSingleProduct();
    }, [id])


    return (
        <div className="container">
            <div className="row mt-5 g-2">
                <div className="col-12 col-md-8 border border-dark rounded-start p-5 d-flex justify-content-center">
                    <img className="" src={single.image} alt="" />
                </div>
                <div className="col-12 col-md-4 bg-dark text-white rounded-end ">
                    <h2 className="border-bottom">{single.title}</h2>
                    <p className="">{single.description}</p>
                    <div className="d-flex flex-column align-items-center">
                        <h3> Prezzo:  <span className="bg-danger rounded p-2">{single.price} €</span></h3>
                        <p>Categoria:  {single.category}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}