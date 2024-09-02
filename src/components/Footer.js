import "../components/Footer.css"
export default function Footer() {

    return (
        <>
            <div class=" py-4 container-fluid footer">
                <div class="row ">
                    <div class="col-2 ">
                        <ul class="list-footer text-start">
                            <li class=""> Cupons</li>
                            <li class=""> Cardápio</li>
                            <li class=""> Lojas</li>
                            <li class=""> Fale conosco</li>
                        </ul>
                    </div>

                    <div class="col-2 " >
                        <ul class="list-footer text-start">
                            <li class=""> Sobre nós </li>
                            <li class="">imprensa </li>
                            <li class="">Seja um franqueado </li>
                            <li class="">Trabalhe conosco</li>
                        </ul>
                    </div>

                    <div class="col-4">
                        <p class="title-footer text-start m-0">⚠ Atenção ⚠</p>
                        <p class="text-footer text-start p-0">Não caia em golpes. Antes de atender a qualquer solicitação 
                            feita em nome da rede Giraffas, fique atento: 
                            nosso domínio oficial é <b> nome.sobrenome@giraffas.com. </b>Desconfie de solicitações recebidas por e-mails diferentes.</p>

                    </div>

                    <div class="col-4 d-flex align-items-end ">
                        <p class="copyright-footer text-end">Giraffas © 2022 - Todos os direitos reservados <br />

                            Loja online operada por VoceqPad<br />

                            Av. Mofarrej, 825 - G01 - Vila Leopodina - São Paulo - SP - 05311-00
                        </p>
                    </div>

                </div>

            </div>
        </>
    )
}