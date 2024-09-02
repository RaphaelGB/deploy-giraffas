import React from "react"
import logo from "../public/IMG/logo.png"
import Button from "../public/IMG/imgButton.svg"
import { IoFastFood } from "react-icons/io5";

import "../components/Navbar.css"
export default function Navbar() {
    
window.addEventListener("scroll", () => {
        const header = document.getElementById('navbar-giraffas');
        
    let scrollInit = 300;
    let scrollTop  = window.scrollY;
    console.log(header);
    if(scrollTop > scrollInit){
        header.className = "navbar navbar-expand-lg fixed-top navbar-giraffas";
    } else {
        header.className = "navbar navbar-expand-lg fixed-top";
    }
});


    return (
        <nav  className="" id="navbar-giraffas" >
            <div className="color-theme container-fluid">
                <img  className="ps-1"src={logo} alt="logo.png" width="135" height="35" />
                <div className="collapse navbar-collapse ps-4 navbar-container" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                        <li className="nav-item ">
                            <a className="nav-link active text-light  pe-3 " aria-current="page" href="https://www.giraffas.com.br/promocoes">Peça já</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active text-light pe-3" aria-current="page" href="https://www.giraffas.com.br/promocoes">Cupons</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active text-light pe-3" aria-current="page" href="https://www.giraffas.com.br/cardapio">Cardápio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active text-light pe-3" aria-current="page" href="https://www.giraffas.com.br/">Lojas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active text-light pe-3" aria-current="page" href="https://franquiagiraffas.com.br/">Seja um franqueado</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active text-light pe-3" aria-current="page" href="https://www.giraffas.com.br/fale-conosco">Fale conosco</a>
                        </li>
                    </ul>
                        <button className="rounded align-items-center d-flex border-0 px-4 py-2 me-2 button-navbar" >
                         <span className="text-light text-button-navbar text-center"> Faça seu pedido</span>
                          <IoFastFood className="icon-button-navbar"/>
                        </button>
                    
                </div>
            </div>
        </nav>
    )
}