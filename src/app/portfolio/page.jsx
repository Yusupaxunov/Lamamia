import Link from "next/link"

const Portfolio = () => {
  return (
    <div>
      <h1 className="my-5 mx-0 text-3xl">Choose a gallery</h1>
      <div className="flex gap-12">
        <Link className="border-[#bbb] border-[5px] rounded-[5px] w-72 h-[350px] !bg-cover bg-[url('/illustration.png')] relative hover:text-[#53b28c]" href={"/portfolio/illustrations"}>
          <span className="absolute right-3 bottom-3 text-3xl font-bold">Illustrations</span>
        </Link>
        <Link className="border-[#bbb] border-[5px] rounded-[5px] w-72 h-[350px] !bg-cover bg-[url('/websites.jpg')] relative hover:text-[#53b28c]" href={"/portfolio/websites"}>
          <span className="absolute right-3 bottom-3 text-3xl font-bold">Websites</span>
        </Link>
        <Link className="border-[#bbb] border-[5px] rounded-[5px] w-72 h-[350px] !bg-cover bg-[url('/apps.jpg')] relative hover:text-[#53b28c]" href={"/portfolio/application"}>
          <span className="absolute right-3 bottom-3 text-3xl font-bold">Application</span>
        </Link>
      </div>
    </div>
  )
}

export default Portfolio