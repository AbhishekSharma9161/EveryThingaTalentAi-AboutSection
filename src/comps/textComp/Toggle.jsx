'use client'

import React, { useState } from 'react'
import { Switch } from "@/components/ui/switch"


const Toggle = () => {

    const changeFunc = () => {
        const currTheme = localStorage.getItem('theme')
        if (currTheme === 'dark') localStorage.setItem('theme', 'light')
        else localStorage.setItem('theme', 'dark')
    }

    return (
        <div>
            <Switch onClick={changeFunc} />
        </div>
    )
}

export default Toggle
