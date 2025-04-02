import { Product } from '@prisma/client'
import Link from 'next/link'
import React from 'react'

interface ProductCardProps {
    product: Product
}

const ProductCard = ({
    product
}: ProductCardProps) => {
    return (
        <div className='border border-stone-200 borderD group/item rounded-md overflow-hidden'>
            <Link href={`/product/${product.id}`}>
                <div className=' aspect-square bg-[#D9D9D9] relative'>
                    <img src={product.images[0]} loading='lazy' className='group-hover/item:brightness-75 transition-all duration-300 object-cover h-full w-full' alt={product.title} />
                    <img src="/tag.png" alt="new" className=' absolute left-6 top-6' />
                    <div className=' absolute z-10 transition-all duration-300 -right-10 top-6 space-y-2 group-hover/item:right-6'>
                        <img src="/cart.png" alt="new" className='' />
                        <img src="/like.png" alt="new" className='' />
                        <img src="/eye.png" alt="new" className='' />
                    </div>
                </div>
                <div className='p-5'>
                    <p className='text-[#74787C] text-[12px] uppercase'>Levi’s Cotton</p>
                    <div className='text-black'>{product.title}</div>
                    <img src="/rating.png" className='my-1' alt="" />
                    <div className='text-black text-base font-medium mt-2'>
                        ${product.price}
                    </div>

                    {product.category}
                </div>
            </Link>
        </div>
    )
}

export default ProductCard