import "../components/SocialMedia.css"
import FundoS1 from "../public/IMG/FundoSocialMedia1.png"
import FundoS2 from "../public/IMG/FundoSocialMedia2.png"
import Facebook from "../public/IMG/facebook_img.png"
import Instagram from "../public/IMG/instagram_img.png"
import Youtube from "../public/IMG/youtube_img.png"
import Linkedin from "../public/IMG/linkedin_img.png"

export default function SocialMedia() {


    return (
        <>
            <div class="container-fluid my-5 ">
                <div class="row">

                    <div class="col-3">
                        <img class="img-SocialMedia float-start" src={FundoS2} alt="Fundo um da parte social media" />
                    </div>
                    <div class="col-6">

                        <p class="title-SocialMedia pt-5 mt-5 mb-0"> SIGA NOSSAS REDES SOCIAIS</p>
                        <p class="text-SocialMedia "> E NÃO PERCA NENHUMA NOVIDADE!</p>

                    </div>
                    <div class="col-3">

                        <img class="img-SocialMedia float-end" src={FundoS1} alt="Fundo um da parte social media" />
                    </div>
                </div>
            </div>
            <div class="container p-5">
                <div class="row">
                    <div class=" widget">
                        <h1 class="pb-5 pt-5 "> Your widget needs to be updated</h1>
                        <p> Please visit our
                            <a href="https://help.snapwidget.com/en/articles/90733-why-am-i-getting-a-message-saying-my-widget-needs-to-be-updated-re-authed"> Help</a> sectior for more info org
                            <a href="https://snapwidget.com/"> SnapWidget</a> to update your widget
                        </p>
                    </div>
                </div>
                    <div class="row px-0 pt-5 mx-0 mt-5">
                      <div class="Medias mx-auto">
                        <img class="img-Media p-0 m-0" src={Facebook} alt="Fundo um da parte social media" />
                        <img class="img-Media p-0 m-0" src={Instagram} alt="Fundo um da parte social media" />
                        <img class="img-Media p-0 m-0" src={Youtube} alt="Fundo um da parte social media" />
                        <img class="img-Media p-0 m-0" src={Linkedin} alt="Fundo um da parte social media" />
                      </div>

                        </div>
                    </div>
                </>
                )
}