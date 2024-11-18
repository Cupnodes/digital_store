import MarketIcon from '../assets/market.svg'

export default function Market() {
    return (
        <>
            <div id="market-wrapper" className='flex items-center'>
                <a href="#" className='text-[--dark-gray-2] underline pr-8'>Cadastre-se</a>
                <button className="btn bg-[--primary] text-[--white] rounded px-8 py-2 font-bold">Entrar</button>
                <img src={MarketIcon} alt="Carrinho" className='pl-10' />
            </div>
        </>
    )
}