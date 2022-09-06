import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';

interface MenuItemProps {
  type: string;
  image: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ type, image }) => {
  return (
    <Fade>
      <Link
        to="/"
        className="flex items-center gap-[10px] w-[240px] md:w-[260px]"
      >
        <img
          src={image}
          alt=""
          className="rounded-full object-contain w-[80px] md:w-[120px]"
        />
        <h4 className="text-black/[.87] font-semibold  md:text-[18px] leading-[1.5]">
          {type}
        </h4>
      </Link>
    </Fade>
  );
};

export default MenuItem;
