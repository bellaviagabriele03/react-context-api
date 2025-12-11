import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import { useBudget } from "../Context/BudgetContext"


export default function Products() {

    const [products, setProducts] = useState([])
    const [productFilter, setProductFilter] = useState([])
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products").then((resp) => {
            setProducts(resp.data)
            setProductFilter(...products);
            
        })
    }, [])


    const {changeBugetmode, budgetMode} = useBudget()
    

    
    
    


    return (
        <>
            <div className={`text-black text-center`}>
                <h1 className="">Veni, Vidi, Acquisti:</h1>
                <p className="fs-2">I prodotti dei gladiatori di Boolean</p>
                <button onClick={changeBugetmode} className="btn btn-dark">PRODOTTI LOW BUDGET</button>
            </div >
            <div className="container mt-4">
                <div className="row g-3">
                    {products.map((product) => {
                        if((budgetMode && product.price < 30) || !budgetMode) {
                            return (
                            
                            <div key={product.id} className="col-3">
                                <div className="card bg-dark text-white h-100 p-3">

                                    <div className="card-body text-center d-flex flex-column justify-content-center">
                                        <img className="card-img" src={product.image} alt="" />
                                        <h5 className="card-title ">{product.title}</h5>
                                        <span className="card-text">{product.price} €</span>
                                        <Link to={`/products/${product.id}`} className="btn badge text-bg-info mt-2">Vedi dettagli</Link>
                                    </div>
                                </div>
                            </div>
                        )
                        }
                        
                    })}
                </div>
            </div>
        </>
    )
}