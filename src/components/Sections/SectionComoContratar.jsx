import React from 'react'
import { FaFacebook, FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function SectionComoContratar() {
    return (
        <div>
            <div className="main_container">
                <h2>Como contratar?</h2>

                <div className="grid md:grid-cols-2">

                    <div className='bg-brand-blue-50 hidden md:block bg-[url(/img/contact-us.jpg)] bg-center bg-cover'>
                    </div>

                    <div>
                        <form action="" className='px-4'>
                            <div className="form-control w-full max-w-xs mx-auto">
                                <label className="label">
                                    <span className="label-text">Como você se chama?</span>
                                </label>
                                <input type="text" placeholder="Nome" className="input input-bordered w-full max-w-xs" />
                            </div>

                            <div className="form-control w-full max-w-xs mx-auto mt-3">
                                <label className="label">
                                    <span className="label-text">Adicione um E-mail.</span>
                                </label>
                                <input type="email" placeholder="Email" className="input input-bordered w-full max-w-xs" />
                            </div>
                            <div className="form-control w-full max-w-xs mx-auto mt-3">
                                <label className="label">
                                    <span className="label-text">Adicione um Telefone.</span>
                                </label>
                                <input type="number" placeholder="Telefone" className="input input-bordered w-full max-w-xs" />
                                <div className="mt-3">
                                    <button class="btn">Solicitar contato</button>
                                </div>
                                <div class="divider">ou</div>
                            </div>

                            <div className="w-full max-w-xs mx-auto">
                                <h4>Fale conosco agora mesmo através de uma de nossas redes!</h4>
                            </div>
                            <div className="flex justify-center gap-4 mt-5">
                                <a href="/">
                                    <FaFacebook className="text-[44px]" />
                                </a>
                                <a href="/">
                                    <FaWhatsapp className="text-[48px]" />
                                </a>
                                <a href="/">
                                    <FaInstagram className="text-[48px]" />
                                </a>
                            </div>


                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}
