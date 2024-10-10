import { useState } from "react";
import { navigationOptions } from "../utils/navigation";
import dropdown from "../assets/icons/dropdown.svg";
import dropup from "../assets/icons/dropup.svg";
import { RightArrow } from "../assets/icons/rightArrow";

// Import your navigation options
const NavigationDropdown = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [selectedSubmenu, setSelectedSubmenu] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuEnter = (menuItem: any) => {
    if (menuItem.dropdown) {
      setActiveMenu(menuItem.title);
      setIsMenuOpen(true);
      // Set the first submenu as default selected when opening a new menu
      if (menuItem.submenu?.length > 0) {
        setSelectedSubmenu(menuItem.submenu[0].title);
      }
    }
  };

  const handleMenuLeave = () => {
    setActiveMenu(null);
    setIsMenuOpen(false);
    setSelectedSubmenu(null);
  };

  const handleSubmenuClick = (submenuTitle: any) => {
    setSelectedSubmenu(submenuTitle);
  };

  const renderProductSubmenu = (submenu: any) => {
    if (!submenu?.items) return null;
    return (
      <div className="flex">
        <div className="grid grid-cols-3 gap-4">
          {submenu.items.map((product: any, idx: any) => (
            <div
              key={idx}
              className="bg-secondary-3-400 rounded-lg p-2 flex items-center pr-14"
            >
              <div>
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-40 object-cover rounded-md"
                />
              </div>
              <div className="">
                <h4 className="font-semibold text-nowrap">{product.name}</h4>
                <p className="text-gray-400">{product.price}/-</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderSupportSubmenu = (menuItem: any) => {
    return (
      <div className="absolute top-full left-0 w-full bg-secondary-2-300 shadow-lg  overflow-hidden py-10 px-56">
        <div className="grid grid-cols-3 gap-3">
          {menuItem.submenu.map((item: any, idx: number) => (
            <a
              key={idx}
              href={item.href}
              className="px-4 py-2 rounded-md bg-gradient-to-r from-[rgba(255, 255, 255, 0.14)] to-[rgba(55, 63, 65, 0.2)] text-white border flex justify-center items-center gap-4"
            >
              <div>
                <div className="font-semibold text-wrap">{item.title}</div>
                <div className="font-semibold flex items-center">
                  READ MORE
                  <RightArrow color="white" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    );
  };

  const renderProductDropdown = (menuItem: any) => {
    const currentSubmenu = menuItem.submenu.find(
      (sub: any) => sub.title === selectedSubmenu
    );

    return (
      <div className="absolute top-full left-0 w-full bg-secondary-2-300 shadow-lg  py-12 px-48">
        <div className="flex items-start gap-10">
          {/* Submenu Navigation */}
          <div className="space-y-3">
            {menuItem.submenu.map((submenu: any, idx: any) => (
              <button
                className="flex items-center"
                key={idx}
                onClick={() => handleSubmenuClick(submenu.title)}
              >
                <h2 className="flex w-20 font-semibold text-sm space-x-2">
                  <p className="text-nowrap">{submenu.title.toUpperCase()}</p>
                  <RightArrow color={selectedSubmenu ? "#FF0037" : "#FFFFFF"} />
                </h2>
              </button>
            ))}
          </div>

          {/* Submenu Content */}
          {renderProductSubmenu(currentSubmenu)}
        </div>
      </div>
    );
  };

  return (
    <div className="hidden md:flex bg-secondary-1-200 text-white justify-center h-12 lg:px-3 py-2">
      {/* Main Navigation */}
      <div className="flex lg:gap-10 md:gap-5">
        {/* Navigation Items */}
        {navigationOptions.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center shrink-0"
            onMouseEnter={() => handleMenuEnter(item)}
            onMouseLeave={handleMenuLeave}
          >
            <div className="text-nowrap">{item.title}</div>
            <div>
              {item.dropdown && (
                <div className="pt-1">
                  {activeMenu === item.title ? (
                    <img src={dropup} alt="dropup" />
                  ) : (
                    <img src={dropdown} alt="dropdown" />
                  )}
                </div>
              )}
            </div>

            {/* Dropdown Menu */}
            {activeMenu === item.title &&
              isMenuOpen &&
              (item.title === "Support"
                ? renderSupportSubmenu(item)
                : renderProductDropdown(item))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavigationDropdown;
