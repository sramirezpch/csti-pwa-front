type PWAButtonProps = { 
    text: string;
    Icon: any;
}

const PWAButton: React.FC<PWAButtonProps> = ({text, Icon}) => {
    return (
        <button className="rounded-md bg-gray-300 py-3 flex gap-x-6 items-center px-4">
            <Icon className="w-8 h-auto"/> <p className="text-2xl">{text}</p>
        </button>
    )
}

export default PWAButton;