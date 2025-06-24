'use client'

import React, { useState } from 'react'
import Image from 'next/image'

const StandardsTabs = () => {
    const [activeTab, setActiveTab] = useState('Ambition')

    const standards = {
        "Ambition": {
            heading: "Connecting Talent and Opportunity",
            description: "Hiring doesn't have to be a painful guessing game. We're bridging the gap between recruiters and software engineers through our platform, where talent and opportunity finally meet, creating the perfect match.",
            points: [
                "Connect skilled developers with ideal roles",
                "Streamline tech recruitment process",
                "Create optimal candidate-company matches"
            ],
            image: "/assests/ambition.jpg"
        },
        "Satisfaction": {
            heading: "Partnering for Success",
            description: "Your success is our mission, and we're here to fuel it every step of the way by becoming your partner in achieving hiring excellence. For us, your success isn't just a goal; it's the spark that drives the future of tech and innovation!",
            points: [
                "Dedicated partnership for hiring success",
                "Fuel company growth through talent",
                "Drive tech innovation through matching"
            ],
            image: "/assests/some1.avif"
        },
        "Integrity": {
            heading: "Building Trust in Hiring",
            description: "We believe that trust is the foundation of every great hire. That's why we make it our mission to prioritize clarity and trust at every step of the journey.",
            points: [
                "Build hiring confidence through transparency",
                "Prioritize trust in recruitment process",
                "Foster honest candidate-employer relationships"
            ],
            image: "/assests/integrity.webp"
        },
        "Vigilance": {
            heading: "Security-Driven Solutions",
            description: "Confidence starts with security, and we are committed to enhancing your experience. Your security is woven into every part of our platform so you can drive forward without a second thought.",
            points: [
                "Prioritize end-to-end platform security",
                "Ensure protected recruitment experience",
                "Build confidence through data protection"
            ],
            image: "/assests/security.jpg"
        }
    }

    return (
        <>
            <div className="inline-flex bg-gradient-to-br border from-[#f5f6f7] via-[#f5f3fc] to-white dark:from-black dark:via-slate-900 dark:to-slate-950 hover:scale-[101%] shadow-md rounded-full p-1 relative max-sm:hidden mb-8">
                {Object.keys(standards).map((tab) => (
                    <button
                        key={tab}
                        className={`px-6 py-2 rounded-full relative z-10 transition-colors duration-200 ${
                            activeTab === tab
                                ? 'text-gray-900'
                                : 'dark:text-gray-400 text-gray-700 hover:text-gray-900 dark:hover:text-slate-300'
                        }`}
                        onClick={() => setActiveTab(tab)}
                    >
                        <span className="relative z-10">{tab}</span>
                        {activeTab === tab && (
                            <div className="absolute inset-0 bg-[#ead4f9] rounded-full shadow-md" style={{ opacity: 1 }}></div>
                        )}
                    </button>
                ))}
            </div>

            <div style={{ opacity: 1, transform: 'none' }} className="mb-8">
                <div className="max-sm:hidden">
                    <div style={{ zIndex: 45 }} className="bg-gradient-to-br relative border from-[#f5f6f7] via-[#f5f3fc] to-white dark:from-black dark:via-slate-900 dark:to-slate-950 rounded-3xl p-8 md:p-16 transition-transform duration-200">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div className="space-y-6">
                                <h2 className="text-4xl font-medium">{standards[activeTab].heading}</h2>
                                <p className="text-xl">{activeTab}</p>
                                <p className="text-gray-600">{standards[activeTab].description}</p>
                                <ul className="list-none space-y-3 text-gray-800 dark:text-gray-200 text-sm sm:text-base">
                                    {standards[activeTab].points.map((point, index) => (
                                        <li key={index} className="flex items-center gap-2" style={{ opacity: 1, transform: 'none' }}>
                                            <span className="text-lg text-purple-500">✧</span>
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="relative h-[400px]">
                                <Image
                                    src={standards[activeTab].image}
                                    alt={`${activeTab} illustration`}
                                    fill
                                    className="object-cover rounded-lg"
                                    style={{ opacity: 1, transform: 'none' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid gap-8 w-[calc(100%-1rem)] mx-auto sm:hidden mt-8">
                {Object.entries(standards).map(([tab, content]) => (
                    <div
                        key={tab}
                        style={{ zIndex: 45 }}
                        className="bg-gradient-to-br relative border from-[#f5f6f7] via-[#f5f3fc] to-white dark:from-black dark:via-slate-900 dark:to-slate-950 rounded-3xl p-8 md:p-16 transition-transform duration-200"
                    >
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div className="space-y-6">
                                <h2 className="text-4xl font-medium">{content.heading}</h2>
                                <p className="text-xl">{tab}</p>
                                <p className="text-gray-600">{content.description}</p>
                                <ul className="list-none space-y-3 text-gray-800 dark:text-gray-200 text-sm sm:text-base">
                                    {content.points.map((point, index) => (
                                        <li key={index} className="flex items-center gap-2" style={{ opacity: 1, transform: 'none' }}>
                                            <span className="text-lg text-purple-500">✧</span>
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="relative h-[400px]">
                                <Image
                                    src={content.image}
                                    alt={`${tab} illustration`}
                                    fill
                                    className="object-cover rounded-lg"
                                    style={{ opacity: 1, transform: 'none' }}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default StandardsTabs 