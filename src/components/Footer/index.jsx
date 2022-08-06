import React from 'react'
import styles from './style.module.scss'

export function Footer() {
    return (
        <>
            <div className=' bg-brand-orange-600'>
                <div className=" main_container ">
                    <footer className="footer py-10 text-neutral-content">

                        <div>
                            <span className="text-white font-bold text-lg">Services</span>
                            <a className="text-white">Branding</a>
                            <a className="text-white">Design</a>
                            <a className="text-white">Marketing</a>
                            <a className="text-white">Advertisement</a>
                        </div>
                        <div>
                            <span className="text-white font-bold text-lg">Company</span>
                            <a className="text-white">About us</a>
                            <a className="text-white">Contact</a>
                            <a className="text-white">Jobs</a>
                            <a className="text-white">Press kit</a>
                        </div>
                        <div>
                            <span className="text-white font-bold text-lg">Legal</span>
                            <a className="text-white">Terms of use</a>
                            <a className="text-white">Privacy policy</a>
                            <a className="text-white">Cookie policy</a>
                        </div>
                    </footer>

                </div>
            </div>
            <div class="footer items-center p-4 bg-black text-neutral-content">
                <div className="main_container">
                    <div className="flex justify-between w-full">
                        <div>
                            <p className=' text-white'>Aporte Sea   © 2022 - Todos os direitos reservados</p>
                        </div>

                        <div>
                            <p className=' text-white text-end'>Desenvolvido por Angelo Ricardo</p>
                        </div>
                    </div>

                </div>
            </div>
        </>

    )
}
