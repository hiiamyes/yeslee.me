<script setup>
const socilaMedias = [
  {
    href: "https://www.instagram.com/yeeeees.lee/",
    img: "https://res.cloudinary.com/dsxispofm/image/upload/v1713779246/icons/instagram_ykmcgg.svg",
  },
  {
    href: "https://www.facebook.com/profile.php?id=100000254874042",
    img: "https://res.cloudinary.com/dsxispofm/image/upload/v1713779244/icons/facebook_gp2zt2.svg",
  },
  {
    href: "https://www.linkedin.com/in/tsung-yeh-lee/",
    img: "https://res.cloudinary.com/dsxispofm/image/upload/v1713779248/icons/linkedin_cf9wjs.svg",
  },
  {
    href: "https://github.com/hiiamyes",
    img: "https://res.cloudinary.com/dsxispofm/image/upload/v1713779246/icons/github_eokz2j.svg",
  },
  {
    href: "https://medium.com/@yeeeeees",
    img: "https://res.cloudinary.com/dsxispofm/image/upload/v1713778877/icons/medium_mojppm.svg",
  },
  {
    href: "https://www.youtube.com/playlist?list=PL0hFmSBG9QBEaBbQNdjdXoj3mo0TXJeZ9",
    img: "https://res.cloudinary.com/dsxispofm/image/upload/v1713779250/icons/youtube_ugmvyx.svg",
  },
];
</script>

<template>
  <div class="flex flex-row gap-4">
    <a
      v-for="media in socilaMedias"
      :key="media.href"
      :href="media.href"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img class="h-8" :src="media.img" />
    </a>
  </div>
</template>
