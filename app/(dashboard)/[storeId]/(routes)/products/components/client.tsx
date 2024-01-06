"use client";

import {useParams, useRouter} from "next/navigation";
import {Plus} from "lucide-react";

import Heading from "@/components/ui/heading";
import {Button} from "@/components/ui/button";
import {Separator} from "@/components/ui/separator";

// @ts-ignore
import { ProductColumn, columns } from "@/app/(dashboard)/[storeId]/(routes)/products/components/columns";

import {DataTable} from "@/components/ui/data-table";
import {ApiList} from "@/components/ui/api-list";

interface ProductClientProps {
    data: ProductColumn[]
}

export function ProductClient({ data }: ProductClientProps) {
    const router = useRouter();
    const params = useParams();
    return (
        <>
            <div className='flex items-center justify-between'>
                <Heading
                    title={`Products (${data.length})`}
                    description="Manage products for your store"
                />
                <Button onClick={() => router.push(`/${params.storeId}/products/new`)}>
                    <Plus className="mr-2 h-4 w-4"/>
                    Add New
                </Button>
            </div>
            <Separator />
            <DataTable searchKey="name" columns={columns} data={data} />
            <Heading title="API" description="Api calls for products"/>
            <Separator />
            <ApiList entityName="products" entityIdName="productId"/>
        </>
    );
}

