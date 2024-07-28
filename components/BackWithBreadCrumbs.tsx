"use client"

import { ArrowLeftIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import Link from "next/link"

interface Props {
  page: string;
  more?: { label: string, link: string };
  textTheme?: string;
}

const BackWithBreadCrumbs = ({ page, more, textTheme }: Props) => {
  const router = useRouter();

  return (
    <div className="flex items-center gap-2 mb-8">
      <Button onClick={router.back} variant="link" size="icon" className="p-0">
        <ArrowLeftIcon size={18} className="text-gray-500" />
      </Button>
      <p className="text-gray-400 regular-14">Back</p>
      <p className="text-gray-400 regular-14 text-nowrap">Plans / </p>
      {more && <Link href={more.link} className="text-gray-400 text-nowrap regular-14 hover:text-orange-base">{more?.label} / </Link>}
      <p className={cn("text-orange-base regular-14 text-nowrap", textTheme)}>{page}</p>
    </div>
  )
}

export default BackWithBreadCrumbs