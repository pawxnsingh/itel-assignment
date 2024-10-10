import { headerContactCards } from "../utils/navigation";
import itel from "../assets/itel.svg";
import search from "../assets/icons/search.svg";
import hamburger from "../assets/icons/hamburger.svg";
// import Navigation from "./Navigation";
import NavigationDropdown from "./navigationdemo";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-20">
      <div className="bg-primary flex justify-between flex-row p-4 lg:px-20 items-center">
        {/* this is the top header with the search and hamburger view */}
        <div>
          <img src={itel} alt="" />
        </div>

        <div className="hidden md:flex items-center gap-2 md:w-[400px] lg:w-[500px] xl:w-[712px] md:px-4 md:py-2 bg-secondary-0-100 md:ml-5 rounded-lg">
          <img src={search} className="w-[18px] " alt="search icons" />
          <input
            type="text"
            className="bg-transparent focus:outline-none w-full focus:text-white text-white"
            placeholder="What are you looking for..."
          />
        </div>

        <div className="hidden md:block">
          {/* this is the large screen navigation bars */}
          <ul className="flex gap-10 md:gap-6">
            {headerContactCards.map((option) => (
              <ContactCard
                icon={option.icon}
                header={option.header}
                subheader={option.subheader}
              />
            ))}
          </ul>
        </div>

        <div className="flex gap-4 md:hidden">
          <div className="h-6 w-6">
            <img src={search} alt="Search Icon" />
          </div>
          <div className="h-6 w-6">
            <img src={hamburger} alt="Hamburger Icon" />
          </div>
        </div>
      </div>
      {/* <Navigation /> */}
      <NavigationDropdown />
    </header>
  );
};

const ContactCard = ({
  icon,
  header,
  subheader,
}: {
  icon: any;
  header: string;
  subheader: string;
}) => {
  return (
    <div className="bg-transparent flex items-center text-white gap-2">
      <div className="w-6 h-6">
        <img src={icon} alt="" />
      </div>

      <div className="flex-col text-xs text-nowrap">
        <div className="">{header}</div>
        <div>{subheader}</div>
      </div>
    </div>
  );
};

export default Header;
