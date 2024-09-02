
import React from "react"
import Promocao1 from "../public/IMG/Promocao1.jpeg"
import Promocao2 from "../public/IMG/Promocao2.jpeg"
import Promocao3 from "../public/IMG/Promocao3.jpeg"
export default function Cards() {

    return (
        <>
            <div className="container">
                <div className="row p-4" >
                    <div className="col-4 " >
                        <a href="https://giraffasdelivery.voceqpad.com.br/"> 
                        <img src={Promocao1} className="rounded flex-end" alt="Promocao1" width="100%" />
                    </a>
                    </div>

                    <div className="col-4 " >
                        <a href="https://www.giraffas.com.br/promocoes"> 
                        <img src={Promocao2} className="rounded flex-end" alt="Promocao2" width="100%"  />
                    </a>
                    </div>
                    <div className="col-4 " >
                        <a href="https://www.giraffas.com.br/cardapio"> 
                        <img src={Promocao3} className="rounded flex-end" alt="Promocao3" width="100%"  />
                        </a>
                    </div>

                </div>
            </div>
        </>
    )
}