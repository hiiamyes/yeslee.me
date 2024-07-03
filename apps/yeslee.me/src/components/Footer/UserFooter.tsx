'use client';

import Link from '@/src/components/Link';
import { usePathname } from 'next/navigation';
import { useCurrentLocale } from 'next-i18n-router/client';
import i18nConfig from '@/src/i18nConfig';
import ListCheckIcon from '@/src/components/Icon/ListCheckIcon';
import GearIcon from '@/src/components/Icon/GearIcon';
import ClothIcon from '@/src/components/Icon/ClothIcon';
// import { Button } from '@nextui-org/button';
// import { Tabs, Tab } from '@nextui-org/tabs';
// import PlusIcon from '@/src/components/Icon/PlusIcon';
// import SearchIcon from '@/src/components/Icon/SearchIcon';
// import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from '@nextui-org/modal';
// import { Input } from '@nextui-org/input';

const UserFooter = () => {
  // const { isOpen, onOpen, onOpenChange } = useDisclosure();
  // const { isOpen: isSearchOpen, onOpen: onSearchOpen, onOpenChange: onSearchOpenChange } = useDisclosure();
  const locale = useCurrentLocale(i18nConfig);
  const pathname = usePathname();
  const tabs = [
    // { icon: ClothIcon, text: 'Items', href: `${process.env.NEXT_PUBLIC_WEB_BASE_URL}/items` },
    { icon: ClothIcon, text: 'Items', href: `/${locale}/items` },
    { icon: ListCheckIcon, text: 'Packing Lists', href: `/${locale}/packing-lists` },
    // { icon: PlusIcon, text: 'Add', onClick: onOpen },
    // { icon: SearchIcon, text: 'Search', onClick: onSearchOpen },
    { icon: GearIcon, text: 'Settings', href: `/${locale}/settings` },
  ];

  if (i18nConfig.locales.map((l) => '/' + l).includes(pathname)) return null;
  if (new RegExp(`\/packing-lists\/[^0-9]+$`).test(pathname)) return null;
  if (new RegExp(`\/dive`).test(pathname)) return null;
  if (new RegExp(`\/privacy-policy`).test(pathname)) return null;
  return (
    <footer className="flex sticky bottom-0 p-2 bg-white border-t-1 z-50 max-w-3xl m-auto">
      {tabs.map((tab) => {
        if (tab.href) {
          return (
            <Link
              key={tab.text}
              href={tab.href}
              className={`flex-1 grid justify-items-center gap-1 ${pathname.includes(tab.href) ? 'text-primary' : 'text-foreground'}`}
            >
              <tab.icon size={18} />
              <span className="text-xs">{tab.text}</span>
            </Link>
          );
        } else {
          // return (
          //   <button key={tab.text} onClick={tab.onClick} className="flex-1 grid justify-items-center gap-1">
          //     <tab.icon size={18} />
          //     <span className="text-xs">{tab.text}</span>
          //   </button>
          // );
        }
      })}
    </footer>
  );
};

export default UserFooter;
