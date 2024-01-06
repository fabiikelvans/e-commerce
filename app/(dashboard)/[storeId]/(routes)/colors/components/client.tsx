"use client";

import {useParams, useRouter} from "next/navigation";
import {Plus} from "lucide-react";

import Heading from "@/components/ui/heading";
import {Button} from "@/components/ui/button";
import {Separator} from "@/components/ui/separator";

import {DataTable} from "@/components/ui/data-table";
import {ApiList} from "@/components/ui/api-list";
import {ColorColumn, columns} from "@/app/(dashboard)/[storeId]/(routes)/colors/components/columns";

interface ColorClientProps {
    data: ColorColumn[]
}

export function ColorClient({ data }: ColorClientProps) {
    const router = useRouter();
    const params = useParams();
    return (
        <>
            <div className='flex items-center justify-between'>
                <Heading
                    title={`Color (${data.length})`}
                    description="Manage colors for your store"
                />
                <Button onClick={() => router.push(`/${params.storeId}/colors/new`)}>
                    <Plus className="mr-2 h-4 w-4"/>
                    Add New
                </Button>
            </div>
            <Separator />
            <DataTable searchKey="label" columns={columns} data={data} />
            <Heading title="API" description="Api calls for product color"/>
            <Separator />
            <ApiList entityName="colors" entityIdName="colorId"/>
        </>
    );
}

