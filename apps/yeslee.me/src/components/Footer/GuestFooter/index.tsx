import { ReactNode } from 'react';
import RecommendedPackingLists from '@/src/components/Footer/GuestFooter/RecommendedPackingLists';
import Link from '@/src/components/Link';

type Props = {
  locale: string;
  slug?: string;
};

const Footer = ({ locale, slug }: Props): ReactNode => {
  return (
    <footer className="my-8 grid gap-8">
      <RecommendedPackingLists locale={locale} slug={slug} />
      {locale === 'en' ? (
        <Link href={`/en/yeeeees/dives`} className={`text-sm font-bold`}>
          Paaaack | Dives
        </Link>
      ) : null}
    </footer>
  );
};

export default Footer;
