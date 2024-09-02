import React from "react"
import "../components/Maps.css"
import MapsGiraffas from "../public/IMG/MapsGiraffas.jpeg"
export default function Maps() {


    return (
        <div class="container" >
            <div class="row" >
                <div class="col-6 bg-color-primary" >
                    <img src={MapsGiraffas} alt="Mapa do Giraffas" width="560" />
                </div>
                <div class="col-6 bg-color-success" >
                    <div class="row" >
                        <div id="img_maps" class="">

                            <svg xmlns="http://www.w3.org/2000/svg" width="63" height="77" viewBox="0 0 63 77">
                            <g id="\xEDcone_fechar" data-name="\xEDcone/fechar" transform="translate(0.21 0.404)">
                            <path id="Combined_Shape" data-name="Combined Shape"
                            d="M31.5,77C21.048,69.583,13.1,61.889,7.875,54.131S0,38.336,0,30.239C0,13.566,14.131,0,31.5,0S63,13.566,63,30.239c0,8.1-2.65,16.146-7.875,23.9S41.952,69.59,31.5,77h0ZM7.874,30.239A34.346,34.346,0,0,0,13.49,48.416c3.784,6.093,9.567,12.243,17.191,18.278l.819.638.819-.638c7.413-5.864,13.09-11.84,16.871-17.762a35.036,35.036,0,0,0,5.918-17.684l.018-1.009c0-12.428-10.6-22.54-23.626-22.54S7.874,17.811,7.874,30.239ZM22.75,32.375a8.75,8.75,0,1,1,8.75,8.75A8.75,8.75,0,0,1,22.75,32.375Z" transform="translate(-0.21 -0.404)" fill="#ed8b26"></path></g></svg>
                        </div>
                        <h2 class="SubTitle-Maps"> Encontre</h2>
                        <h1 class="Title-Maps"> Nossas Lojas</h1>
                    </div>
                    <input placeholder="Digite um local" class="input-Maps rounded-5 " 
                    />
                    <h4 class="text-Maps">OU</h4 >
                    <button class="border border-0 button-Maps rounded-4">Ativar geolocalização</button>
                </div>

            </div>
        </div>
    )
}