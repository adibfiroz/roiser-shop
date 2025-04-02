"use client"

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import queryString from "query-string";


const categories = [
    {
        id: 1,
        title: "Electronics"
    },
    {
        id: 2,
        title: "Accessories"
    },
    {
        id: 3,
        title: "Computers"
    },
    {
        id: 4,
        title: "Home & Kitchen"
    },
    {
        id: 5,
        title: "Wearables"
    },
    {
        id: 6,
        title: "Gaming"
    },
    {
        id: 7,
        title: "Fitness"
    },
    {
        id: 9,
        title: "Audio"
    },
    {
        id: 10,
        title: "Sportswear"
    },
]


const SidebarFilters = () => {

    const router = useRouter();
    const pathName: any = usePathname()
    const searchParams = useSearchParams();

    const handleCategoryChange = (category: string, checked: boolean) => {
        const currentCategories = searchParams.get("categories")?.split(",") || [];

        let updatedCategories;
        if (checked) {
            updatedCategories = [...currentCategories, category]; // Add category
        } else {
            updatedCategories = currentCategories.filter((c) => c !== category); // Remove category
        }

        const updatedParams = {
            ...queryString.parse(searchParams.toString()),
            categories: updatedCategories.length ? updatedCategories.join(",") : undefined,
        };

        const url = queryString.stringifyUrl({ url: pathName, query: updatedParams }, { skipNull: true });
        router.push(url, { scroll: false });
    };

    const selectedCategories = searchParams.get("categories")?.split(",") || [];

    return (
        <div className=''>
            <div className='border border-stone-200 borderD p-4 rounded-md'>
                <h3 className='border-b border-b-stone-200 pb-3 font-semibold'>Categories</h3>
                <div className='mt-4'>
                    <FormGroup>
                        {categories.map((cat) => {
                            const isChecked = selectedCategories.includes(cat.title);

                            return (
                                <FormControlLabel
                                    key={cat.id}
                                    control={<Checkbox checked={isChecked} onChange={(e) => handleCategoryChange(cat.title, e.target.checked)} />}
                                    label={cat.title}
                                />
                            );
                        })}
                    </FormGroup>
                </div>
            </div>
        </div>
    )
}

export default SidebarFilters