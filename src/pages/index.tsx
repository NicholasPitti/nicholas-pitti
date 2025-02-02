import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
//import getConfig from "next/config";
//import nextConfig from "../../next.config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


///import getConfig from 'next/config';???
//nextConfig.basePath

//let path='${basePath}/window.svg'git add *
//const items={link:"${basePath}/images/fiverrLogoT.PNG"}
//const pathEnd=JSON.stringify(nextConfig.basePath)

//pathEnd=pathEnd.replaceAll(/\$\{basePath\}/gi,nextConfig.basePath.toString())

import myImage from './images/fiverrLogoT.png';

const pathEnd=myImage.src
const path=myImage.src

/*
      <Image
            aria-hidden
            src="/images/fiverrLogoT.PNG"
            alt="Window icon"
            width={16}
            height={16}
            unoptimized
          />
      <Image
            aria-hidden
            src="/images/fiverrLogoT.PNG"
            alt="Window icon"
            width={160}
            height={160}
      
          />
                          <Image
            aria-hidden
             src="/images/fiverrLogoT.PNG"
            alt="Window icon"
            width={16}
            height={16}
          />
*/


export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <Image
            aria-hidden
            src={pathEnd}
            alt="Window icon"
            width={16}
            height={16}
            unoptimized
          />
                <Image
            aria-hidden
            src={pathEnd}
            alt="Window icon"
            width={16}
            height={16}
            
          />


<Image
            aria-hidden
            src={path}
            alt="Window icon"
            width={16}
            height={16}
            unoptimized
          />
                <Image
            aria-hidden
            src={path}
            alt="Window icon"
            width={16}
            height={16}
            
          />

<Image
            aria-hidden
            src='./images/fiverrLogoT.png'
            alt="Window icon"
            width={16}
            height={16}
            unoptimized
          />
                <Image
            aria-hidden
            src='./images/fiverrLogoT.png'
            alt="Window icon"
            width={16}
            height={16}
            
          />

<Image
            aria-hidden
            src='./images/fiverrLogoT.png'
            alt="Window icon"
            width={16}
            height={16}
            unoptimized
          />
                <Image
            aria-hidden
            src='./images/fiverrLogoT.png'
            alt="Window icon"
            width={16}
            height={16}
            
          />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              src/pages/index.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="//vercel.SVG"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="./fiverrLogo.PNG"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="./fiverrLogo.png"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
