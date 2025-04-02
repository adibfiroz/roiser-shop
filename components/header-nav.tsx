"use client"

import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { motion } from "framer-motion"

interface HeaderNavProps {
    title: string
    breadcrumb: string
}

const HeaderNav = ({
    title,
    breadcrumb
}: HeaderNavProps) => {
    return (
        <div className="bg-[url('/header-bg.png')] flex items-center h-[180px] md:h-[250px]">
            <div className='flex justify-between flex-wrap container mx-auto p-4'>
                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className='text-3xl lg:text-6xl font-bold text-[#141414]'>{title}
                </motion.h2>
                <ul className='flex items-center gap-2 text-lg'>
                    <li className='text-[#74787C]'>
                        <Link href="/">Home</Link>
                    </li>
                    <li><ChevronRight className='text-stone-300' /></li>
                    <li className='text-[#141414] font-semibold'>{breadcrumb}</li>
                </ul>
            </div>
        </div>
    )
}

export default HeaderNav