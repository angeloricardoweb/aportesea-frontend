import React from 'react'
import { Link } from 'react-router-dom'
import styles from './style.module.scss'

export function Header() {
    return (
        <header className=" bg-zinc-200 fixed z-50 top-0 w-full shadow">
            <div className="main_container">

                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex="0" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>

                                <li><a>Item 3</a></li>
                            </ul>
                        </div>
                        <a href='#'><img src="/img/logo.png" alt="aporte sea" className='h-12' /></a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal p-0">
                            <li><a>Sobre nós</a></li>
                            <li><a>Serviços</a></li>
                            <li><a>Projetos</a></li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <a className="btn">Área de treinamento</a>
                    </div>
                </div>
            </div>
        </header>
    )
}
