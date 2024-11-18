import SearchIcon from '../assets/search.svg'

export default function Search() {
    return (
        <>
            <div className='bg-[--light-gray-3] w-auto flex items-center justify-between rounded p-2'>
                <span className='text-[--light-gray-2] pr-80'>Pesquisar produto...</span>
                <img src={SearchIcon} alt="Busca por produto" className='size-6 text-[--light-gray-3]' />
            </div>
        </>
    )
}