import Button from '@/components/button/button'
import Image from 'next/image'

const Category = ({params}) => {

  return (
    <div>
        <h1 className='text-[#53b28c] text-4xl font-bold capitalize'>{params.category}</h1>
        <div className='flex gap-12 mt-12 mb-24 odd:flex-row-reverse flex-col-reverse md:flex-row'>
            <div className='flex-1 flex flex-col gap-5 justify-center'>
                <h1 className='text-5xl font-bold'>Test</h1>
                <p className='text-xl'>Description</p>
                <Button url={'#'} text={"See More"}/>
            </div>
            <div className='flex h-[300px] md:h-[400px] lg:h-[500px] relative md:flex-1'>
                <Image className='object-cover' fill={true} alt='portfolio' priority={true} src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"/>
            </div>
        </div>
    </div>
  )
}

export default Category