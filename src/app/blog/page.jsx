import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  
  if (!res.ok) {
       return notFound()
  }
 
  return res.json()
}

const Blog = async() => {

  const data = await getData()

  return (
    <div className="my-14">
      {data.map((item)=>(
        <div key={item.id}>
      <Link href={"/blog/testid"} className="flex items-center gap-12 my-12 flex-col md:flex-row">
        <div className="flex-1 ">
          <Image className="object-cover" src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg" alt="blog" width={400} height={250} />
        </div>
        <div className="flex-1">
          <h1 className="mb-3 text-3xl font-bold ">{item.title}</h1>
          <p className="text-lg text-[#999]">{item.body}</p>
        </div>
      </Link>
        <hr className="text-[#bbb]"/>
    </div>
      ))}
    
    </div>
  );
};

export default Blog;
