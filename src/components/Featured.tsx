import { Link } from 'react-router-dom';

interface FeaturedProps {
  title: string;
  info: string;
  link: string;
  path: string;
  image: string;
  order?: string;
  background: string;
  color: string;
}

const Featured: React.FC<FeaturedProps> = ({
  title,
  info,
  link,
  path,
  image,
  order,
  background,
  color,
}) => {
  return (
    <div
      className="flex gap-5 md:gap-10 flex-wrap items-center justify-center
    py-[30px] px-[20px] md:px-[70px]"
      style={{ background }}
    >
      <div
        className="text-center flex flex-col gap-5 max-w-[300px] md:max-w-[420px]"
        style={{ order, color }}
      >
        <h1 className="font-extrabold text-[28px] md:text-[45px] leading-[1.3] tracking-[2px]">
          {title}
        </h1>
        <h4 className="leading-[1.6] text-xl font-semibold">{info}</h4>
        <Link
          className="inline-block bg-[#1e3932] text-white
        border border-black rounded-[50px]
        py-[7px] px-4 font-semibold leading-[1.2] text-center transition duration-200
        mx-auto hover:bg-[rgb(30,57,50)]/90"
          to={path}
        >
          {link}
        </Link>
      </div>
      <div>
        <img
          src={image}
          className="object-contain w-[350px] md:w-[400px] lg:w-[600px]"
          alt="thumbnail"
        />
      </div>
    </div>
  );
};

export default Featured;
