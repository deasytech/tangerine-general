import Link from 'next/link'
import Image from 'next/image'
import BackWithBreadCrumbs from '@/components/BackWithBreadCrumbs'
import { Button } from '@/components/ui/button'
import MoreLinks from '@/components/general/MoreLinks'
import { ArrowRight, PlusCircle } from 'lucide-react'
import FAQComponent from '@/components/FAQ'

const Page = () => {
  return (
    <>
      <section className="relative max-container padding-container flex flex-col gap-12 md:flex-row items-start w-full mt-32 md:mt-36">
        <div className="w-full space-y-3 flex-[2]">
          <BackWithBreadCrumbs page="Agric Insurance" />
          <h1 className="bold-32 md:bold-56 text-orange-900">Agric Insurance</h1>
          <p className="regular-18 text-generic-950 !leading-[145%]">We understand that every farm is different, with its own set of challenges and opportunities. That's why we offer customized insurance solutions that are tailored to meet your specific needs and circumstances. Whether you're a small-scale organic farm or a large-scale commercial operation, our experienced agents will work with you to design a policy that fits your requirements and budget.</p>
          <Link href="/get-quote">
            <Button variant="secondary" size="lg" className="mt-4">Get a Quote</Button>
          </Link>
        </div>
        <div className="w-full flex-[3]">
          <Image src="/images/general/agric-banner.png" alt="Agric Insurance" width={696} height={364} className="w-full object-contain" />
        </div>
      </section>

      <section className="relative max-container padding-container mt-20">
        <div className="bg-orange-50 flex gap-6 w-full items-start p-8 rounded-2xl">
          <Image src="/icons/tht/spark.svg" alt="Wellness" width={48} height={48} className="hidden md:flex" />
          <div className="regular-20 text-white space-y-4">
            <h5 className="text-orange-800 bold-32">Comprehensive agric insurance </h5>
            <p className="text-generic-950">offering comprehensive coverage to protect your crops, livestock, and farm assets, so you can focus on what you do best: feeding the world.</p>
          </div>
        </div>
      </section>

      <section className="relative max-container padding-container mt-24">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full px-8 py-6 bg-white rounded-xl flex flex-col justify-between border">
            <div className="flex-col justify-start items-start gap-2 flex my-8">
              <h3 className="regular-32 text-orange-base">Poultry Insurance</h3>
              <div className="regular-16 leading-4 text-generic-950" dangerouslySetInnerHTML={{ __html: "Poultry farm insurance is a type of insurance coverage designed specifically for farmers who raise chickens, turkeys, or other poultry. We provide financial protection against losses caused by events such as disease outbreaks, natural disasters, theft, and other unexpected events to the poultry, as well as protection for the building and equipment of the farm." }} />
            </div>
            <div className="flex items-center justify-between gap-4">
              <Link href="/">
                <Button variant="outline" className="w-fit gap-2 rounded-full">
                  <PlusCircle size={18} />
                  Add to compare
                </Button>
              </Link>
              <Link href="/corporate-plans/agric-insurance/poultry-insurance">
                <Button variant="secondary" className="w-fit gap-2">
                  View details
                  <ArrowRight size={18} />
                </Button>
              </Link>
            </div>
          </div>
          <div className="w-full px-8 py-6 bg-white rounded-xl flex flex-col justify-between border">
            <div className="flex-col justify-start items-start gap-2 flex my-8">
              <h3 className="regular-32 text-orange-base">Area Yield Index Insurance</h3>
              <div className="regular-16 leading-4 text-generic-950" dangerouslySetInnerHTML={{ __html: "Area-yield index insurance is a type of agriculture insurance that protects farmers against natural disasters and biological perils that affect crop yields. The insurance is based on the average yield of an area, such as a local government, or state." }} />
            </div>
            <div className="flex items-center justify-between gap-4">
              <Link href="/">
                <Button variant="outline" className="w-fit gap-2 rounded-full">
                  <PlusCircle size={18} />
                  Add to compare
                </Button>
              </Link>
              <Link href="/corporate-plans/agric-insurance/area-yield-index-insurance">
                <Button variant="secondary" className="w-fit gap-2">
                  View details
                  <ArrowRight size={18} />
                </Button>
              </Link>
            </div>
          </div>
          <div className="w-full px-8 py-6 bg-white rounded-xl flex flex-col justify-between border">
            <div className="flex-col justify-start items-start gap-2 flex my-8">
              <h3 className="regular-32 text-orange-base">Multi-Perils Crop Insurance</h3>
              <div className="regular-16 leading-4 text-generic-950" dangerouslySetInnerHTML={{ __html: "Multi-peril crop insurance protects the farmers from losses in crop production, including lower yields, caused by natural calamities or events like disease (pest and insect damage), drought, flooding, fire, or destructive weather." }} />
            </div>
            <div className="flex items-center justify-between gap-4">
              <Link href="/">
                <Button variant="outline" className="w-fit gap-2 rounded-full">
                  <PlusCircle size={18} />
                  Add to compare
                </Button>
              </Link>
              <Link href="/corporate-plans/agric-insurance/multi-perils-crop-insurance">
                <Button variant="secondary" className="w-fit gap-2">
                  View details
                  <ArrowRight size={18} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <MoreLinks />

      <FAQComponent />
    </>
  )
}

export default Page