import Box from './Box';
import styles from './styles.module.css';

const Component = () => {
    const items = [
        { "desc": "With us, there are no surprises—just straight talk and genuine commitment.", "hashtag": "#HONESTY", "bg": "#fde047" },
        { "desc": "Embrace hard work", "hashtag": "#HARDWORK", "special": true, "bg": "#fdba74" },
        { "desc": "We act with urgency to ensure progress and deliver results efficiently. Every moment matters.", "hashtag": "#URGENT", "bg": "#8b5cf6" },
        { "desc": "We’re here to help you aim higher, break limits, and achieve what others might think impossible.", "hashtag": "#ASPIRATION", "bg": "#bef264" },
        { "desc": "Grow 1% every day", "hashtag": "#GROWTHMINDSET", "bg": "#bbf7d0" },
        { "desc": "Do hard things", "hashtag": "RESILENT", "bg": "#d4d4d8" },
        { "desc": "We value fresh ideas, bold solutions, and the freedom to imagine what’s next.", "hashtag": "#CREATIVITY", "bg": "#fda4af" },
        { "desc": "Commit to continuous learning and improvement", "hashtag": "#LEARNING", "bg": "#bfdbfe" },
        { "desc": "Build trust through actions, not just words.", "hashtag": "#TRUST", "bg": "#f77c73" },
        { "desc": "Every project, every solution we create is aimed at contributing to something greater.", "hashtag": "#CONTRIBUTION", "bg": "#f5e660" }
    ];

    return (
        <div className={styles.gridComp}>
            {items.map((item, idx) => <Box obj={item} key={idx} idx={idx} />)}
        </div>
    );
};

export default Component;
