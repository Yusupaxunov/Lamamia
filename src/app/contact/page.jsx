import Button from "@/components/button/button"
import Image from "next/image"

const Contact = () => {
  return (
    <div className="my-14">
      <h1 className="text-5xl mb-14 font-bold text-center">Let's Keep in Touch</h1>
      <div className="flex gap-28 items-center">
        <div className="flex-1 h-[500px] relative">
          <Image src="/contact.png" alt="contact" fill={true} className="animation object-contain" />
        </div>
        <form  className="flex-1 flex flex-col gap-5">
          <input className="p-5 border-[3px] border-[#bbb] outline-none text-[#bbb] text-xl font-bold rounded bg-transparent" type="text" placeholder="name" />
          <input className="p-5 border-[3px] border-[#bbb] outline-none text-[#bbb] text-xl font-bold rounded bg-transparent" type="text" placeholder="email" />
          <textarea className="p-5 border-4 border-[#bbb] outline-none text-[#bbb] text-xl font-bold rounded bg-transparent" placeholder="message" cols="2" rows="10"></textarea>
          <Button url={"#"} text={'Send'}/>
        </form>
      </div>
    </div>
  )
}

export default Contact