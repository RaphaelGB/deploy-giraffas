import "../components/Download.css"
import QRCode from "../public/IMG/QrCode_img.png"
import Arrow from "../public/IMG/seta_img.png"
import AppStore from "../public/IMG/AppStore_img.jpg"
import GooglePlay from "../public/IMG/GooglePlay_img.png"
import App from "../App"
export default function Download() {
    return (
        <>
            <div class="container-Download p-4">
                <div class="row">
                    <div class="col">
                        <p class="Download-title mb-1">Baixe Nosso App!</p>
                        <p class="Download-text text-start  m-0 ps-4 "> Peça Delivery e receba onde estiver ou  </p> 
                         <p class="Download-text text-start  m-0 ps-4">Retire na loja, sem pegar filas!</p>

                    </div>
                    <div class="col">
                        <img class="Download-QRCode" alt="QRCode do giraffas"
                        src={QRCode} />
                        <img class="Download-Arrow" alt="seta para o QRCode"
                        src={Arrow} />
                    </div>
                    <div class="col">
                        <p class="Download-textScan">Escaneie o QR Code e aproveite!</p> 
                        <img class="Download-PlayStore pe-3" alt="Download da AppStore do giraffas"
                        src={AppStore} />
                        <img class="Download-GooglePlay" alt="Download da AppStore do giraffas"
                        src={GooglePlay} />
                    </div>

                </div>
            </div>
        </>
    )
}