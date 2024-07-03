'use client';

import NextLink from 'next/link';

type Props = {
  className?: string;
  href: string;
  children?: React.ReactNode;
  target?: '_blank';
};

const Link = (props: Props) => {
  const { className, href, children, target = '_self' } = props;
  return (
    <NextLink className={className + ' active:underline md:hover:underline'} href={href} target={target}>
      {children}
    </NextLink>
  );
};

export default Link;
