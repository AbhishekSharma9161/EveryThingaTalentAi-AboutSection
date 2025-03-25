import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TabComp from './TabComp'

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

    return (
        <div>
            <Tabs defaultValue="Ambition" className="">
                <div className="max-w-full m-auto">
                    <TabsList className='flex-nowrap w-120 h-12 bg-black rounded-4xl'>
                        {Object.keys(obj).map((key) => (
                            <TabsTrigger className='text-gray-500 text-base font-medium hover:text-white rounded-4xl transition duration-250 ease-in-out' key={key} value={key}>{key}</TabsTrigger>
                        ))}
                    </TabsList>
                </div>
                {/* TabsContent for Each Key */}
                {Object.entries(obj).map(([key, value]) => (
                    <TabsContent key={key} value={key}>
                        <TabComp key={key} obj={value} />
                    </TabsContent>
                ))}
            </Tabs>
        </div>
    );
};

export default Component;
