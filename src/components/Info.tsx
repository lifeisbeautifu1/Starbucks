import { Link } from 'react-router-dom';

interface InfoProps {
  title: string;
  image: string;
  info: string;
  link: string;
  color: string;
  background: string;
}

const Info: React.FC<InfoProps> = ({
  title,
  image,
  info,
  link,
  color,
  background,
}) => {
  return (
    <div
      className="flex w-full md:w-[48.5%] gap-5 flex-col
    justify-center items-center pb-[10px] relative"
      style={{ color, background }}
    >
      <img
        src={image}
        alt="thumbnail"
        className="object-contain max-w-full h-auto"
      />
      <div className="px-[25px] py-[30px] sm:px-[60px] text-center flex flex-col gap-5">
        <h4 className="text-[22px] font-semibold leading-[1.6]">{title}</h4>
        <h6 className="text-[17px] font-semibold leading-[1.6]">{info}</h6>
        <Link
          // style={{ color }}
          className={`bg-none border border-gray-400 rounded-[50px]
        py-[7px] px-4 font-bold leading-[1.2] text-center transition duration-200
        mx-auto hover:bg-[rgb(30,57,50)]/10`}
          to="/"
        >
          {link}
        </Link>
      </div>
    </div>
  );
};

export default Info;
