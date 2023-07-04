import Image from "next/image";
import React from "react";

const Id = () => {
  return (
    <div className="my-16">
      <div className="flex gap-6">
        <div className="flex-1 flex flex-col justify-between">
          <h1 className="text-4xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui,
            velit!
          </h1>
          <p className="text-lg text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            adipisci rem debitis obcaecati soluta, facere dicta excepturi
            tempore commodi earum autem sunt unde, inventore qui laudantium
            corrupti? Debitis, quo. Maxime?
          </p>
          <div className="flex items-center gap-3">
            <Image
              src="/illustration.png"
              alt=""
              width={40}
              height={40}
              className="rounded-full"
            />
            <span>John Doe</span>
          </div>
        </div>
        <div className="flex-1 h-[320px] relative">
          <Image
            src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
            alt=""
            fill={true}
            className="object-cover"
          />
        </div>
      </div>
      <div className="mt-12 text-xl text-[#999] text-justify">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
          aspernatur dolore est, accusamus, ipsa nihil veniam asperiores,
          aperiam cumque excepturi nisi? Similique placeat dolorem ducimus
          molestias, a sint itaque quae illum minus suscipit consequatur modi
          rerum amet eum natus maiores vel. Et veniam accusamus non dolore
          libero ullam ut nisi.
          a sint itaque quae illum minus suscipit consequatur modi
          rerum amet eum natus maiores vel. Et veniam accusamus non dolore
          libero ullam ut nisi.
          <br />
          <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum sed
          ullam consectetur eos illo ipsum quae voluptas dolores provident,
          dicta optio. Ducimus dolores doloribus amet perferendis labore in
          quibusdam cum!
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab debitis,
          aspernatur ea pariatur dignissimos veniam omnis ducimus esse deleniti
          sed nesciunt nihil quaerat illum facilis cum tenetur! Commodi optio
          praesentium ipsam nobis ipsum alias voluptates rerum magni quam qui
          nam culpa fuga animi error corporis natus sapiente, accusamus
          perferendis similique vitae! Sequi, praesentium quae. Nulla maiores
          magnam veniam consequatur corporis corrupti fuga adipisci dolorem
          reprehenderit illo voluptas minus, incidunt impedit aliquid
          consectetur nobis molestiae debitis perferendis aspernatur. Quas,
          atque quis.Sequi, praesentium quae. Nulla maiores
          magnam veniam consequatur corporis corrupti fuga adipisci dolorem
          reprehenderit illo voluptas minus, incidunt impedit aliquid
          consectetur nobis molestiae debitis perferendis aspernatur. Quas,
          atque quis.
        </p>
      </div>
    </div>
  );
};

export default Id;
