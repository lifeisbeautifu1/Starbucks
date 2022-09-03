interface HeadingProps {
  heading: string;
}

const Heading: React.FC<HeadingProps> = ({ heading }) => {
  return (
    <div
      className="text-center uppercase font-extrabold my-[60px] text-[#1e3932]
    text-[28px] md:text-[45px]"
    >
      {heading}
    </div>
  );
};

export default Heading;
