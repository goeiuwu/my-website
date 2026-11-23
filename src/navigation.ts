export const headerData = {
  links: [
    {
      text: 'Products',
      href: '/#products',
    },
    {
      text: 'Why Us',
      href: '/#features',
    },
    {
      text: 'How to Order',
      href: '/#process',
    },
    {
      text: 'FAQ',
      href: '/#faq',
    },
  ],
  actions: [
    {
      text: 'Get Price List',
      href: '/contact',
    },
  ],
};
        {
          text: 'Long-form Sales',
          href: getPermalink('/landing/sales'),
        },
        {
          text: 'Click-Through',
          href: getPermalink('/landing/click-through'),
        },
        {
          text: 'Product Details (or Services)',
          href: getPermalink('/landing/product'),
        },
        {
          text: 'Coming Soon or Pre-Launch',
          href: getPermalink('/landing/pre-launch'),
        },
        {
          text: 'Subscription',
          href: getPermalink('/landing/subscription'),
        },
      ],
    },
    {
      text: 'Blog',
      links: [
        {
          text: 'Blog List',
          href: getBlogPermalink(),
        },
        {
          text: 'Article',
          href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        },
        {
          text: 'Article (with MDX)',
          href: getPermalink('markdown-elements-demo-post', 'post'),
        },
        {
          text: 'Category Page',
          href: getPermalink('tutorials', 'category'),
        },
        {
          text: 'Tag Page',
          href: getPermalink('astro', 'tag'),
        },
      ],
    },
  ],
  actions: [{ text: 'Download', href: 'https://github.com/arthelokyo/astrowind', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: getPermalink('/#features') },
        { text: 'Pricing', href: getPermalink('/pricing') },
        { text: 'Services', href: getPermalink('/services') },
        { text: 'Blog', href: getBlogPermalink() },
      ],
    },
    {
      title: 'Demos',
      links: [
        { text: 'SaaS', href: getPermalink('/homes/saas') },
        { text: 'Startup', href: getPermalink('/homes/startup') },
        { text: 'Mobile App', href: getPermalink('/homes/mobile-app') },
        { text: 'Personal', href: getPermalink('/homes/personal') },
        { text: 'Landing pages', href: getPermalink('/landing/lead-generation') },
      ],
    },
    
    {
      title: 'Company',
      links: [
        { text: 'About', href: getPermalink('/about') },
        { text: 'Contact', href: getPermalink('/contact') },
       
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/arthelokyo/astrowind' },
  ],
  footNote: `
    © 2026 Kanso Goods. All rights reserved. · Contact: <a class="text-blue-600 underline dark:text-muted" href="mailto:info@kansogoods.com">info@kansogoods.com</a>
  `,
};
