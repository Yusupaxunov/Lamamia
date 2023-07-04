import Image from "next/image";
import Hero from "/public/hero.png";
import Button from "@/components/button/button";

const Page = () => {
  return (
    <div className=" my-8 flex-col md:flex-row flex items-center gap-24">
      <div className="flex-1 flex flex-col gap-12 ">
        <h1 className="text-7xl leading-none font-bold bg-gradient-to-b from-[#194c33] to-[#bbb] bg-clip-text text-transparent">Better design for your digital product.</h1>
        <p className="text-xl font-light">
          Turning your Idea into Reality. We bring the teams from the global
          tech industry.
        </p>
          <Button url="/portfolio" text="See Our Portfolio"/>
      </div>
      <div className="flex-1">
        <Image priority={true} src={Hero} alt="hero" className=" animation2 w-[100%] h-[500px] object-contain "/>
      </div>
    </div>
  );
};

export default Page;
