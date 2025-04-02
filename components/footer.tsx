"use client"

import React from 'react'
import { IconButton } from "@mui/material";
import { Moon, Sun } from 'lucide-react';
import { useThemeContext } from '@/store/theme-provider';

const Footer = () => {
    const { mode, toggleTheme } = useThemeContext();

    return (
        <footer className="bg-gray-100 bgblack py-10">
            <div className="container mx-auto px-4">
                <div className="flex justify-end items-center gap-2 mb-5">
                    <IconButton onClick={toggleTheme} color="inherit">
                        {mode === "dark" ? <Sun /> : <Moon />}
                    </IconButton>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 border-b pb-10">
                    <div className="space-y-4">
                        <h3 className="text-lg text-black font-semibold">About Store</h3>
                        <p className="text-red-500 font-bold text-xl">+258 3692 2569</p>
                        <p>Monday - Friday: <strong>8:00am - 6:00pm</strong></p>
                        <p>Saturday: <strong>8:00am - 6:00pm</strong></p>
                        <p>Sunday: <strong>Service Close</strong></p>
                    </div>
                    <div className="space-y-2 text-[#74787C]">
                        <h3 className="text-lg text-black font-semibold">Our Stores</h3>
                        <p>New York</p>
                        <p>London SF</p>
                        <p>Los Angeles</p>
                        <p>Chicago</p>
                        <p>Las Vegas</p>
                    </div>
                    <div className="space-y-2 text-[#74787C]">
                        <h3 className="text-lg text-black font-semibold">Shop Categories</h3>
                        <p>New Arrivals</p>
                        <p>Best Selling</p>
                        <p>Vegetables</p>
                        <p>Fresh Meat</p>
                        <p>Fresh Seafoods</p>
                    </div>
                    <div className="space-y-4 text-[#74787C]">
                        <h3 className="text-lg text-black font-semibold">Our Newsletter</h3>
                        <p>Subscribe to receive updates on new arrivals and discounts.</p>
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full px-4 py-2 border rounded-l-lg focus:outline-none"
                            />
                            <button className="bg-red-500 text-white px-4 py-2 rounded-r-lg">SUBSCRIBE</button>
                        </div>
                        <p className="text-sm text-gray-500">I would like to receive news and special offers.</p>
                    </div>
                </div>
                <div className="flex justify-between items-center mt-6 text-sm text-gray-500">
                    <div>Payment System: <span className="text-blue-600 font-semibold">Visa, PayPal, Mastercard</span></div>
                    <p>Copyright 2024 <span className="font-bold">©Roiser.</span> All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer