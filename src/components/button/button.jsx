import Link from "next/link";

const Button = ({text, url}) => {
  return (
    <div>
      <Link className="p-4 text-white text-xl cursor-pointer bg-[#53c28b] border-none rounded-md max-w-max" href={url}>{text}</Link>
    </div>
  )
}

export default Button;