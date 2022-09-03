import { CgMail, CgSmartphone } from "react-icons/cg";

export function Footer() {
    return (
        <>
            <div className=' bg-brand-orange-600'>
                <div className=" main_container ">
                    <footer className="footer py-10 text-neutral-content">

                        <div>
                            <span className="text-white font-bold text-lg">Serviços</span>
                            <a href="/#servicos" className="text-white">ELÉTRICOS E AUTOMAÇÃO</a>
                            <a href="/#servicos" className="text-white">SEGURANÇA DO TRABALHO</a>
                            <a href="/#servicos" className="text-white">CLIMATIZAÇÃO E REFRIGERAÇÃO</a>
                            <a href="/#servicos" className="text-white">TREINAMENTO DE SEGURANÇA E
                                SALVATAGEM</a>
                        </div>
                        <div>
                            <p className="text-white font-bold text-lg">Contatos</p>
                            <p className="flex items-center gap-2"><CgMail className="text-white"/> <span className="text-white"> contato@aportesea.com</span></p>
                            <p className="flex items-center gap-2"><CgMail className="text-white"/> <span className="text-white">luciana@aportesea.com</span> </p>
                            <p className="flex items-center gap-2"><CgMail className="text-white"/> <span className="text-white"> murillo@aportesea.com</span></p>
                            <p className="flex items-center gap-2"><CgSmartphone className="text-white"/> <span className="text-white"> + 55 91 8494-3702</span></p>

                        </div>
                        <div>
                            <p className="text-white font-bold text-lg">Mapa do site</p>
                            <a href="/#servicos" className="text-white">Serviços</a>
                            <a href="/contatos" className="text-white">Contatos</a>
                            <a href="/projetos" className="text-white">Projetos</a>
                        </div>
                    </footer>
                </div>
            </div>
            <div className="footer items-center p-4 bg-black text-neutral-content">
                <div className="main_container">
                    <div className="flex justify-between w-full">
                        <div>
                            <p className=' text-white'>Aporte Sea   © 2022 - Todos os direitos reservados</p>
                        </div>

                        <div>
                            <p className=' text-white text-end'>CNPJ: 20.191.834/0001-39</p>
                        </div>
                    </div>

                </div>
            </div>
        </>

    )
}
