import { Link } from 'react-router-dom';

import menuList from '../menuList.json';

function MenuList() {
  return (
    <div className="flex flex-col gap-[30px]">
      <div>
        <h4
          className="text-black/[0.87]
        mb-5 text-[18px]"
        >
          Drinks
        </h4>
        <div className="flex flex-col gap-3">
          {menuList.map((menuListCategory) =>
            menuListCategory.drinks.map((menuListItem) => (
              <Link
                to="/"
                className="text-black/[.56]
              text-[15px] font-semibold
              max-w-[150px] leading-[1.5]"
              >
                {menuListItem.type}
              </Link>
            ))
          )}
        </div>
      </div>
      <div>
        <h4
          className="text-black/[0.87]
        mb-5 text-[18px]"
        >
          Food
        </h4>
        <div className="flex flex-col gap-3">
          {menuList.map((menuListCategory) =>
            menuListCategory.food.map((menuListItem) => (
              <Link
                to="/"
                className="text-black/[.56]
              text-[15px] font-semibold
              max-w-[150px] leading-[1.5]"
              >
                {menuListItem.type}
              </Link>
            ))
          )}
        </div>
      </div>
      <div>
        <h4
          className="text-black/[0.87]
        mb-5 text-[18px]"
        >
          At Home Coffee
        </h4>
        <div className="flex flex-col gap-3">
          {menuList.map((menuListCategory) =>
            menuListCategory.atHomeCoffee.map((menuListItem) => (
              <Link
                to="/"
                className="text-black/[.56]
              text-[15px] font-semibold
              max-w-[150px] leading-[1.5]"
              >
                {menuListItem.type}
              </Link>
            ))
          )}
        </div>
      </div>
      <div>
        <h4
          className="text-black/[0.87]
        mb-5 text-[18px]"
        >
          Merchandise
        </h4>
        <div className="flex flex-col gap-3">
          {menuList.map((menuListCategory) =>
            menuListCategory.merchandise.map((menuListItem) => (
              <Link
                to="/"
                className="text-black/[.56]
              text-[15px] font-semibold
              max-w-[150px] leading-[1.5]"
              >
                {menuListItem.type}
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default MenuList;
