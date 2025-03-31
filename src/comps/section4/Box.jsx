import styles from './styles.module.css';

const Box = ({ obj, idx }) => {
    return (
        <div 
            className={`${styles[`b_${idx}`]} p-4 text-black box rounded-2xl my-3 md:my-0`} 
            style={{ backgroundColor: obj.bg, gridArea: `b_${idx}` }} 
        >
            <p className='text-2xl text-gray-600 font-bold'>{"0"+(idx+1)}</p>
            <h2 className='text-2xl text-gray-600 font-bold mb-2'>{obj.desc}</h2>
            <h3 className='font-bold'>{obj.hashtag}</h3>
            {obj.special && "special comp"}
        </div>
    );
};

export default Box;
