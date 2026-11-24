import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Products',
      links: [
        {
          text: 'All Wholesale Kits',
          href: '/#products',
        },
        {
          text: 'DIY Book Nooks',
          href: '/#products',
        },
        {
          text: 'Miniature Dollhouses',
          href: '/#products',
        },
        {
          text: '3D Wooden Puzzles',
          href: '/#products',
        },
      ],
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
      href: '/#inquiry',
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Products',
      links: [
        { text: 'DIY Book Nooks', href: '/#products' },
        { text: 'Wooden 3D Puzzles', href: '/#products' },
        { text: '1-Carton Trial Orders', href: '/#features' },
        { text: 'Neutral Packaging', href: '/#features' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About Us', href: '/#features' },
        { text: 'Contact & Inquiry', href: '/#inquiry' },
        { text: 'FAQ', href: '/#faq' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Email', icon: 'tabler:mail', href: 'mailto:info@kansogoods.com' },
    {},
  ],
  footNote: `
    © 2026 Kanso Goods. All rights reserved. · Contact: <a class="text-blue-600 underline dark:text-muted" href="mailto:info@kansogoods.com">info@kansogoods.com</a>
  `,
};
