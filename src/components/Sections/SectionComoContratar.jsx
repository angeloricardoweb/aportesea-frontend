import React from 'react'
import { FaFacebook, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { useSinglePrismicDocument } from '@prismicio/react';


export default function SectionComoContratar() {
    const notify = () => toast("Email Recebido com Sucesso. Entraremos em contato em breve!");
    const [contato] = useSinglePrismicDocument('contatos_e_redes_sociais')

    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();

    async function postForm(email, nome, telefone) {

        try {
            const response = await fetch("https://formsquash.io/f/PPw2VhsHNBVjuAQ26I7s", {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'

                },
                body: JSON.stringify({
                    email,
                    nome,
                    telefone
                })
            })
            const data = await response.json();

            toast.success('E-mail enviado com sucesso', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            reset({ email: '', nome: '', telefone: '' })

        } catch (error) {
            console.log(error)
            toast.error('Ocorreu um erro ao enviar, por favor, entre em contato através de nosso e-mail', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }

    }

    const onSubmit = ({ email, nome, telefone }) => {
        postForm(email, nome, telefone)
    };

    return (
        <div>
            <div className="main_container">
                <h2>Como contratar?</h2>

                <div className="grid md:grid-cols-2">

                    <div className='bg-brand-blue-50 hidden md:block bg-[url(/img/contact-us.jpg)] bg-center bg-cover'>
                    </div>

                    <div>
                        <form className='px-4' onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control w-full max-w-xs mx-auto">
                                <label className="label">
                                    <span className="label-text">Como você se chama?</span>
                                </label>
                                <input type="text" placeholder="Nome" className="input input-bordered w-full max-w-xs" {...register("nome", { required: true })} />
                                {errors.nome && <span className='text-brand-orange-600'>Campo Obrigatório</span>}
                            </div>

                            <div className="form-control w-full max-w-xs mx-auto mt-3">
                                <label className="label">
                                    <span className="label-text">Adicione um E-mail.</span>
                                </label>
                                <input type="email" placeholder="Email" className="input input-bordered w-full max-w-xs" {...register("email", { required: true })} />
                                {errors.email && <span className='text-brand-orange-600'>Campo Obrigatório</span>}
                            </div>
                            <div className="form-control w-full max-w-xs mx-auto mt-3">
                                <label className="label">
                                    <span className="label-text">Adicione um Telefone.</span>
                                </label>
                                <input type="number" placeholder="Telefone" className="input input-bordered w-full max-w-xs" {...register("telefone", { required: true })} />
                                {errors.telefone && <span className='text-brand-orange-600'>Campo Obrigatório</span>}
                                <div className="mt-3">
                                    <button className="btn" type="submit">Solicitar contato</button>
                                </div>
                                <div className="divider">ou</div>
                            </div>

                            <div className="w-full max-w-xs mx-auto">
                                <h4>Fale conosco agora mesmo através de uma de nossas redes!</h4>
                            </div>
                            <div className="flex justify-center gap-4 mt-5">
                                {contato?.data.facebook && (
                                    <a href={`https://www.facebook.com/${contato.data.facebook}`} target="_blank">
                                        <FaFacebook className="text-[44px]" />
                                    </a>
                                )}
                                {contato?.data.whatsapp && (
                                    <a href={`https://api.whatsapp.com/send?phone=${contato.data.whatsapp}`} target="_blank">
                                        <FaWhatsapp className="text-[48px]" />
                                    </a>
                                )}
                                {contato?.data.instagram && (
                                    <a href={`https://www.instagram.com/${contato.data.instagram}`} target="_blank">
                                        <FaInstagram className="text-[48px]" />
                                    </a>
                                )}
                            </div>


                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}
