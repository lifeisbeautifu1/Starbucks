import { useState } from 'react';
import { motion } from 'framer-motion';

import { useAppSelector } from '../app/hooks';
import {
  MenuLink,
  FindAStore,
  LogoutButton,
  SignInButton,
  SignUpButton,
} from './';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const variants2 = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const Navigation = ({ toggle }: { toggle: () => void }) => {
  const [showMenuCategories, setShowMenuCategories] = useState(false);

  const { user } = useAppSelector((state) => state.user);

  return (
    <>
      {showMenuCategories ? (
        <motion.ul variants={variants}>
          <MenuLink
            link="Menu"
            goBackIcon
            onClick={() => {
              setShowMenuCategories(false);
            }}
            width="60%"
          />
          <MenuLink
            link="All products"
            path="/menu"
            onClick={() => {
              setShowMenuCategories(false);
              toggle();
            }}
          />
          <MenuLink
            link="Featured"
            path="/menu/featured"
            onClick={() => {
              setShowMenuCategories(false);
              toggle();
            }}
          />
          <MenuLink
            link="Previous Orders"
            onClick={() => {
              setShowMenuCategories(false);
              toggle();
            }}
          />
          <MenuLink
            link="Favorite Products"
            onClick={() => {
              setShowMenuCategories(false);
              toggle();
            }}
          />
        </motion.ul>
      ) : (
        <motion.ul variants={variants}>
          <MenuLink
            link="Menu"
            icon
            onClick={() => setShowMenuCategories(true)}
          />
          <MenuLink link="Rewards" />
          <MenuLink link="Gift Cards" />
          <motion.hr variants={variants2} />
          <motion.div className="navigation__buttons" variants={variants2}>
            {user ? (
              <LogoutButton />
            ) : (
              <>
                <SignInButton />
                <SignUpButton />
              </>
            )}
          </motion.div>
          <motion.div variants={variants2}>
            <FindAStore />
          </motion.div>
        </motion.ul>
      )}
    </>
  );
};

export default Navigation;
