import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface Props {
  link: string;
  title: string;
  text: string;
  textTheme?: string;
}

const PlansCard = ({ link, title, text, textTheme }: Props) => {
  return (
    <div className="relative full px-8 py-6 bg-white rounded-lg flex flex-col justify-between border">
      <div className="flex-col justify-start items-start gap-2 flex mb-6 pt-8">
        <h3 className={cn("regular-24 md:regular-32 text-orange-base", textTheme)}>{title}</h3>
        <div className="regular-16" dangerouslySetInnerHTML={{ __html: text }} />
      </div>
      <Link href={link} className="self-end">
        <Button variant="secondary" size="lg" className="gap-2">
          View details
          <ArrowRight size={18} />
        </Button>
      </Link>
    </div>
  )
}

export default PlansCard