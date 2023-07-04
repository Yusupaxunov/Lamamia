"use client"

import Link from "next/link";
import { usePathname } from 'next/navigation';
import DarkModeToggle from "../darkModeToggle/darkModeToggle";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
];

const Navbar = () => {

  const currentRoute = usePathname();

  return (
    <div className="flex h=[100px] justify-between items-center ">
      <Link href="/" className="font-bold text-[22px]">Lamamia</Link>
      <div className="flex items-center gap-5 ">
        <DarkModeToggle/>
        {links.map((link) => (
          <Link href={link.url} key={link.id} className={`${currentRoute === link.url ? "text-[#53b28c]" : ""} hover:text-[#bbb] transition-all`}>
            {link.title}
          </Link>
        ))}
        <button className=" py-[5px] px-[10px] border-none bg-[#53c28b] text-white cursor-pointer rounded-sm">Log Out</button>
      </div>
    </div>
  );
};

export default Navbar;
