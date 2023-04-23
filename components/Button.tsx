
interface ButtonProps{
    label: string;
    secondary?: boolean;
    fullWith?: boolean;
    large?: boolean;
    onClick?: () => void;
    disabled?: boolean;
    outline?: boolean;

}


const Button: React.FC<ButtonProps > = ({
    label,
    secondary,
    fullWith,
    large,
    onClick,
    disabled,
    outline,
}) => {
    return (
        <button
        disabled={disabled}
        onClick={onClick}
            className={`
                disabled: opacity-70
                
                rounded-full
                foont-semibold
                hover: opacity-80
                transition
                border-2
                ${fullWith? 'w-full': 'w-fit'}
                          
                ${secondary? 'bg-white': 'bg-sky-500'}
                ${secondary? 'text-black': 'text-white'}
                ${secondary? 'border-black': 'bg-sky-500'}

                ${large? 'text-xl': 'text-md'} 
                ${large? 'py-3': 'py-2'} 
                ${large? 'px-5': 'px-4'}
                
                ${outline? 'bg-trasparent': ''}
                ${outline? 'border-white': ''}
                ${outline? 'text-white': ''}
            `}
            >
            {label}
        </button>
     );
}
 
export default Button;