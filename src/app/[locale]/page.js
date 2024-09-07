"use client"
import { Select } from "antd";
import { useLocale, useTranslations } from 'next-intl';
import { useRouter } from "next/navigation";
import { useTransition } from "react";


export default function Home() {
  const t = useTranslations('HomePage');
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();


  const handleChange = (value) => {
    startTransition(() => {
      router.replace(`/${value}`)
    })


  };

  return (
    <div className=" container mx-auto py-8">
      <div className=" mx-4 md:mx-0 float-end h-[10vh]">
        <Select
          defaultValue={localActive}
          style={{ width: 120 }}
          disabled={isPending}
          onChange={handleChange}
          options={[
            { value: 'en', label: 'English' },
            { value: 'bn', label: 'Bangla' },
          ]}
        />

      </div>
      <div className=" w-full h-[65vh] flex items-center justify-center">

        <div className=" mx-4 md:mx-0 w-auto md:w-[60vw]">
          <h1 className=" mb-10 text-5xl md:text-7xl lg:text-9xl font-bold">{t('country')}</h1>
          <p className=" text-lg md:text-2xl">{t('about')}</p>
        </div>
      </div>
    </div>
  );
}
