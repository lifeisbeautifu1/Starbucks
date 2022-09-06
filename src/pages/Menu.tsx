import { MenuHeader, MenuList, MenuItem } from '../components';
import menuList from '../menuList.json';

function Menu() {
  return (
    <div className="flex flex-col mt-[30px] sm:mt-0 md:mt-[101px]">
      <MenuHeader />
      <div className="pl-5 sm:pl-[131px] sm:mt-[30px] md:mt-[101px] flex gap-[100px]">
        <div className="hidden md:block">
          <MenuList />
        </div>
        <div className="flex-1">
          <h1
            className="text-black/[.87] font-extrabold
          text-[28px] mb-10"
          >
            Menu
          </h1>
          <div className="mb-[60px]">
            <h2
              className="text-[24px] text-black/[.87] font-extrabold
            mb-5"
            >
              Drinks
            </h2>
            <div
              className="flex flex-wrap pt-5 pr-5 border-t border-black/10 gap-y-10
            gap-x-[100px]"
            >
              {menuList.map((menuListCategory) =>
                menuListCategory.drinks.map(({ type, image }) => (
                  <MenuItem type={type} image={image} />
                ))
              )}
            </div>
          </div>

          <div className="mb-[60px]">
            <h2
              className="text-[24px] text-black/[.87] font-extrabold
            mb-5"
            >
              Food
            </h2>
            <div
              className="flex flex-wrap pt-5 pr-5 border-t border-black/10 gap-y-10
            gap-x-[100px]"
            >
              {menuList.map((menuListCategory) =>
                menuListCategory.food.map(({ type, image }) => (
                  <MenuItem type={type} image={image} />
                ))
              )}
            </div>
          </div>

          <div className="mb-[60px]">
            <h2
              className="text-[24px] text-black/[.87] font-extrabold
            mb-5"
            >
              At Home Coffee
            </h2>
            <div
              className="flex flex-wrap pt-5 pr-5 border-t border-black/10 gap-y-10
            gap-x-[100px]"
            >
              {menuList.map((menuListCategory) =>
                menuListCategory.atHomeCoffee.map(({ type, image }) => (
                  <MenuItem type={type} image={image} />
                ))
              )}
            </div>
          </div>

          <div className="mb-[60px]">
            <h2
              className="text-[24px] text-black/[.87] font-extrabold
            mb-5"
            >
              Merchandise
            </h2>
            <div
              className="flex flex-wrap pt-5 pr-5 border-t border-black/10 gap-y-10
            gap-x-[100px]"
            >
              {menuList.map((menuListCategory) =>
                menuListCategory.merchandise.map(({ type, image }) => (
                  <MenuItem type={type} image={image} />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
