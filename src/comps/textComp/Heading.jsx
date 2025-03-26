import Box from "./Box"

const Heading = ({ boxText, heading, desc }) => {
  return (
    <div className="flex flex-col justify-between items-center md:w-3xl m-auto">
      <Box text={boxText} />
      <h1 className="text-5xl font-bold mt-5">{heading}</h1>
      <p className="text-xl text-gray-400 mt-5 text-center">{desc}</p>
    </div>
  )
}

export default Heading
