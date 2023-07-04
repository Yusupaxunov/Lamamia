import Image from "next/image"

const Footer = () => {
  return (
    <div className="font-[14px] h-12 vsm:flex-row flex-col flex items-center justify-between">
        <div>©2023 Lamamia. All rights reserved.</div>
        <div className="flex items-center gap-3 my-2 vsm:my-0">
          <Image src="/1.png" alt="Lamamia" className=" opacity-[0.6] hover:opacity-[1] transition-all cursor-pointer" width={20} height={20} />
          <Image src="/2.png" alt="Lamamia" className=" opacity-[0.6] hover:opacity-[1] transition-all cursor-pointer" width={20} height={20} />
          <Image src="/3.png" alt="Lamamia" className=" opacity-[0.6] hover:opacity-[1] transition-all cursor-pointer" width={20} height={20} />
          <Image src="/4.png" alt="Lamamia" className=" opacity-[0.6] hover:opacity-[1] transition-all cursor-pointer" width={20} height={20} />
        </div>
    </div>
  )
}

export default Footer