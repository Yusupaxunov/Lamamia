import Button from "@/components/button/button";
import Image from "next/image";

const About = () => {
  return (
    <div className="my-14">
      <div className="w-full h-80 relative"> 
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&drp=2"
          alt="about"
          fill={true}
          className="object-cover grayscale"
        />
        <div className="absolute left-5 bottom-5 bg-[#53c28b] p-2 text-white">
          <h1 className="text-2xl sm:text-4xl bold">Digital Storytellers</h1>
          <h2 className="text-sm sm:text-2xl bold">Handcrafting award winning digital experinces</h2>
        </div>
      </div>
      <div className="gap-28 md:flex">
        <div className="flex-1 mt-14 gap-7 flex flex-col">
          <h1>Who Are We?</h1>
          <p className="text-lg font-light text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
            officiis reiciendis facilis, voluptatum, dolorem illum aspernatur et
            commodi harum dolore cupiditate rem consequuntur error molestias
            perferendis ratione odit. Recusandae doloribus quia, itaque
            deleniti, ducimus minima nobis sequi, nostrum omnis asperiores
            voluptate inventore impedit tenetur incidunt fuga magnam eos
            possimus!
            <br />
            <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
            officiis nisi a illo, aperiam ratione error non nulla earum fugit
            animi atque vero repellendus voluptatibus doloribus, maxime dolorum,
            debitis nesciunt.
          </p>
        </div>
        <div className="flex-1 mt-14 gap-7 flex flex-col">
          <h1>What we do?</h1>
          <p className="text-lg font-light text-justify">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
            officiis reiciendis facilis, voluptatum, dolorem illum aspernatur et
            commodi harum dolore cupiditate rem consequuntur error molestias
            perferendis ratione odit. Recusandae doloribus quia, itaque
            deleniti.
            <br />
            <br /> - Dynamic websites
            <br />
            <br /> - Fast and Handy 
            <br />
            <br /> - Mobile Apps
          </p>
          <Button url={'/contact'} text={"Contact"}/>
        </div>
      </div>
    </div>
  );
};

export default About;
