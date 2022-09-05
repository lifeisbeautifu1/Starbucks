import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Word = ({ link }: any) => (
  <Link to="/" className="text-black/[.56] font-semibold">
    {link}
  </Link>
);

const Paragraph = ({ link1, link2, link3, link4, link5, link6 }: any) => (
  <div className="mt-5 flex flex-col gap-[30px]">
    <Word link={link1} />
    <Word link={link2} />
    <Word link={link3} />
    <Word link={link4} />
    <Word link={link5} />
    <Word link={link6} />
  </div>
);

export const ContentPlaceholder = ({
  link1,
  link2,
  link3,
  link4,
  link5,
  link6,
}: any) => (
  <motion.div
    variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
    transition={{ duration: 0.8 }}
    className="px-5 py-0 sm:px-[40px]"
  >
    <Paragraph
      link1={link1}
      link2={link2}
      link3={link3}
      link4={link4}
      link5={link5}
      link6={link6}
    />
  </motion.div>
);
