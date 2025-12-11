import { useEffect, useState } from "react"
import style from "./Products.module.css"
import axios from "axios"
import { Link } from "react-router-dom"

export default function Products() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products").then((resp) => {
            setProducts(resp.data)
        })
    }, [])



    return (
        <>
            <div className={`text-black text-center`}>
                <h1 className="">Veni, Vidi, Acquisti:</h1>
                <p className="fs-2">I prodotti dei gladiatori di Boolean</p>
            </div >
            <div className="container mt-4">
                <div className="row g-3">
                    {products.map((product)=>{
                        return (
                            <div key={product.id} className="col-3">
                                <div className="card bg-secondary text-white h-100">
                                    <div className="card-body text-center d-flex flex-column">
                                        <img className="card-img" src={product.image} alt="" />
                                        <h5 className="card-title ">{product.title}</h5>
                                        <span className="card-text ">{product.price} €</span>
                                        <Link to={`/products/${product.id}`} className="btn btn-success">Vedi dettagli</Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}