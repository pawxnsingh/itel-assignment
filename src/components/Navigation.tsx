import dropdown from "../assets/icons/dropdown.svg";
import dropup from "../assets/icons/dropup.svg";
import { RightArrow } from "../assets/icons/rightArrow";
import { navigationOptions } from "../utils/navigation";
import { useState } from "react";

const Navigation = () => {
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  // @ts-ignore
  const [selectedSubmenu, setSelectedSubmenu] = useState<number | null>(null);
  // @ts-ignore
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  
  return (
    <div className="hidden md:flex bg-secondary-1-200 text-white justify-center h-12 lg:px-3 py-2">
      {/* this is the large screen navigation bars */}
      <ul className="flex lg:gap-10 md:gap-5">
        {navigationOptions.map((option, key) => (
          <div
            key={key}
            className="flex items-center shrink-0"
            onMouseEnter={() => {
              if (option.dropdown === true) {
                console.log("hovered", key);
                setActiveMenu(key);
              }
            }}
            onMouseLeave={() => setActiveMenu(null)}
          >
            {/* add a onclick as well  */}
            <div className="text-nowrap">{option.title}</div>
            <div>
              {option.dropdown && (
                <div className="pt-1">
                  {activeMenu === key ? (
                    <img src={dropdown} alt="dropdown" />
                  ) : (
                    <img src={dropup}></img>
                  )}
                </div>
              )}
            </div>

            {activeMenu === key && option.dropdown && (
              <div className="absolute top-full left-0 w-full bg-secondary-2-300 shadow-lg py-12 px-48">
                <div className="space-y-3">
                  {option?.submenu?.map((subOption, key) => (
                    <div key={key} className="">
                      <Submenu title={subOption.title} />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </ul>
    </div>
  );
};

const Submenu = ({
  title,
  selected = false,
}: {
  title: string;
  selected?: boolean;
}) => {
  return (
    <div className="flex items-center">
      <h2 className="w-20 font-semibold text-sm">{title.toUpperCase()}</h2>
      <RightArrow color={selected ? "#FF0037" : "#FFFFFF"} />
    </div>
  );
};

// @ts-ignore
const NavigationProductCard = ({
  image,
  name,
  price,
}: {
  image: string;
  name: string;
  price: string;
}) => {
  return (
    <div className="flex items-center">
      <div className="w-20 h-20 bg-gray-200">
        <img src={image} alt="product" />
      </div>
      <div className="flex flex-col">
        <h3 className="text-sm">{name}</h3>
        <p className="text-sm">{price}</p>
      </div>
    </div>
  );
};

export default Navigation;
