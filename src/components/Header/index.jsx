import React from 'react'
import { FaAlignJustify } from 'react-icons/fa'
import './style.scss'
import { Link } from 'react-router-dom'

export function Header() {
    return (
        <header className=" bg-morphism fixed z-50 top-0 w-full shadow py-4">
            <div className="main_container">

                <div className="flex justify-between items-center">
                    <div>
                        <Link to="/">
                            <img src="/img/logo.png" alt="aporte sea" className="w-32" />
                        </Link>
                    </div>
                    <div className='gap-2 hidden md:flex'>
                        <a href="/" className='p-2 hover:text-brand-orange-600 font-bold '>
                            Serviços
                        </a>
                        <Link to="/contato" className='p-2 hover:text-brand-orange-600 font-bold '>
                            Contatos
                        </Link>
                        <a href="/" className='p-2 hover:text-brand-orange-600 font-bold '>
                            Portólio
                        </a>
                        <a href="/" className='px-3 py-2 hover:text-brand-orange-600 font-bold  border-brand-orange-600 border rounded-md'>
                            Área de treinamento
                        </a>
                    </div>
                    <div className='block md:hidden'>
                        <div className="dropdown dropdown-end">
                            <label tabIndex="0" className="btn m-1 bg-zinc-200"><FaAlignJustify /></label>
                            <ul tabIndex="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li> <a href="/" className='p-2 hover:text-brand-orange-600 font-bold text-xl'>
                                    Serviços
                                </a></li>
                                <li> <a href="/" className='p-2 hover:text-brand-orange-600 font-bold text-xl'>
                                    Contatos
                                </a></li>
                                <li> <a href="/" className='p-2 hover:text-brand-orange-600 font-bold text-xl'>
                                    Portfólio
                                </a></li>
                                <li> <a href="/" className='px-3 py-2 hover:text-brand-orange-600 font-bold text-xl border-brand-orange-600 border rounded-md'>
                                    Área de treinamento
                                </a></li>
                            </ul>
                        </div>
                    </div>


                </div>
            </div>

        </header>
    )
}
