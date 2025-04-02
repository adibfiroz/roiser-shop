"use client"

import { Product } from '@prisma/client'
import { Grip, List } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import ProductCard from './product-card'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import queryString from "query-string";
import { getMoreProduct } from '@/app/actions/more-data'
import InfiniteScroll from "react-infinite-scroll-component";
import { SyncLoader } from 'react-spinners'
import { Button } from '@mui/material'

interface ProductClientProps {
    getProducts: Product[] | any
    initialSort?: string
    decodedString?: string
    sort?: string
}

const ProductClient = ({
    getProducts,
    initialSort,
    decodedString,
    sort
}: ProductClientProps) => {

    const router = useRouter();
    const pathName: any = usePathname()
    const searchParams = useSearchParams();
    const [products, setProducts] = useState<Product[]>(getProducts);
    const [page, setPage] = useState(2);
    const [hasMoreImage, setHasMoreImage] = useState<any>(getProducts.length < 9 ? false : true)
    const [loadingMore, setLoadingMore] = useState(false)

    const [value, setValue] = useState(() => {
        return searchParams ? searchParams.get("sort") || initialSort || "" : "";
    });

    useEffect(() => {

        const currentParams = queryString.parse(searchParams.toString());

        const updatedParams = {
            ...currentParams,
            sort: value === "" ? undefined : value,
        };

        const url = queryString.stringifyUrl(
            { url: pathName, query: updatedParams },
            { skipNull: true }
        );

        router.push(url, { scroll: false });
    }, [value, router, pathName]);

    const handleChange = (event: SelectChangeEvent<string>) => {
        setValue(event.target.value);
    };

    const handleLoadMore = async () => {
        if (!hasMoreImage) {
            return
        }
        setLoadingMore(true)
        try {
            const response = await getMoreProduct({
                sort: sort,
                page: page,
                categories: decodedString
            });

            const filteredNewImages: any = response.data?.filter(newProduct => {
                return !products?.some(existingProduct => existingProduct?.id === newProduct.id);
            });

            setProducts((prev) => [...prev, ...filteredNewImages]);
            setHasMoreImage(response?.hasMore)
            setPage((prev) => prev + 1)
            setLoadingMore(false)
        } catch (error) {
            setLoadingMore(false)
            console.error('Failed to load more images:', error);
        } finally {
            setLoadingMore(false)
        }
    };

    useEffect(() => {
        setProducts(getProducts)
    }, [getProducts])

    useEffect(() => {
        setHasMoreImage(getProducts.length < 9 ? false : true)
        setPage(2)
    }, [decodedString, sort])

    console.log(products.length)

    return (
        <div>
            <div className=' '>
                <div className='flex flex-col gap-y-5 sm:flex-row justify-between items-center'>
                    <div className='flex items-center justify-between w-full sm:w-fit gap-6'>
                        <button className='border border-stone-200 rounded-md borderD flex items-center gap-2 py-2 px-3'>
                            <Grip />
                            <List className='text-stone-400' />
                        </button>
                        <div className='text-[#74787C] text-sm'>Showing 1–12 of 88 results</div>
                    </div>

                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <Select
                            value={value}
                            onChange={handleChange}
                            displayEmpty
                            className='h-10'
                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem value="">
                                <em>Default Sorting</em>
                            </MenuItem>
                            <MenuItem value="popular">Popular</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>

            <InfiniteScroll
                dataLength={products?.length}
                next={handleLoadMore}
                hasMore={!!hasMoreImage}
                loader={<h3 className="flex justify-center mt-5"></h3>}
                endMessage={<h3 className=''></h3>}
            >
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-5 mt-6'>
                    {products.map((product: any) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}
                </div>
            </InfiniteScroll>



            {loadingMore &&
                <div className='flex justify-center my-4'>
                    <SyncLoader
                        size={20}
                        color="#b8c4c3"
                    />
                </div>
            }

            {(hasMoreImage && !loadingMore) &&
                <div className='text-center my-4' onClick={handleLoadMore}>
                    <Button className='text-lg h-auto py-2 px-6'>Load More</Button>
                </div>
            }
        </div>
    )
}

export default ProductClient