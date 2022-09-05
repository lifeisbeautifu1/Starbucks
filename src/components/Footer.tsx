import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ContentPlaceholder } from './ContentPlaceholder';
import { Link } from 'react-router-dom';

const Accordion = ({
  i,
  expanded,
  setExpanded,
  linkHeading,
  link1,
  link2,
  link3,
  link4,
  link5,
  link6,
}: any) => {
  const isOpen = i === expanded;

  // By using `AnimatePresence` to mount and unmount the contents, we can animate
  // them in and out while also only rendering the contents of open accordions
  return (
    <>
      <motion.header
        className="cursor-pointer flex justify-between items-center px-5 py-0 sm:px-10
        mb-[10px] first-of-type:mt-[60px]"
        initial={false}
        onClick={() => setExpanded(isOpen ? false : i)}
      >
        <Link
          to="/"
          className="text-[19px] text-black/[.87]
        font-semibold my-5"
        >
          {linkHeading}
        </Link>
        <div>
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 15.75l7.5-7.5 7.5 7.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          )}
        </div>
      </motion.header>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            className="overflow-hidden"
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <ContentPlaceholder
              link1={link1}
              link2={link2}
              link3={link3}
              link4={link4}
              link5={link5}
              link6={link6}
            />
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

const Footer = () => {
  // This approach is if you only want max one section open at a time. If you want multiple
  // sections to potentially be open simultaneously, they can all be given their own `useState`.
  //   const [expanded, setExpanded] = (useState < false) | (1 > 0)
  const [expanded, setExpanded] = useState();

  return (
    <>
      <Accordion
        expanded={expanded}
        setExpanded={setExpanded}
        linkHeading="About Us"
        i={0}
        link1="Our Heritage"
        link2="Our Coffee"
        link3="Stories and News"
        link4="Investor Relations"
        link5="Policies and Standards"
        link6="Customer Service"
      />
      <Accordion
        expanded={expanded}
        setExpanded={setExpanded}
        linkHeading="Careers"
        i={1}
        link1="Culture and Values"
        link2="Inclusion, Diversity, and Equity"
        link3="College Achievement Plan"
        link4="U.S. Careers"
        link5="International Careers"
      />
      <Accordion
        expanded={expanded}
        setExpanded={setExpanded}
        linkHeading="Social Impact"
        i={2}
        link1="Ethical Sourcing"
        link2="Leading in Sustainability"
        link3="Strengthening Communities"
        link4="Creating Oppurtunities"
        link5="Global Social Impact Report"
      />
      <Accordion
        expanded={expanded}
        setExpanded={setExpanded}
        linkHeading="For Business Partners"
        i={3}
        link1="Landlord Support Center"
        link2="Suppliers"
        link3="Corporate Gift Card Sales"
        link4="Office and Foodservice Coffee"
      />
      <Accordion
        expanded={expanded}
        setExpanded={setExpanded}
        linkHeading="Order and Pickup"
        i={4}
        link1="Order on the App"
        link2="Order on the Web"
        link3="Delivery"
        link4="Order and Pickup Options"
        link5="Explore and Find Coffee for Home"
      />
    </>
  );
};

export default Footer;
