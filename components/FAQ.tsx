import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { FAQ } from "@/constants/general"
import { ArrowRight } from "lucide-react"

const FAQComponent = () => {
  return (
    <section className="relative max-container padding-container flex flex-col md:flex-row gap-6 mt-32">
      <div className="w-full md:w-1/3 space-y-4">
        <h3 className="bold-32 md:bold-48 text-orange-base">Frequently Asked Questions</h3>
        <p className="text-lg font-gilroy-semibold text-orange-base pb-3">We have provided answers to some of the questions you might have in mind.</p>
        <Link href="/frequently-asked-questions">
          <Button variant="secondary" size="lg" className='gap-2'>Read more <ArrowRight size={16} /></Button>
        </Link>
      </div>
      <div className="w-full md:w-2/3">
        <Accordion type="single" collapsible className="w-full">
          {FAQ?.slice(0, 3).map((item) =>
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger className="regular-18 md:regular-24 text-orange-base !font-gilroy-semibold text-start">{item.question}</AccordionTrigger>
              <AccordionContent className="text-base text-orange-base font-gilroy-regular">{item.answer}</AccordionContent>
            </AccordionItem>
          )}
        </Accordion>
      </div>
    </section>
  )
}

export default FAQComponent