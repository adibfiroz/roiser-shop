import HeaderNav from '@/components/header-nav'
import SingleProductCleint from '@/components/single-product-cleint'
import prismadb from '@/lib/prismadb'
import React from 'react'

const SingleProductPage = async ({
    params
}: {
    params: { prodId: string }

}) => {
    const { prodId } = await params

    const getProduct = await prismadb.product.findUnique({
        where: {
            id: prodId
        }
    })

    const safeData = {
        ...getProduct,
        createdAt: getProduct?.createdAt.toISOString(),
        updatedAt: getProduct?.updatedAt?.toISOString(),
    }

    return (
        <div>
            <HeaderNav
                title='Product Details'
                breadcrumb='Product Details'
            />
            <div className='container mx-auto p-4'>
                {safeData &&
                    <SingleProductCleint product={safeData} />
                }
            </div>
        </div>
    )
}

export default SingleProductPage