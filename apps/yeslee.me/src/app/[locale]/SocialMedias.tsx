const socilaMedias = [
  {
    href: 'https://www.instagram.com/yeeeees.lee/',
    img: 'https://res.cloudinary.com/dsxispofm/image/upload/f_auto,q_auto,h_64/v1713779246/icons/instagram_ykmcgg.svg',
  },
  {
    href: 'https://www.facebook.com/profile.php?id=100000254874042',
    img: 'https://res.cloudinary.com/dsxispofm/image/upload/f_auto,q_auto,h_64/v1713779244/icons/facebook_gp2zt2.svg',
  },
  {
    href: 'https://www.linkedin.com/in/tsung-yeh-lee/',
    img: 'https://res.cloudinary.com/dsxispofm/image/upload/f_auto,q_auto,h_64/v1713779248/icons/linkedin_cf9wjs.svg',
  },
  {
    href: 'https://github.com/hiiamyes',
    img: 'https://res.cloudinary.com/dsxispofm/image/upload/f_auto,q_auto,h_64/v1713779246/icons/github_eokz2j.svg',
  },
  {
    href: 'https://medium.com/@yeeeeees',
    img: 'https://res.cloudinary.com/dsxispofm/image/upload/f_auto,q_auto,h_64/v1713778877/icons/medium_mojppm.svg',
  },
  {
    href: 'https://www.youtube.com/playlist?list=PL0hFmSBG9QBEaBbQNdjdXoj3mo0TXJeZ9',
    img: 'https://res.cloudinary.com/dsxispofm/image/upload/f_auto,q_auto,h_64/v1713779250/icons/youtube_ugmvyx.svg',
  },
];

const SocialMedias = () => {
  return (
    <div className="flex flex-row gap-4">
      {socilaMedias.map((media) => {
        return (
          <a key={media.href} href={media.href} target="_blank" rel="noopener noreferrer">
            <img className="h-8" src={media.img} />
          </a>
        );
      })}
    </div>
  );
};

export default SocialMedias;
