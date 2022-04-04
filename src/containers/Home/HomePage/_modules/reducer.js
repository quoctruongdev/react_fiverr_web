const initialState = {
  dataTestimonials: [
    {
      key: 1,

      urlImage:
        "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_2.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173395/testimonial-video-still-haerfest.jpg",
      url: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_2.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173395/testimonial-video-still-haerfest.jpg",
      logo: "/asset/img/testimonal/haerfest-logo-x2.03fa5c5.png",
      video:
        "https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/bsncmkwya3nectkensun",
      engSub:
        "https://npm-assets.fiverrcdn.com/assets/@fiverr/logged_out_homepage_perseus/apps/Tim and Dan - Haerfest_en-US.a905094.vtt",
      name: "Tim and Dan Joo, Co-Founders",
      description: `"When you want to create a business bigger than yourself, you need a lot of help. That's what Fiverr does."`,
    },
    {
      key: 2,
      urlImage:
        "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_2.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173396/testimonial-video-still-lavender.jpg",
      url: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_2.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173396/testimonial-video-still-lavender.jpg",
      logo: "/asset/img/testimonal/lavender-logo-x2.89c5e2e.png",
      video:
        "https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/rb8jtakrisiz0xtsffwi",
      engSub:
        "https://npm-assets.fiverrcdn.com/assets/@fiverr/logged_out_homepage_perseus/apps/Brighid and Pritma - Lavender_en-US.89febb9.vtt",
      name: "Caitlin Tormey, Chief Commercial Officer",
      description: `"We've used Fiverr for Shopify web development, graphic design, and backend web development. Working with Fiverr makes my job a little easier every day."`,
    },
    {
      key: 3,
      urlImage:
        "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_2.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173414/testimonial-video-still-naadam.jpg",

      url: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_2.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173414/testimonial-video-still-naadam.jpg",
      logo: "/asset/img/testimonal/naadam-logo-x2.0a3b198.png",
      video:
        "https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/plfa6gdjihpdvr10rchl",
      engSub:
        "https://npm-assets.fiverrcdn.com/assets/@fiverr/logged_out_homepage_perseus/apps/Caitlin Tormey - Naadam_en-US.1b62b1a.vtt",
      name: "Brighid Gannon (DNP, PMHNP-BC), Co-Founder",
      description: `"We used Fiverr for SEO, our logo, website, copy, animated videos — literally everything. It was like working with a human right next to you versus being across the world."`,
    },
    {
      key: 4,
      urlImage:
        "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_2.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173399/testimonial-video-still-rooted.jpg",
      url: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_2.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173399/testimonial-video-still-rooted.jpg",
      logo: "/asset/img/testimonal/rooted-logo-x2.321d79d.png",
      video:
        "https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/yja2ld5fnolhsixj3xxw",
      engSub:
        "https://npm-assets.fiverrcdn.com/assets/@fiverr/logged_out_homepage_perseus/apps/Kim and Olivia - rooted_en-US.c5b4b90.vtt",
      name: "Kay Kim, Co-Founder",
      description: `"It's extremely exciting that Fiverr has freelancers from all over the world — it broadens the talent pool. One of the best things about Fiverr is that while we're sleeping, someone's working."`,
    },
  ],
  dataPopular: [
    {
      key: 1,
      url: "/asset/img/slider/animated-explainer-2x.png.jpeg",
      title: {
        sub: "Engage your audience",
        main: "Video Editing",
      },
      link: "categories/Video&Animation/6198753aaef344001cecfc19/VideoEditing/61987548aef344001cecfc1f",
    },

    {
      key: 2,
      url: "/asset/img/slider/book-covers-2x.png.jpeg",
      title: {
        sub: "Showcase your story",
        main: "Book & eBook Writing",
      },
      link: "/categories/Writing&Translation/61987497aef344001cecfb93/Book&eBookWriting/619874b3aef344001cecfba5",
    },
    {
      key: 3,
      url: "/asset/img/slider/data-entry-2x.png.jpeg",
      title: {
        sub: "Learn your business",
        main: "E-Commerce Management",
      },
      link: "/categories/Business/619876b0aef344001cecfd65/E-CommerceManagement/619876b9aef344001cecfd6b",
    },
    {
      key: 4,
      url: "/asset/img/slider/illustration-2x.png.jpeg",
      title: {
        sub: "Color your dreams",
        main: "Mobile Apps",
      },
      link: "/categories/Programming&Tech/61987645aef344001cecfcf9/MobileApps/6198765eaef344001cecfd11",
    },
    {
      key: 5,
      url: "/asset/img/slider/logo-design-2x.png.jpeg",
      title: {
        sub: "Build your brand",
        main: "Logo Degign",
      },
      link: "/categories/Graphics&Design/618c90ff95d99f001c0c047a/LogoDesign/61951593aef344001cec451e",
    },
    {
      key: 6,
      url: "/asset/img/slider/seo-2x.png.jpeg",
      title: {
        sub: "Unlock growth online",
        main: "SEO",
      },
      link: "/categories/DigitalMarketing/61987421aef344001cecfb35/SearchEngineOptimization(SEO)/6198742faef344001cecfb3b",
    },
    {
      key: 7,
      url: "/asset/img/slider/social-2x.png.jpeg",
      title: {
        sub: "Reach more customer",
        main: "Social Media",
      },
      link: "/categories/DigitalMarketing/61987421aef344001cecfb35/SocialMediaAdvertising/61987435aef344001cecfb3f",
    },
    {
      key: 8,
      url: "/asset/img/slider/translation-2x.png.jpeg",
      title: {
        sub: "Go global",
        main: "Translation",
      },
      link: "categories/Writing&Translation/61987497aef344001cecfb93/Translation/619874a4aef344001cecfb99",
    },
    {
      key: 9,
      url: "/asset/img/slider/voiceover-2x.png.jpeg",
      title: {
        sub: "Share your message",
        main: "Voice Over",
      },
      link: "/categories/Music&Audio/619875deaef344001cecfc9f/VoiceOver/619875e6aef344001cecfca1",
    },
    {
      key: 10,
      url: "/asset/img/slider/wordpress-2x.png.jpeg",
      title: {
        sub: "Customize your site",
        main: "WordPress",
      },
      link: "/categories/Programming&Tech/61987645aef344001cecfcf9/WordPress/6198764daef344001cecfcfb",
    },
  ],
  dataFeature: {
    video:
      "https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/vmvv3czyk2ifedefkau7",
    engSub:
      "https://npm-assets.fiverrcdn.com/assets/@fiverr/logged_out_homepage_perseus/apps/fiverr_lohp_video_en-US.00c8c11.vtt",
  },
};

const homePageReducer = (state = initialState) => {
  return { ...state };
};

export default homePageReducer;
