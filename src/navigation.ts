import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Products',
      href: '#products',
    },
    {
      text: 'Why Us',
      href: '#features',
    },
    {
      text: 'How to Order',
      href: '#process',
    },
    {
      text: 'FAQ',
      href: '#faq',
    },
    {
      text: '🌐 EN',
      links: [
        {
          text: 'English (Global)',
          href: '/',
        },
        {
          text: '日本語 (Japan B2B)',
          href: '/ja',
        },
        {
          text: '繁體中文 (港澳台)',
          href: '/zh',
        },
      ],
    },
  ],
  actions: [
    {
      text: 'Get Price List',
      href: '#inquiry',
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Products',
      links: [
        { text: 'DIY Book Nooks', href: '#products' },
        { text: 'Wooden 3D Puzzles', href: '#products' },
        { text: '1-Carton Trial Orders', href: '#inquiry' },
        { text: 'Neutral Packaging', href: '#features' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About Us', href: '#features' },
        { text: 'Contact Us', href: '#inquiry' },
        { text: 'FAQ', href: '#faq' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Email', icon: 'tabler:mail', href: 'mailto:info@kansogoods.com' },
  ],
  footNote: `
    © 2026 Kanso Goods. All rights reserved. · Contact: <a class="text-stone-800 hover:text-[#8B4513] underline" href="mailto:info@kansogoods.com">info@kansogoods.com</a>
  `,
};
