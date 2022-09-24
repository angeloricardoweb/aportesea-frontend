import React from 'react'
import { useSinglePrismicDocument } from '@prismicio/react'

export default function SectionSobreNos() {
  const [sobreNos] = useSinglePrismicDocument('sobre_nos')

  return (
    <div>
      <div className="main_container">
        <div className="grid md:grid-cols-2 gap-8 justify-items-end">
          <article>
            <h2>Sobre nós</h2>
            <p className="text-zinc-400">{sobreNos?.data.conteudo_a}</p>

            <p className="mt-8">{sobreNos?.data.conteudo_b}</p>
          </article>
          <div
            className="w-full aspect-[10/7] bg-cover rounded-lg"
            style={{ backgroundImage: `url(${sobreNos?.data.banner.url})` }}
          ></div>
        </div>
      </div>
    </div>
  )
}
