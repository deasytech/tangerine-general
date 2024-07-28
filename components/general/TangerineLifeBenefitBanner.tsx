import Image from 'next/image'

const TangerineLifeBenefitBanner = () => {
  return (
    <section className="max-container padding-container mt-10 md:my-32">
      <div className="bg-orange-50 flex gap-8 px-12 py-20 rounded-2xl relative">
        <div className="w-full lg:w-1/2 space-y-4">
          <h3 className="bold-32 md:bold-48 text-orange-700">Who benefits when you buy Tangerine Insurance?</h3>
          <p className="regular-18 text-generic-800">Despite unforeseen circumstances, be sure of the right cover for you, your loved ones and all that is valuable to you. With the right plan, ease the effect of loss or damage to your possessions.</p>
        </div>
        <Image
          src="/images/general/home-benefit-img.png"
          alt="benefit"
          width={571} height={583}
          className="absolute -top-28 right-20 max-md:hidden lg:flex"
        />
      </div>
    </section>
  )
}

export default TangerineLifeBenefitBanner