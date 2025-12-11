
import { useState } from "react"
import style from "./Home.module.css"
export default function Home() {


    const images = [
        "https://www.hdcarwallpapers.com/download/porsche_911_gt3_rs_3-2560x1440.jpg",
        "https://images.hdqwalls.com/wallpapers/green-porsche-911-gt3-rs-7k.jpg",
        "https://images.hdqwalls.com/download/red-porsche-911-gt3-en-3840x2160.jpg",
    ]

    const [index, setIndex] = useState(0)


    function nextImg() {
        setIndex((current) => current === images.length - 1 ? 0 : current + 1)
    }

    function prevImg() {
        setIndex((current) => current === 0 ? images.length - 1 : current - 1)
    }


    return (



        <div className="container">
            <h1 className="text-center">Benvenuto su Boolando</h1>
            <div className="row">
                <div className="col-12 d-flex flex-column align-items-center">
                    <h2 className="text-center">Acquista ciò che vuoi tanto paga Loris !!!</h2>
                    <span><strong>Oggi in listino:</strong></span>
                    <div className={style.relativeGB}>
                        <img className="" width={"800px"} src={images[index]} alt="" />
                        <span className={style.scrittaAbsolute}>NON PREOCCUPARTI DEL PREZZO CI PENSA ZIO LORIS !!</span>
                        <span className={style.scrittaDown}><strong>Prezzo: elevato</strong></span>
                        <button onClick={nextImg} className={`btn btn-dark ${style.abButtonGB} ${style.ButtonGbRight}`}>NEXT</button>
                        <button onClick={prevImg} className={`btn btn-dark ${style.abButtonGB} ${style.ButtonGbLeft}`}>BACK</button>
                    </div>
                </div>
            </div>
        </div>
    )
}