/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.scss'
import { useTranslation } from '@/i18n'
import { languages } from '@/i18n/settings';
import { notFound } from 'next/navigation';
import { dir } from 'i18next'


const inter = Inter({ subsets: ['latin'] })

type Props = {
  children: React.ReactNode;
  params: { lang: string };
};

export const generateMetadata = async ({
  params: { lang },
}: Props): Promise<Metadata> => {
  const { t } = await useTranslation(lang, 'layout');

  return {
    title:
      'Umbrellaz',
    description: 'Generated by create next app',
  };
}

export default function RootLayout({
  children,
  params: { lang },
}: Props) {
  if (!languages.includes(lang)) {
    notFound();
  }

  return (
    <html lang={lang} dir={dir(lang)}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
