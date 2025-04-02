"use client"

import { useAppDispatch, useAppSelector } from '@/hooks/store'
import { addToCart, updateQuantity } from '@/store/cartSlice'
import { Button } from '@mui/material'
import { Product } from '@prisma/client'
import { Eye } from 'lucide-react'
import React, { useState } from 'react'
import { twMerge } from 'tailwind-merge'
import ReactImageMagnify from 'react-image-magnify';

interface SingleProductCleintProps {
    product: Product | any
}

const SingleProductCleint = ({
    product
}: SingleProductCleintProps) => {
    const [productImages, setproductImages] = useState(product.images[0]);

    const handleTabImage = (img: string) => {
        setproductImages(img)
    }

    const dispatch = useAppDispatch();
    const cartItem = useAppSelector((state) =>
        state.cart.items.find((item) => item.id === product.id)
    );


    return (
        <div>
            <div className='grid lg:grid-cols-2 gap-6 mt-5 md:mt-16'>
                <div className='flex flex-col-reverse lg:flex-row gap-4'>
                    <div className='flex flex-row lg:flex-col gap-3 shrink-0 justify-center lg:justify-start'>
                        {product.images.map((img: any, i: any) => (
                            <div onClick={() => handleTabImage(img)} className={twMerge(" transition-all duration-300 rounded-md border-2 border-transparent cursor-pointer", productImages == img && "border-2 border-[#E53E3E]")} key={i}>
                                <img src={img} alt="image" className={("rounded-md siz-20 md:size-28 object-cover")} />
                            </div>
                        ))}
                    </div>

                    <div className=" relative">
                        <ReactImageMagnify className='' {...{
                            smallImage: {
                                alt: 'Wristwatch by Ted Baker London',
                                isFluidWidth: true,
                                src: productImages
                            },
                            largeImage: {
                                src: productImages,
                                width: 1200,
                                height: 1800
                            },
                            enlargedImageContainerDimensions: {
                                width: "130%", // Adjust zoom window size
                                height: "100%"
                            },
                            enlargedImageContainerStyle: {
                                zIndex: 10
                            },
                            enlargedImageStyle: {
                                objectFit: "contain", // Ensures correct aspect ratio
                            }
                        }} />
                    </div>
                </div>

                <div className=' relative'>
                    <div className='text-[#E53E3E]'>Modern Dress</div>
                    <h3 className='font-semibold text-3xl mt-1 text-black'>{product.title}</h3>
                    <img src="/star.png" alt="star" className=' absolute -right-4 -top-3' />

                    <div className='flex items-center gap-1 my-4'>
                        <img src="/rating-dark.png" className='filter-img' alt="rating" />
                        <span className='text-sm text-black'>(1 customer review)</span>
                    </div>

                    <div className=''><span className='font-bold text-black'>${product.price}</span> <span className='text-stone-400 line-through'>$360.00</span></div>

                    <div className='h-1 border-t border-t-stone-200 my-5'></div>

                    <div className='text-base text-[#74787C]'>{product.description}</div>

                    <div className='flex text-base text-black gap-2 mt-3'>
                        <Eye />
                        28 people are viewing this right now
                    </div>

                    <div className='h-1 border-t border-t-stone-200 my-5'></div>

                    <div className='text-base text-[#74787C]'>Only 15 items left in stock!</div>

                    <div className='flex mt-2'>
                        <div className='h-4 flex-1 border-t-4 border-t-[#E53E3E]'></div>
                        <div className='h-4 flex-1/5 border-t-4 border-t-[#EBEBEB]'></div>
                    </div>

                    <div className='mt-5'>
                        <div className='flex text-base text-black items-center gap-4 mt-3'>
                            <img src="/returns.png" className='filter-img' alt="returns" />
                            Free returns
                        </div>
                        <div className='flex text-base text-black items-center gap-4 mt-3'>
                            <img src="/ship.png" className='filter-img' alt="ship" />
                            Free shipping via DHL, fully insured
                        </div>
                        <div className='flex text-base text-black items-center gap-4 mt-3'>
                            <img src="/check.png" className='filter-img' alt="check" />
                            All taxes and customs duties included
                        </div>
                    </div>

                    <div className="flex gap-4 whitespace-nowrap my-8">
                        <div className="border border-stone-200 rounded-md flex items-center">
                            <Button
                                onClick={() => {
                                    if (cartItem && cartItem.quantity > 1) {
                                        dispatch(updateQuantity({ id: (product.id), quantity: cartItem.quantity - 1 }));
                                    }
                                }}
                                className="px-2"
                            >
                                -
                            </Button>
                            <span>{cartItem?.quantity || 1}</span>
                            <Button
                                onClick={() => dispatch(updateQuantity({ id: (product.id), quantity: (cartItem?.quantity || 0) + 1 }))}
                                className="px-2"
                            >
                                +
                            </Button>
                        </div>

                        <Button
                            className="!border !border-[#141414] borderD w-full !rounded-md"
                            onClick={() => dispatch(addToCart(product))} // No need to pass quantity here
                        >
                            <img src="/Add-Cart.png" className='filter-img' alt="Add to Cart" />
                        </Button>
                    </div>


                    <Button className=' uppercase !py-3 !text-sm !text-white !bg-[#E53E3E] w-full !rounded-md'>
                        Buy The Item Now
                    </Button>

                    <div className='flex gap-8 mt-10'>
                        <div className='flex text-base text-black items-center gap-2 mt-3'>
                            <img src="/compare.png" className='filter-img' alt="returns" />
                            Free returns
                        </div>
                        <div className='flex text-base text-black items-center gap-2 mt-3'>
                            <img src="/info.png" className='filter-img' alt="returns" />
                            Free returns
                        </div>
                        <div className='flex text-base text-black items-center gap-2 mt-3'>
                            <img src="/share.png" className='filter-img' alt="returns" />
                            Free returns
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex my-16 gap-8 border-b border-b-stone-200'>
                <div className='text-black py-5 text-lg'>Description</div>
                <div className='text-[#74787C] py-5 text-lg'>Additional information</div>
                <div className='text-[#74787C] py-5 text-lg'>Reviews (2)</div>
            </div>

            <div className='flex flex-col lg:flex-row gap-8'>
                <div className='flex-1/12 text-base text-[#74787C]'>
                    Sed porttitor lectus nibh. Donec sollicitudin molestie malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
                    <br />
                    <br />
                    Lobortis rhoncus litora pretium tempor mattis proin, auctor dis massa enim himenaeos. Torquent senectus dui vehicula libero cum vitae natoque magna commodo quam,
                </div>
                <div className='flex-1'>
                    <img src="/video play.png" alt="video" />
                </div>
            </div>
        </div>
    )
}

export default SingleProductCleint