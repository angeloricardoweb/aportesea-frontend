import React from 'react'
import image from '/temp/servico-4.jpg'
import { Link } from 'react-router-dom';
import { useAllPrismicDocumentsByType } from '@prismicio/react';

export default function SectionProjetos() {
    const [response] = useAllPrismicDocumentsByType('projeto')
    console.log(response?.[0].data.galeria[0].foto.url);

    return (
        <div>
            <div className="main_container">
                <div className="sm:flex justify-between items-center">

                    <h2 className='text-white sm:mb-0'>Nossos Projetos</h2>
                    <Link to='/projetos' className=' font-bold text-brand-orange-600 hover:text-brand-blue-50'>Ver todos</Link>
                </div>

                <div className='flex mt-5 gap-5 justify-center sm:justify-between flex-wrap'>
                 {
                    response &&
                    React.Children.toArray(response.map(item=>(
                        item.data.exibir_na_home &&
                        <a href='/projetos' className='min-w-[120px] w-full max-w-[250px] aspect-[1] shadow-sm bg-cover bg-center transition-all ' style={{ backgroundImage: `url(${item.data.galeria[0].foto.url})` }}></a>
                    )))
                 }
             
                </div>

            </div>
        </div>
    )
}
