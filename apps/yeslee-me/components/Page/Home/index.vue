<script setup lang="ts">
useSeoMeta({
  title: "Yes Lee",
  ogTitle: "Yes (Tsung Yeh) Lee",
  description: "Frontend Engineer | Outdoor Activity Enthusiast",
  ogDescription: "Frontend Engineer | Outdoor Activity Enthusiast",
  ogImage:
    "https://res.cloudinary.com/dsxispofm/image/upload/h_360,w_360/profile.jpg",
});
</script>

<template>
  <div class="p-4 grid gap-4 max-w-3xl m-auto">
    <NuxtImg
      preload
      class="w-52 border-4 border-gray-200 rounded-full"
      src="https://res.cloudinary.com/dsxispofm/image/upload/h_360,w_360/profile.jpg"
      alt="avatar"
    />
    <h1 class="text-4xl">Yes (Tsung Yeh) Lee</h1>
    <p>Frontend Engineer | Outdoor Activity Enthusiast</p>
    <p>
      <a
        class="underline"
        href="https://paaaack.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Paaaack
      </a>
      <span
        >: A website designed for tracking gear and optimizing packing
        efficiency.</span
      >
    </p>
    <p>
      <a
        class="underline"
        href="https://hiiiike.yeslee.me"
        target="_blank"
        rel="noopener noreferrer"
      >
        Hiiiike
      </a>
      <span
        >: A website designed for hikers to plan hiking itineraries in
        Taiwan.</span
      >
    </p>
    <p>
      <a
        class="underline"
        href="https://frontend-cookbook.yeslee.me"
        target="_blank"
        rel="noopener noreferrer"
      >
        Frontend Cookbook
      </a>
      <span
        >: A frontend UI components cookbook powered by React and
        Storybook.</span
      >
    </p>
    <PageHomeSocialMedias />
    <UDivider class="py-4" label="Snowboarding" />
    <div class="text-xl">Niseko Moiwa</div>
    <NuxtImg
      provider="cloudinary"
      class="rounded-lg w-screen md:w-[768px]"
      placeholder
      sizes="100vw md:768px"
      src="/v1715342485/yeslee-me/niseko-moiwa_pseepn.jpg"
    />
    <UDivider class="py-4" label="Hiking" />
    <div class="text-xl">Jiaming Lake National Trail</div>
    <NuxtImg
      provider="cloudinary"
      class="rounded-lg w-screen md:w-[768px]"
      placeholder
      sizes="100vw md:768px"
      src="/v1715339525/yeslee-me/jaming-lake_yhxwtl.jpg"
    />
    <UDivider class="py-4" label="Diving" />
    <div class="text-xl">Sipadan</div>
    <NuxtImg
      provider="cloudinary"
      class="rounded-lg w-screen md:w-[768px]"
      placeholder
      sizes="100vw md:768px"
      src="/v1715342445/yeslee-me/sipadan_vb0fog.jpg"
    />
  </div>
</template>
