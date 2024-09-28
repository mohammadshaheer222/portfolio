import Image from "next/image";

// Images
import bannerImage from "/public/images/banner-image.png";
import Marquee from "react-fast-marquee";

const Hero = () => {
  return (
    <>
      <div className="relative w-full h-screen md:block hidden">
        <Image
          src={bannerImage}
          alt="Banner Image"
          layout="fill"
          objectFit="contain"
          className="z-[500] "
        />

        <div className="absolute inset-0 h-full flex flex-col gap-5 justify-center  text-white -z-10">
          <div className="h-full p-4">
            <p className="text-2xl font-semibold absolute top-1/4">
              Freelance Designer <br /> & Developer
            </p>
            <Marquee className="h-full overflow-hidden">
              <h1 className="text-6xl md:text-8xl font-bold px-6 leading-tight transform scale-y-[2.5] scale-x-[1] uppercase tracking-wider">
                Mohammad Shaheer Mohammad Shaheer
              </h1>
            </Marquee>
          </div>
        </div>
      </div>

      <div className="w-full h-screen md:hidden block text-white pt-20 px-4">
        <p className="text-lg font-semibold ">Freelance Designer & Developer</p>
        <Marquee className="h-[120px] overflow-hidden">
          <h1 className="text-6xl mx-4 font-bold uppercase tracking-wider leading-tight transform scale-y-[2.5] scale-x-[1]">
            Mohammad Shaheer Mohammad Shaheer
          </h1>
        </Marquee>
        <div className="h-full relative">
        <Image
          src={bannerImage}
          alt="Banner Image"
          objectFit="cover"
          className="absolute bottom-0 w-full h-full"
        />

        </div>
      </div>
    </>
  );
};

export default Hero;
