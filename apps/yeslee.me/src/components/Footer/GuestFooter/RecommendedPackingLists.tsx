import Link from '@/src/components/Link';
import { packs } from '@/src/libs/db';
import { ReactNode } from 'react';

type Props = {
  locale: string;
  slug?: string;
  fontSize?: string;
};

const RecommendedPackingLists = ({ locale, slug, fontSize = 'sm' }: Props): ReactNode => {
  return (
    <div className="grid">
      <span className={`text-${fontSize} font-bold`}>{locale === 'en' ? 'Packing lists you may be interested in' : '你可能會有興趣的行李清單'}</span>
      <ul className="grid">
        {packs
          .filter((pack) => pack.slug !== slug)
          .map((pack) => {
            return (
              <li key={pack.slug}>
                <Link href={`/${locale}/packing-lists/${pack.slug}`} className={`text-${fontSize}`}>
                  {locale === 'en' ? pack.title : pack.titleZh}
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default RecommendedPackingLists;
