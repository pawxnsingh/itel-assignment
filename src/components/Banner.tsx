import mobileSwirls from "../assets/mobileSwirls.png";
import desktopSwirls from "../assets/desktopSwirls.png";
import buyNow from "../assets/icons/buyNow.svg";
import hrithik from "../assets/hrithik.png";

const HeroSection = () => {
  return (
    <div className="relative w-full bg-black min-h-[800px] md:min-h-[1000px]">
      <div className="relative h-[400px] md:h-[14rem] bg-[#EBE8E2] top-[66px] md:top-[7rem] z-10 overflow-hidden md:m-10 md:object-cover rounded-[16px]">
        <div className="absolute inset-0 flex justify-center items-center ">
          <div className="relative w-full h-full max-w-[1440px] mx-auto">
            <img
              src={mobileSwirls}
              alt="mobileSwirls"
              className="md:hidden w-full h-full object-cover"
            />
          </div>
          <img
            src={desktopSwirls}
            alt="desktopSwirls"
            className="hidden md:block w-[700px] objec t-cover md:left-[1500px]"
          />
        </div>

        {/* Hrithik Image */}
        <div className="absolute bottom-0 left-[47px] md:left-[490px] lg:left-[750px] w-[250px] z-10">
          <img
            src={hrithik}
            alt="hrithikImages"
            className="w-[287px] md:w-[400px] xl:w-[450px]"
          />
        </div>

        {/* Text Content */}
        <div className="absolute top-[30px] left-[20px] w-[255px] z-20">
          <p className="w-[132px] text-[1rem] font-semibold">
            The Wait is Over!
          </p>
          <h1 className="w-[14rem] text-[2.25rem] font-semibold text-[#FF0037] whitespace-nowrap">
            Presenting S24
          </h1>

          <button
            className="mt-4 w-[7.5rem] md:mt-14"
            onClick={() => {
              console.log("Buy Now Button Clicked");
            }}
          >
            <img src={buyNow} alt="Buy Now Button" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
