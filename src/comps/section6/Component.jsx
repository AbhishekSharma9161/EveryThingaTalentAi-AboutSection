import Container from "./Container"
import styles from './styles.module.css'

const Component = () => {

    const obj = [
        {
            smallHead: "Everything AI 2.0",
            year: 2024,
            desc: "Launched Everything AI 2.0 with advanced AI-powered analytics, customizable insights, and expanded user features.",
            img: "/assests/section6-1.webp",
            boxes: [{
                value: "50k+",
                text: "Users"
            },
            {
                value: "98%",
                text: "Accuracy"
            },
            {
                value: "2X faster",
                text: "Processing"
            }],
        },
        {
            smallHead: "ML Integration",
            year: 2023,
            desc: "Introduced personalized machine learning models for users, enhancing prediction accuracy by 30%. Everything AI also launched its first integration with popular CRM tools, allowing seamless data sharing.",
            img: "/assests/section6-2.webp",
            boxes: [{
                value: "+30%",
                text: "Accuracy"
            },
            {
                value: "15+",
                text: "Integrations"
            },
            {
                value: "25k+",
                text: "Users"
            }],
        },
        {
            smallHead: "The Beggining",
            year: 2022,
            desc: "Everything AI was officially launched! Released initial AI-powered automation features for data processing and visualization, setting a foundation for growth in intelligent data solutions.",
            img: "/assests/section6-3.webp",
            boxes: [{
                value: "10+",
                text: "Features"
            },
            {
                value: "1M+",
                text: "dataProcessed"
            },
            {
                value: "1K+",
                text: "clients"
            }],
        },
    ]

    return (
        <div className={`${styles.cont}`}>
            <div className='p-4'>
                {
                    obj.map((o, i) => {
                        return <Container obj={o} key={i} i={i+1} />
                    })
                }
            </div>
        </div>
    )
}

export default Component
