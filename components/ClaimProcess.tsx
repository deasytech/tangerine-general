import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CLAIM_PROCESS } from "@/constants/general"
import CoreValue from "@/components/CoreValue"

const ClaimProcess = () => {
  return (
    <section className="relative max-container padding-container mt-32">
      <div className="w-full md:w-1/4 space-y-4">
        <h5 className="regular-14 text-orange-base uppercase">how to make a claim</h5>
        <h3 className="bold-32 md:bold-48 text-orange-base">Claims Process</h3>
        <p className="regular-16 text-generic-700 pb-4">Making a claim is easy with us. Just follow these simple steps to get the support you need:</p>
        <Link href="/make-claim">
          <Button variant="secondary" size="lg">Make a Claim</Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-20">
        {CLAIM_PROCESS.map((claim) =>
          <CoreValue
            key={claim.title}
            icon={claim.icon}
            title={claim.title}
            text={claim.text}
          />
        )}
      </div>
    </section>
  )
}

export default ClaimProcess