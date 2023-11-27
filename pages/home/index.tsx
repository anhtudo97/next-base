
'use client'

/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useMemo, useState } from "react";
import { DataTable } from "@/components/Table";
import { columns } from "@/components/Table/columns";
import { Payment } from "@/utils/types";
import { getHours, getMinutes, format } from 'date-fns'
import { useTranslationClient } from "@/i18n/client";

async function getData(): Promise<Payment[]> {
    // Fetch data from your API here.
    return [
        {
            id: "728ed52f",
            amount: 100,
            status: "pending",
            email: "m@example.com",
        },
        // ...
    ]
}

const HomePage = () => {
    const { t, i18n: { language } } = useTranslationClient();
    const [data, setData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const data = await getData()
            setData(data)
        }

        fetchData()
    }, [])

    const lastUpdated = useMemo(() => {
        const now = new Date();
        const hours = getHours(now)
        const minutes = getMinutes(now)
        return language === 'vi'
            ? `${hours}:${Math.floor(minutes / 10)}0 ngày ${format(now, 'dd.MM.yyyy')}`
            : `${format(now, 'yyyy-MM-dd')} ${hours}:${Math.floor(minutes / 10)}0`
    }, [language])

    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns()} data={data} />

            <section className="text-xs sm:text-sm mt-4">
                {t('common:update_rule', {
                    date: lastUpdated,
                })}
            </section>
        </div>
    )
}

export default HomePage