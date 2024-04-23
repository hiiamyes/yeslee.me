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
  <div class="p-4 grid gap-4">
    <img
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
  </div>
</template>
