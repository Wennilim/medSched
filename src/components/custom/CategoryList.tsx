/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList
} from "@/components/ui/command";
import { getCategoryApi } from '@/utils/api/getCategoryApi';
import { baseURL } from "@/utils/axios";
import { useQuery } from '@tanstack/react-query';
import classNames from "classnames";
import { Link, useParams } from "react-router-dom";


export const CategoryList = () => {
    const categoryValue = useParams()

    const getCategoryQuery = useQuery({
        queryKey: ['getCategories'],
        queryFn: () => getCategoryApi(),
        enabled: true,
        staleTime: 0,
    });

    return (
        <div>
            <Command className="mt-5 flex flex-col h-screen">
                <CommandInput placeholder="Type a command or search..." />
                <CommandList className="overflow-visible">
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Categories" >
                        {getCategoryQuery.data?.data && getCategoryQuery.data?.data?.map((category: any) => {
                            const isActive = categoryValue.category === category.Name.toLowerCase()
                            return (
                                <Link
                                    key={category.id}
                                    to={`/search/${category.Name.toLowerCase()}`}
                                >
                                    <CommandItem
                                        value={category.Name}
                                        className={classNames("flex gap-2 items-center w-full cursor-pointer p-4 rounded-md transition-all ease-in-out shadow hover:bg-heroBg bg-categoryList",
                                            isActive ? "bg-logo text-white" : "")
                                        }
                                    >
                                        {category.Icon && <img src={`${baseURL}${category.Icon.url}`} alt={category.Name} className='w-8 h-8 self-center rounded-xl' />}
                                        {category.Name}
                                    </CommandItem>
                                </Link>
                            )
                        }
                        )}
                    </CommandGroup>
                </CommandList>
            </Command>
        </div >
    )
}
