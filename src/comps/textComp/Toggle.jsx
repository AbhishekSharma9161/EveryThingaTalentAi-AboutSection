'use client'

import { useState, useEffect } from 'react'
import { Switch } from "@/components/ui/switch"


const Toggle = () => {

    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        document.documentElement.classList.toggle("dark", savedTheme === "dark");
        setTheme(savedTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
        localStorage.setItem("theme", newTheme);
    };

    return (
        <div>
            <Switch className="p-2 bg-gray-200 dark:bg-gray-800 rounded w-[50px]" onClick={toggleTheme} />
        </div>
    )
}

export default Toggle
