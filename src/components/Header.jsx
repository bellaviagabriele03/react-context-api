import { Link, NavLink } from "react-router-dom";
import logoImg from "../assets/img/logo.jpg"
export default function Header() {

    const Links = [
        {
            title: "Home",
            path: "/",
        },
        {
            title: "Chi Siamo",
            path: "/about",
        },
        {
            title: "I nostri Prodotti",
            path: "/products",
        },
        
    ]



    return (
        <header className="">
            <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img width={"80px"} src={logoImg} alt="" />
                    </Link>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                           {Links.map((link, index) => {
                            return (
                                <NavLink key={index} className="nav-link" aria-current="page" to={link.path}>{link.title}</NavLink>
                            )
                           })}
                            
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}