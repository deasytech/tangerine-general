import ImageGallery from '@/components/general/ImageGallery'
import { CSR_PHOTOS } from '@/constants/general'
import Image from 'next/image'
import Link from 'next/link'

const CSRPage = () => {
  return (
    <>
      <section className="relative max-container padding-container flex flex-col gap-12 md:flex-row items-center w-full mt-24 md:mt-44">
        <div className="w-full space-y-3 md:w-1/2">
          <h1 className="bold-32 md:bold-56 text-orange-base">Corporate Social Responsibility</h1>
          <p className="regular-18 text-generic-950 !leading-[145%]">We are committed to making a positive impact on the Health and well-being of our community. As a responsible HMO, we understand the importance of Corporate Social Responsibility (CSR) in contributing to a healthier and happier society. Our CSR initiatives are designed to address critical health-related issues, promote wellness, and create a lasting positive impact on the communities we serve.</p>
        </div>
        <div className="w-full md:w-1/2">
          <Image src="/images/general/csr-banner.png" alt="csr" width={589} height={393} className="w-full object-contain" />
        </div>
      </section>

      {CSR_PHOTOS.map((csr, key) =>
        <section key={key} className="relative max-container padding-container mt-32 space-y-3">
          <div className="w-full space-y-2 max-w-xl">
            <p className="regular-14 text-generic-950 uppercase">{csr.subTitle}</p>
            <h3 className="bold-40 text-orange-base font-gilroy-semibold">{csr.title}</h3>
          </div>
          <ImageGallery images={csr.photos} />
        </section>
      )}
    </>
  )
}

export default CSRPage