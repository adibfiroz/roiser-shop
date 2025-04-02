
"use client"

import { RootState } from '@/store';
import Link from 'next/link'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Menu from '@mui/material/Menu';
import { Button, Input } from '@mui/material';
import { applyDiscount, clearCart, removeDiscount, removeFromCart } from '@/store/cartSlice';
import { X } from 'lucide-react';


const Header = () => {
    const dispatch = useDispatch();

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [coupon, setCoupon] = useState("");

    const handleApplyDiscount = () => {
        if (coupon) {
            dispatch(applyDiscount(coupon));
            setCoupon("");
        }
    };

    const { items, totalPrice, discount, discountCode } = useSelector(
        (state: RootState) => state.cart
    );


    return (
        <header className=' sticky top-0 bg-white bgblack z-20'>
            <div className=' container mx-auto p-4'>
                <div className='flex justify-between'>
                    <Link href="/">
                        <img src="/logo.png" className='filter-img' alt="" />
                    </Link>

                    <div className='flex items-center gap-4'>
                        <div className=' text-right hidden md:block'>
                            <div className='text-sm text-[#74787C]'>Call Us Now:</div>
                            <div className='text-base text-black font-bold'>+(258) 2159-2159</div>
                        </div>

                        <div className='size-11 hidden md:flex items-center justify-center rounded-full bg-[#F5F6F2]'>
                            <img src="/call.png" alt="" />
                        </div>

                        <span className='w-1 border-l hidden md:block border-l-stone-100 h-10'></span>

                        <div className='hidden md:block'>
                            <img src="/love.png" alt="" />
                        </div>

                        <span className='w-1 border-l hidden md:block border-l-stone-100 h-10'></span>

                        <div className='size-11 cursor-pointer relative flex items-center justify-center rounded-full bg-[#F5F6F2]'>
                            <div onClick={handleClick} className=''>
                                <img src="/cartIcon.png" alt="" />
                                <span className='size-4 absolute right-0 top-0 bg-[#E53E3E] rounded-full text-[10px] flex justify-center items-center text-white'>
                                    {items.length}
                                </span>
                            </div>

                            <Menu
                                id="fade-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                            >

                                <div className="flex h-full flex-col overflow-y-scroll bg-white bgblack shadow-xl">
                                    <div className="flex-1 px-4 py-2 sm:px-6">
                                        <div className="flex items-start justify-between">
                                            <h2 className="text-lg font-medium text-black">Shopping cart</h2>

                                            <div className="ml-3 flex h-7 items-center">
                                                <button
                                                    type="button"
                                                    onClick={handleClose}
                                                    className="relative cursor-pointer -m-2 p-2 text-gray-400 hover:text-gray-500"
                                                >
                                                    <span className="absolute -inset-0.5" />
                                                    <X aria-hidden="true" className="size-6" />
                                                </button>
                                            </div>
                                        </div>

                                        <div className="mt-8">

                                            {items.length === 0 &&
                                                <div className='text-center'>Cart is empty </div>
                                            }
                                            <div className="flow-root">
                                                <ul role="list" className="-my-6 divide-y divide-gray-200">
                                                    {items.map((product) => (
                                                        <li key={product.id} className="flex py-6">
                                                            <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                                <img alt={product.images[0]} src={product.images[0]} className="size-full object-cover" />
                                                            </div>

                                                            <div className="ml-4 flex flex-1 flex-col">
                                                                <div>
                                                                    <div className="flex justify-between text-base font-medium text-black">
                                                                        <h3>
                                                                            {product.title}
                                                                        </h3>
                                                                        <p className="ml-4">${product.price}</p>
                                                                    </div>
                                                                </div>
                                                                <div className="flex flex-1 items-end justify-between text-sm">
                                                                    <p className="text-gray-500">Qty {product.quantity}</p>

                                                                    <div className="flex">
                                                                        <button onClick={() => dispatch(removeFromCart(product.id))} type="button" className="font-medium text-indigo-600 cursor-pointer hover:text-indigo-500">
                                                                            Remove
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {discount > 0 && (
                                        <div className="flex justify-between px-4 text-green-500 mt-2">
                                            <span>Discount ({discountCode}):</span>
                                            <span>- ${discount.toFixed(2)}</span>
                                        </div>
                                    )}


                                    {items.length > 0 &&
                                        <div className="mt-4 flex gap-2 px-4">
                                            <Input
                                                type="text"
                                                placeholder="Enter coupon code"
                                                value={coupon || "SAVE10"}
                                                onChange={(e) => setCoupon(e.target.value)}
                                                className="flex-1"
                                            />
                                            <Button onClick={handleApplyDiscount} className="bg-blue-500 text-white">Apply</Button>
                                            {discount > 0 && (
                                                <Button onClick={() => dispatch(removeDiscount())} className="text-red-500">Remove Discount</Button>
                                            )}
                                        </div>
                                    }
                                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                                        <div className="flex justify-between text-base font-medium text-black">
                                            <p>Subtotal</p>
                                            <p>${totalPrice.toFixed(2)}</p>
                                        </div>
                                        <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                                        <div className="mt-6">
                                            <a
                                                href="#"
                                                className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-xs hover:bg-indigo-700"
                                            >
                                                Checkout
                                            </a>
                                        </div>

                                    </div>
                                </div>

                            </Menu>
                        </div>

                        <div className=''>
                            <div className='text-sm text-[#74787C]'>Your cart,</div>
                            <div className='text-base text-black font-bold'>${totalPrice.toFixed(2)}</div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header