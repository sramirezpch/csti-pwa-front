import { NavLink } from "react-router-dom";

type PWAButtonProps = { 
    text: string;
    Icon: any;
    to?: string;
}

const PWAButton: React.FC<PWAButtonProps> = ({text, Icon, to}) => {
    return (
        <button className={`rounded-md bg-gray-300 py-3 px-4 ${!to && "flex gap-x-6 items-center"}`}>
            {to ? 
                <NavLink to={to} className="flex gap-x-6 items-center">
                    <Icon className="w-8 h-auto"/> <p className="text-2xl text-left">{text}</p>
                </NavLink> : 
                <>
                    <Icon className="w-8 h-auto"/> <p className="text-2xl text-left">{text}</p>
                </>}
        </button>
    )
}

export default PWAButton;