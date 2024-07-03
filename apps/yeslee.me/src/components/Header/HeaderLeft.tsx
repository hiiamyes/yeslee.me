import { memo } from 'react';
import Link from '@/src/components/Link';

const HeaderLeft = ({ locale, showSlogan = true }: { locale: string; showSlogan?: boolean }) => {
  let token = null;
  if (typeof window !== 'undefined') {
    token = new URLSearchParams(window.location.search).get('token') || localStorage.getItem('token');
  }
  return (
    <div className="flex items-center gap-2">
      <Link className="text-primary font-bold" href={token ? `/${locale}/packing-lists` : '/'}>
        Paaaack
      </Link>
      {/* <Link className="font-bold" href={`/packing-lists`}>
        Paaaack
      </Link> */}
      {showSlogan && <div className="text-xs">{locale === 'en' ? 'Pack Well, Travel Happy!' : '好好打包 快樂旅行！'}</div>}
    </div>
  );
};

export default memo(HeaderLeft);
