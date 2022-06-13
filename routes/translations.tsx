// Copyright 2022 the Deno authors. All rights reserved. MIT license.

/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h, Head } from "$fresh/runtime.ts";
import { tw } from "twind";
import { Footer } from "@/components/Footer.tsx";
import { Header } from "@/components/Header.tsx";
import * as Icons from "@/components/Icons.tsx";

import translations from "@/translations.json" assert { type: "json" };

const TRANSLATIONS: Translation[] = translations.sort((a, b) =>
  a.language < b.language ? -1 : 1
);

interface Translation {
  language: string;
  english: string;
  link: string;
  repository: string;
}

export default function TranslationsPage() {
  return (
    <>
      <Head>
        <title>翻译 | Deno</title>
      </Head>
      <Header />
      <div class={tw`max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 mt-8 mb-24`}>
        <div class={tw`max-w-screen-lg mx-auto`}>
          <h4 class={tw`text-4xl font-bold tracking-tight`}>翻译</h4>
          <p class={tw`mt-4 text-lg`}>
            Deno 文档提供以下语言版本。
          </p>
          <p class={tw`mt-4 text-lg`}>
            免责声明：这些页面由第三方贡献者维护，而不是由 Deno 维护。它们可能包含过时的信息。
          </p>
          <p class={tw`mt-4 text-lg`}>
            弃用通知：我们不再接受新的翻译。
          </p>
        </div>
        <div
          class={tw
            `my-16 flex flex-row flex-wrap gap-16 justify-evenly items-end`}
        >
          {TRANSLATIONS.map((language, i) => (
            <LanguageItem key={i} language={language} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

function LanguageItem({ language }: { language: Translation }) {
  return (
    <div class={tw`p-2 mx-20 mb-5`}>
      <span class={tw`text-gray-600 leading-tight flex justify-center`}>
        {language.english}
      </span>
      <div class={tw`mt-3 text-xl font-semibold text-center`}>
        <a href={language.link} class={tw`hover:text-gray-700 hover:underline`}>
          {language.language}
        </a>
      </div>
      <div class={tw`flex justify-center mt-3`}>
        <a
          href={language.repository}
          class={tw`text-gray-500 hover:text-gray-700`}
        >
          <span class={tw`sr-only`}>GitHub</span>
          <Icons.GitHub />
        </a>
      </div>
    </div>
  );
}
