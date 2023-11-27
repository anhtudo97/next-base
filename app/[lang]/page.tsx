/* eslint-disable react-hooks/rules-of-hooks */
import { Metadata } from "next";
import { useTranslation } from "@/i18n";
import { BASE_URL } from "@/utils/constant";
import HomePage from "@/pages/home";

type Props = {
  params: { lang: string };
};

export const generateMetadata = async ({
  params: { lang },
}: Props): Promise<Metadata> => {
  const { t } = await useTranslation(lang, 'homepage');

  return {
    // title: t("title"),
    description: t('description'),
    alternates: {
      canonical: `${BASE_URL}/${lang}`,
      languages: {
        en: '/en',
        vi: '/vi',
      },
    },
  };
};

const Home = ({ lang }: Props) => {

  return (
    <HomePage lang={lang} />
  )
}

export default Home