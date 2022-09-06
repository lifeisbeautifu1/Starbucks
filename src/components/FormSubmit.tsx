interface FormSubmitProps {
  name: string;
  type: 'submit';
  className?: string;
}

const FormSubmit: React.FC<FormSubmitProps> = ({ name, type, className }) => {
  return (
    <button
      className={`
    
    inline-block
    
    py-[18px] px-[24px]
    bg-[#00a862]
    shadow-xl
    border-none
    rounded-[500px]
    text-white
    text-[19px]
    font-bold
    leading-[1.2]
    overflow-hidden
    text-center
    transition-all
    duration-200
    ease-in-out
    ml-auto
    cursor-pointer ${className}`}
      type={type}
    >
      {name}
    </button>
  );
};

export default FormSubmit;
