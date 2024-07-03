import type { Metadata } from 'next';
import type { Viewport } from 'next';
import { GoogleTagManager } from '@next/third-parties/google';
import otaClient from '@crowdin/ota-client';
import TProvider from '@/src/libs/i18n/I18nProvider';
import './globals.css';
import 'leaflet/dist/leaflet.css';
import NextUIProvider from '@/src/libs/nextui/NextUIProvider';
import UserFooter from '@/src/components/Footer/UserFooter';

export const viewport: Viewport = {
  maximumScale: 1,
  userScalable: false,
};

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = params;
  const title = locale === 'en' ? 'Yes Lee' : 'Yes Lee';
  const description = locale === 'en' ? 'Frontend Engineer | Outdoor Activity Enthusiast' : 'Frontend Engineer | Outdoor Activity Enthusiast';
  const url = `https://yeslee.com/${locale}`;
  return {
    title,
    description,
    openGraph: {
      // https://nextjs.org/docs/app/api-reference/functions/generate-metadata#opengraph
      title,
      description,
      url,
      siteName: 'Yes Lee',
      images: [
        {
          url: 'https://res.cloudinary.com/dsxispofm/image/upload/f_auto,q_auto,w_1200/v1715339525/yeslee-me/jaming-lake_yhxwtl.jpg',
          width: 1200,
          height: 630,
        },
      ],
      locale,
      type: 'website',
    },
    alternates: {
      canonical: url,
      languages: {
        en: 'https://yeslee.me/en',
        'zh-TW': 'https://yeslee.me/zh-TW',
      },
    },
  };
}

const RootLayout = async ({
  params,
  children,
}: Readonly<{
  params: { locale: string };
  children: React.ReactNode;
}>) => {
  const { locale } = params;
  const client = new otaClient('4f7a27c60f58f66e9423439fg83');
  const crowdinStrings = await client.getStrings();
  const isDark = false;
  return (
    <html lang="en" className={`${isDark ? 'dark' : ''}`}>
      {process.env.NEXT_PUBLIC_GTM_ID && <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />}
      <body>
        <NextUIProvider>
          <TProvider locale={locale} crowdinStrings={crowdinStrings}>
            {children}
          </TProvider>
          <UserFooter />
        </NextUIProvider>
      </body>
    </html>
  );
};

export default RootLayout;
