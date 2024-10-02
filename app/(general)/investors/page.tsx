import KeyFigures from '@/components/KeyFigures'
import SubsidaryImage from '@/components/SubsidiaryImage'
import { Button } from '@/components/ui/button'
import { PRESS } from '@/constants/general'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const InvestorsPage = () => {
  return (
    <>
      <section className="relative max-container padding-container mt-24">
        <div className="h-[693px] bg-cover bg-center" style={{
          backgroundImage: "url('/images/investor-hero.svg')",
          borderRadius: '32px',
          overflow: 'hidden',
        }}>
          <div className="px-6 h-full flex flex-col gap-3 justify-center items-start w-full max-w-xl">
            <h1 className="bold-56 items-center text-white">
              Investor Relations
            </h1>
            <p className="regular-18 text-white">Tangerine is a leading financial services platform that consistently goes the extra mile to improve individuals' and businesses' financial security <br />Our reliable financial service products create and protect wealth, guaranteeing an enjoyable future.</p>
          </div>
        </div>
      </section>

      <section className="relative max-container padding-container mt-20">
        <div className="w-full min-h-[372px] flex justify-start items-center bg-orange-50 rounded-2xl relative overflow-hidden">
          <div
            className="absolute inset-0 hidden md:block"
            style={{
              backgroundImage: "url('/images/investor-img.svg')",
              backgroundPosition: "bottom right",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              marginRight: "80px",
            }}
          />
          <div className="h-full flex-col justify-center items-center md:items-start md:pl-20 gap-6 flex w-full md:w-1/2 relative z-10">
            <h3 className="bold-32 md:bold-48 text-blue-950">Company profile</h3>
            <p className="regular-18 text-generic-800 text-center px-6 md:px-0 md:text-start">
              Tangerine is a leading financial services platform that consistently goes the extra mile to improve individuals' and businesses' financial security. <br />Our reliable financial service products create and protect wealth, guaranteeing an enjoyable future.
            </p>
          </div>
        </div>
      </section>

      <section className="relative max-container padding-container mt-20">
        <div className="mb-14 flex flex-col gap-4">
          <h2 className="bold-40 text-orange-base">
            Key Figures
          </h2>
          <p className="regular-18 text-generic-800">Tangerine Annual report 2023</p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          <KeyFigures
            price="9.18B"
            linkHref="/"
            image="/icons/lighting-bolt.svg"
            text="Gross written premium"
          />
          <KeyFigures
            price="3.63B"
            linkHref="/"
            image="/icons/lighting-bolt.svg"
            text="Profit before tax"
          />
          <KeyFigures
            price="16.30B"
            linkHref="/"
            image="/icons/lighting-bolt.svg"
            text="Shareholders' funds"
          />
        </div>
      </section>

      <section className="relative max-container padding-container mt-32">
        <div className="w-full min-h-[372px] flex justify-start items-center bg-orange-base rounded-3xl" style={{
          backgroundImage: "url('/images/annual-report.svg')",
          backgroundPosition: "bottom right",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}>
          <div className="h-full flex-col justify-center items-center md:items-start md:pl-20 gap-4 flex w-full md:w-1/2">
            <p className="regular-18 text-white">Financial strategy</p>
            <h3 className="bold-32 md:bold-48 text-white">2023 Annual Report</h3>
            <p className="regular-18 text-white">
              Access the Tangerine's earnings-related financial information: the 1Q and 9M activity indicators but also the half-year and annual results
            </p>
            <Link href="/TGIL_2023_FCR_Non-Life_Report_-_Abridged_Version.pdf" target="_blank" className="w-fit px-8 py-3 bg-white rounded-lg justify-center items-center gap-3 inline-flex">
              <p className="text-center text-orange-base text-base font-normal font-gilroy-semibold">Read report</p>
              <ArrowRight className="text-orange-base" />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative max-container padding-container mt-24 flex flex-col gap-4">
        <h3 className="bold-40 text-blue-950">Annual Financial Reports</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-10 max-w-full gap-6">
          <SubsidaryImage
            image="/images/general/report1.png"
            hoverImage="/images/general/report1.png"
            name="2023 Financial Condition Report"
            subName="Download file"
            link="/TGIL_2023_FCR_Non-Life_Report_-_Abridged_Version.pdf"
          />
          <SubsidaryImage
            image="/images/general/report2.png"
            hoverImage="/images/general/report2.png"
            name="2023 Financial Summary Report"
            subName="Download file"
            link="/TG_AFS_2023_publication_124229.pdf"
          />
        </div>
      </section>
    </>
  )
}

export default InvestorsPage