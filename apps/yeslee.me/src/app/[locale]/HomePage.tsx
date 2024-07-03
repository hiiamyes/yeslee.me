'use client';

import SocialMedias from './SocialMedias';
import { Image } from '@nextui-org/image';

type Props = {
  params: { locale: string };
};

const HomePage = (props: Props) => {
  console.log(props);
  // const { locale } = params;

  return (
    <div className="p-4 grid gap-4 max-w-3xl m-auto">
      <Image
        className="w-52 border-4 border-gray-200 rounded-full"
        src="https://res.cloudinary.com/dsxispofm/image/upload/f_auto,q_auto,h_400/profile.jpg"
        alt="avatar"
      />
      <h1 className="text-4xl">Tsung-Yeh (Yes) Lee</h1>
      <p>Frontend Engineer | Outdoor Activity Enthusiast</p>
      <p>
        <a className="underline" href="https://paaaack.com" target="_blank" rel="noopener noreferrer">
          Paaaack
        </a>
        <span>: A website designed for tracking gear and optimizing packing efficiency.</span>
      </p>
      <p>
        <a className="underline" href="https://hiiiike.yeslee.me" target="_blank" rel="noopener noreferrer">
          Hiiiike
        </a>
        <span>: A website designed for hikers to plan hiking itineraries in Taiwan.</span>
      </p>
      <p>
        <a className="underline" href="https://frontend-cookbook.yeslee.me" target="_blank" rel="noopener noreferrer">
          Frontend Cookbook
        </a>
        <span>: A frontend UI components cookbook powered by React and Storybook.</span>
      </p>
      <SocialMedias />
      {/* <Divider className="py-4" label="Snowboarding" />
      <div className="text-xl">Niseko Moiwa</div>
      <NuxtImg
        provider="cloudinary"
        className="rounded-lg w-screen md:w-[768px]"
        placeholder
        sizes="100vw md:768px"
        src="/v1715342485/yeslee-me/niseko-moiwa_pseepn.jpg"
      />
      <Divider className="py-4" label="Hiking" />
      <div className="text-xl">Jiaming Lake National Trail</div>
      <NuxtImg
        provider="cloudinary"
        className="rounded-lg w-screen md:w-[768px]"
        placeholder
        sizes="100vw md:768px"
        src="/v1715339525/yeslee-me/jaming-lake_yhxwtl.jpg"
      />
      <Divider className="py-4" label="Diving" />
      <div className="text-xl">Sipadan</div> */}
      {/* <NuxtImg
    provider="cloudinary"
    className="rounded-lg w-screen md:w-[768px]"
    placeholder
    sizes="100vw md:768px"
    src="/v1715342445/yeslee-me/sipadan_vb0fog.jpg"
    /> */}
    </div>
  );
};

export default HomePage;
