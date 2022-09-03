import React from 'react'
import { Routes, Route, useParams } from "react-router-dom";
import { usePrismicDocumentByUID, } from '@prismicio/react'


export default function AreaRestrita() {
  const { empresa: uid } = useParams();
  const [empresa] = usePrismicDocumentByUID('area_privada', uid)

  console.log(empresa)

  return (
    <section className='py-32'>
      <div className="main_container">
        <h2>Olá, {empresa?.data.empresa}</h2>
        <h4 className='text-xl'>Esta é a sua área pessoal, aqui você pode consultar dados sobre nosso treinamento:</h4>
        <hr />
        <article className='mt-5'>
          <p>{empresa?.data.descricao}</p>
        </article>
        {
          empresa?.data.links1 && (
            <div className='mt-5'>
              <h3>Arquivos e Links disponíveis</h3>
              <div className=' flex flex-col gap-4'>
                {
                  React.Children.toArray(empresa?.data.links1.map(item => (
                    <div className='border p-5 border-brand-orange-600'>
                      {item.link.link_type === 'Media' && item.link.kind === "document" && (
                        <div>
                          <h4 className='font-bold'>{item.nome_do_arquivo}</h4>
                          <a href={item.link.url} target="_blanc" className="btn">Abrir</a>
                        </div>
                      )}
                      {item.link.link_type === 'Web' && (
                        <div>
                          <h4 className='font-bold'>{item.nome_do_arquivo}</h4>
                          <a href={item.link.url} target="_blanc" className="btn">Abrir</a>
                        </div>
                      )}
                      {item.link.link_type === 'Media' && item.link.kind === "image" && (
                        <div>
                          <h4 className='font-bold'>{item.nome_do_arquivo}</h4>
                          <a href={item.link.url} target="_blanc" className="btn">Abrir</a>
                        </div>
                      )}
                    </div>
                  )))
                }
              </div>
            </div>
          )
        }
      </div>
    </section>
  )
}
