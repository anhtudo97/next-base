/* eslint-disable react-hooks/rules-of-hooks */
"use client"

import { useTranslationClient } from "@/i18n/client";
import { Payment } from "@/utils/types"
import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<Payment>[] = () => {
  const { t, i18n: { language } } = useTranslationClient();

  return [
    {
      accessorKey: "status",
      header: t('common:status'),
    },
    {
      accessorKey: "email",
      header: t('common:email'),
    },
    {
      accessorKey: "amount",
      header: t('common:amount'),
    },
  ]
}
