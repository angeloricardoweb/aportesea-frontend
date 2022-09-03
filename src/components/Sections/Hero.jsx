import React from 'react'

export default function Hero() {
    return (
        <section className="bg-zinc-100 mt-[72px]">
            <div className="relative bg-white overflow-hidden">
                <div className="main_container">
                    <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                        <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="#003787" viewBox="0 0 100 100" preserveAspectRatio="none" area-hidden="true">
                            <polygon points="50,0 100,0 50,100 0,100" />
                        </svg>

                        <div>
                            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                            </div>
                        </div>

                        <div className="mt-10 mx-auto max-w-7xl  sm:mt-12  md:mt-16 lg:mt-20 xl:mt-28">
                            <div className="sm:text-center lg:text-left">
                                <h1 className=" tracking-tight font-extrabold ">
                                    <span className="block text-4xl sm:text-5xl md:text-6xl text-brand-blue-600">Aporte Sea</span>
                                    <span className="block text-brand-blue-100 xl:inline text-2xl">Engenharia, Consultoria e Treinamento</span>
                                </h1>
                                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
                                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                    <div className="rounded-md shadow">
                                        <a href="/contato" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-orange-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"> Como contratar? </a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="/img/bg-hero.jpg" alt="" />
                </div>
            </div>

        </section>
    )
}
