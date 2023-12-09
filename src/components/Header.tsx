import { IoArrowBack } from "react-icons/io5";

type HeaderProps = {
    headerTitle: string;
}

const Header:React.FC<HeaderProps> = ({ headerTitle }) => {
    return (
        <div className="flex bg-black text-white py-6 rounded-b-xl">
           <div className='relative'>
           <span className="absolute left-3 bottom-0"><IoArrowBack className="w-[24px] h-auto" /></span>
           </div>
            <p className="text-2xl w-full text-center">{headerTitle}</p>
        </div>
    )
}

export default Header;