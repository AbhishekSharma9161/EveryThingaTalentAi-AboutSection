import Image from 'next/image'

const Element = ({ ele }) => {
  return (
    <div className='bg-black p-2 w-110 rounded-[8px] hover:border border-red-300'>
      <div className='flex justify-around items-center'>
        <div className='w-10 h-10 bg-black'>
          {/* </Image> */}
        </div>
        <div>
          <h1>{ele.heading}</h1>
          <h1>{ele.desc}</h1>
        </div>
      </div>
    </div>
  )
}

export default Element
