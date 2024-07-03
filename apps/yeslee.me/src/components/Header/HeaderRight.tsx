import { memo, useEffect } from 'react';
// import { useTranslation } from 'react-i18next';
import useSWR from 'swr';
import axios from 'axios';
import { useShallow } from 'zustand/react/shallow';
import Link from '@/src/components/Link';
import { Avatar } from '@nextui-org/avatar';
import { usePathname } from 'next/navigation';
import useUserStore from '@/src/components/Header/useUserStore';
import SignInButtonAndModal from './SignInButtonAndModal';

const fetcher = async ({ url, token }: { url: string; token: string }) => {
  if (!token) return;
  const {
    data: { user },
  } = await axios.request({
    headers: { Authorization: localStorage.getItem('token') },
    method: 'get',
    url,
  });
  return user;
};

const HeaderRight = ({ locale }: { locale: string }) => {
  let token = null;
  if (typeof window !== 'undefined') {
    token = new URLSearchParams(window.location.search).get('token') || localStorage.getItem('token');
  }
  const { data: user, isLoading } = useSWR({ url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/user`, token }, fetcher);
  const { setUser } = useUserStore(
    useShallow((state) => ({
      setUser: state.setUser,
    })),
  );
  useEffect(() => {
    setUser({ user, isLoading });
  }, [user, isLoading, setUser]);

  const pathname = usePathname();
  // const { t } = useTranslation();
  // const laguageSelectOptions = JSON.parse(t('language-select.options')) as [
  //   {
  //     locale: string;
  //     text: string;
  //   },
  // ];
  const laguageSelectOptions =
    locale === 'en'
      ? [
          { text: 'Chinese', locale: 'zh-TW' },
          { text: 'English', locale: 'en' },
        ]
      : [
          { text: '中文', locale: 'zh-TW' },
          { text: '英文', locale: 'en' },
        ];

  const isLogin = typeof window !== 'undefined' && !!localStorage.getItem('token');
  return (
    <div className="flex gap-2 items-center">
      {!isLoading && isLogin && <Avatar src={user?.google_picture} />}
      {!isLoading && !isLogin && <SignInButtonAndModal locale={locale} />}
      {laguageSelectOptions.map((option) => {
        return (
          <Link
            className={`${locale === option.locale ? 'underline' : ''} underline-offset-4 text-sm`}
            key={option.locale}
            href={`/${option.locale}${pathname.replace(`/${locale}`, '')}`}
          >
            {option.text}
          </Link>
        );
      })}
    </div>
  );
};

export default memo(HeaderRight);
