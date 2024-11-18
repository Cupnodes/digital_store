import LogoIcon from '../assets/logo.svg'

export default function Logo() {
    return (
        <>
            <div id="logo-wrapper" className='flex items-center gap-2'>
                <img className='w-logo h-logo' src={LogoIcon} alt="Logo Digital College" />
                <h1 className='font-semibold text-[--primary] text-2xl'>Digital Store</h1>
            </div>
        </>
    )
}