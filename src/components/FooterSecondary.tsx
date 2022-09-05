import { Link } from 'react-router-dom';
import FindAStore from './FindAStore';

interface FooterSecondaryProps {
  paddingLeft?: number;
  flexDirection: 'row' | 'column';
  alignItems?: 'center';
}

const FooterSecondary: React.FC<FooterSecondaryProps> = ({
  paddingLeft,
  flexDirection,
  alignItems,
}) => {
  return (
    <div
      className="w-full p-[30px]
      pb-[60px] flex flex-row ml-5 sm:ml-0 sm:flex-col gap-[30px] border-t border-black/10"
      style={{
        alignItems,
        paddingLeft: `${paddingLeft ? paddingLeft * 2 : 0}px`,
      }}
    >
      <div
        className="flex flex-col gap-[30px]"
        style={{ paddingLeft: `${paddingLeft}px` }}
      >
        <div className="flex flex-col sm:flex-row flex-wrap gap-[30px] sm:gap-[50px]">
          <div className="text-lg">
            <FindAStore />
          </div>
          <div className="flex gap-[15px]" style={{ flexDirection }}>
            <Link to="/" className="font-semibold text-black/[.87]">
              Responsibility
            </Link>
            <Link to="/" className="font-semibold text-black/[.87]">
              Web Accessibility
            </Link>
            <Link to="/" className="font-semibold text-black/[.87]">
              Privacy Policy
            </Link>
            <Link to="/" className="font-semibold text-black/[.87]">
              Terms of Use{' '}
            </Link>
            <Link to="/" className="font-semibold text-black/[.87]">
              Cookie Preferences
            </Link>
          </div>
        </div>
        <span className="font-semibold">© 2021 Starbucks</span>
      </div>
    </div>
  );
};

export default FooterSecondary;
