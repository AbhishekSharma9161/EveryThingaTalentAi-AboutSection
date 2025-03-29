import Element from "./Element"
import styles from './styles.module.css'

const DropDownBox = ({ obj }) => {
  return (
    <div className={` w-fit flex flex-col justify-around items-center gap-2 p-2    isolate  rounded-xl bg-white/20 shadow-lg ring-1 ring-black/5`}>
      {
        obj.map((ele, i) => {
          return <Element ele={ele} key={i} />
        })
      }
    </div>
  )
}

export default DropDownBox
