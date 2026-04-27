import React from 'react'

const Card = ({ imagem, titulo, preco, precoOriginal, desconto, tag, rating, review, adicionarCarrinho }) => {
  return (
    <article className="group w-full max-w-[280px] border border-[#D6D6C8] bg-white/60 rounded-sm p-3 transition-colors duration-200 hover:border-neutral-900">
        <div className="relative aspect-[4/5] overflow-hidden bg-[#A8C2E0]/20 mb-4">
            <img
            src={imagem}
            alt={titulo}
            className="h-full w-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.03]"
            />
 
            {tag && (
            <span className="absolute left-3 top-3 bg-[#EBEBDF] px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-neutral-800">
                {tag}
            </span>
            )}
    
            {desconto && (
            <span className="absolute left-3 top-3 bg-[#EA631B] px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-white">
                {desconto}
            </span>
            )}
        </div>
 
        <div className="space-y-2.5 px-1">
            <div className="flex items-center gap-2 text-[11px] text-neutral-500">
            {rating}
            {review && <span>{review}</span>}
            </div>
 
            <h3
            className="text-[17px] leading-tight text-neutral-900 line-clamp-2 min-h-[2.6rem]"
            style={{ fontFamily: "'Fraunces', Georgia, serif" }}
            >
            {titulo}
            </h3>
    
            <div className="flex items-baseline gap-2 pt-1">
                <span
                    className={`text-[16px] tabular-nums ${
                    precoOriginal ? "text-[#EA631B] font-medium" : "text-neutral-900"
                    }`}
                >
                    {preco}
                </span>
                {precoOriginal && (
                    <span className="text-[12px] text-neutral-400 line-through tabular-nums">
                    {precoOriginal}
                    </span>
                )}
            </div>
 
            <button
            type="button"
            onClick={adicionarCarrinho}
            className="mt-3 w-full border border-neutral-900 bg-transparent py-2.5 text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-900 transition-colors duration-200 hover:bg-[#EA631B] hover:border-[#EA631B] hover:text-white"
            >
            Adicionar
            </button>
        </div>
    </article>

  )
}

export default Card