import { Image } from '@nextui-org/image';
import Link from '@/src/components/Link';
import EmailIcon from '@/src/components/Icon/EmailIcon';
import FacebookIcon from '@/src/components/Icon/FacebookIcon';

interface Props {
  locale: string;
}

const VersionFooter = ({ locale }: Props) => {
  return (
    <footer className="justify-center gap-2 p-4 max-w-3xl m-auto items-center">
      <p className="text-sm">{`© 2024 Paaaack. ${locale === 'en' ? 'All rights reserved.' : '保留一切權利。'} | v${process.env.NEXT_PUBLIC_VERSION}`}</p>
      <div className="flex items-center gap-2">
        <Link className="text-sm underline" href={`/${locale}/privacy-policy`} target="_blank">
          {locale === 'en' ? 'Privacy Policy' : '隱私權'}
        </Link>
        <Link href="mailto:hiiamyes.contact@gmail.com" target="_blank">
          <EmailIcon />
        </Link>
        <Link href="https://www.facebook.com/hiiiike.life" target="_blank">
          <FacebookIcon />
        </Link>
        <Link
          href="https://www.producthunt.com/posts/paaaack?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-paaaack"
          target="_blank"
        >
          <Image
            className="h-8"
            radius="none"
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=460936&theme=light"
            alt="Items Page"
          />
        </Link>
      </div>
    </footer>
  );
};

export default VersionFooter;
