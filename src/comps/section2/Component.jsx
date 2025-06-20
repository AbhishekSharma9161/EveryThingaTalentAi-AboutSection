'use client'

import React, { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TabComp from './TabComp'
import styles from './styles.module.css';

const Component = () => {
    const obj = {
        "Ambition": {
            "name": "Ambition",
            "heading": "Connecting Talent and Opportunity",
            "desc": "Hiring doesn't have to be a painful guessing game. We're bridging the gap between recruiters and software engineers through our platform, where talent and opportunity finally meet, creating the perfect match.",
            "points": ["Connect skilled developers with ideal roles", "Streamline tech recruitment process", "Create optimal candidate-company matches"],
            "img": "/assests/ambition.jpg"
        },
        "Satisfaction": {
            "name": "Satisfaction",
            "heading": "Partnering for Success",
            "desc": "Your success is our mission, and we're here to fuel it every step of the way by becoming your partner in achieving hiring excellence. For us, your success isn't just a goal; it's the spark that drives the future of tech and innovation!",
            "points": ["Dedicated partnership for hiring success", "Fuel company growth through talent", "Drive tech innovation through matching"],
            "img": "/assests/security.jpg"
        },
        "Integrity": {
            "name": "Integrity",
            "heading": "Building Trust in Hiring",
            "desc": "We believe that trust is the foundation of every great hire. That's why we make it our mission to prioritize clarity and trust at every step of the journey.",
            "points": ["Build hiring confidence through transparency", "Prioritize trust in recruitment process", "Foster honest candidate-employer relationships"],
            "img": "/assests/integrity.webp"
        },
        "Vigilance": {
            "name": "Vigilance",
            "heading": "Security-Driven Solutions",
            "desc": "Confidence starts with security, and we are committed to enhancing your experience. Your security is woven into every part of our platform so you can drive forward without a second thought.",
            "points": ["Prioritize end-to-end platform security", "Ensure protected recruitment experience", "Build confidence through data protection"],
            "img": "/assests/integrity.webp"
        },
    };

    const [currTab, setCurrTab] = useState(0);
    const [currPos, setCurrPos] = useState(0);
    const clickHandler = (tabNum) => {
        setCurrTab(tabNum);
        const pos = (tabNum * 40 * 4) + (tabNum * 15) + 11;
        setCurrPos(pos);
    }

    useEffect(() => {
        console.log(currPos);
    }, [currPos]);

    return (
        <div>
            <Tabs defaultValue="Ambition" className="hidden md:block ">
                <div className="max-w-full m-auto flex">
                    <TabsList className=' flex-nowrap w-120  h-12 border-1 w-fit border-gray-800 rounded-4xl dark:bg-gradient-to-r from-black via-[#0f172a] to-[#020617] hover:scale-[101%] relative mx-auto'>
                        {/* "Red Dot" */}
                        <div
                            className="absolute"
                            style={{ width: "160px", height: "40px", backgroundColor: "white", left: `${currPos}px`, transition: '0.8s all ease', zIndex: '0', borderRadius: "30px" }}
                        ></div>
                        {Object.keys(obj).map((key, ind) => (
                            <TabsTrigger
                                onClick={() => clickHandler(ind)}
                                className='text-gray-500 text-base font-medium rounded-4xl transition duration-250 ease-in-out dark:hover:text-white z-1'
                                key={key}
                                value={key}
                            >
                                {key}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                </div>
                {/* TabsContent for Each Key */}
                {Object.entries(obj).map(([key, value]) => (
                    <TabsContent key={key} value={key}>
                        <TabComp obj={value} />
                    </TabsContent>
                ))}
            </Tabs>
            {
                <div className="max-w-full m-auto md:hidden">
                    {Object.entries(obj).map(([key, value]) => (
                        <TabComp key={key} obj={value} />
                    ))}
                </div>
            }
        </div>
    );
};

export default Component;
