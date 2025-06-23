import SmallBox from "./SmallBox";
import Image from 'next/image';


const Container = ({ obj, i }) => {
    const { smallHead, year, desc, boxes, img } = obj;
    return (
        <div className={`flex justify-between items-start sticky top-30 py-8 px-14 rounded-2xl gap-10 bg-gradient-to-b from-[#e2e8f0] to-white dark:from-black dark:via-slate-900 dark:to-slate-950`} >
            <div>
                <p className={`font-medium text-purple-400`}>{smallHead}</p>
                <h1 className={`text-3xl font-bold pb-6`}>{year}</h1>
                <p className={`mb-6`}>{desc}</p>
                {
                    <div className="flex flex-wrap gap-4">
                        {
                            boxes.map((box, i) => {
                                return <SmallBox box={box} key={i} z={i} />
                            })
                        }
                    </div>
                }
            </div>
            <div className="">
                <div className="w-10 h-10 md:w-150 md:h-150 relative rounded-xl overflow-hidden hidden md:block">
                    <Image src={img} alt={`${smallHead} illustration`} fill />
                </div>
            </div>
        </div >
    )
}

export default Container