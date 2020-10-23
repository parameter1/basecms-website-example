module.exports = {
  primary: {
    items: [
      { href: '/section-1', label: 'Section 1' },
      { href: '/section-2', label: 'Section 2' },
      { href: '/section-3', label: 'Section 3' },
      { href: 'https://google.com', label: 'Google', target: '_blank' },
    ],
  },
  secondary: {
    items: [
      { href: '/section-4', label: 'Section 4' },
      { href: '/section-5', label: 'Section 5' },
    ],
  },
  tertiary: {
    items: [
      {
        href: '/search',
        label: 'Search',
        icon: 'search',
        forceLabel: true,
      },
    ],
  },
  footer: {
    items: [
      { href: '/some-url', label: 'Some URL', target: '_blank' },
      { href: '/another-url', label: 'Another URL' },
      { href: '/yet-another', label: 'Yet Another URL', target: '_blank' },
    ],
  },
  menu: [
    {
      label: 'Topics',
      items: [
        { href: '/section-1', label: 'Section 1' },
        { href: '/section-2', label: 'Section 2' },
        { href: '/section-3', label: 'Section 3' },
      ],
    },
    {
      label: 'Resources',
      items: [
        { href: '/section-4', label: 'Section 4' },
        { href: '/section-5', label: 'Section 5' },
      ],
    },
    {
      label: 'User Tools',
      items: [
        { href: '/some-url', label: 'Some URL', target: '_blank' },
        { href: '/another-url', label: 'Another URL' },
        { href: '/yet-another', label: 'Yet Another URL', target: '_blank' },
      ],
    },
  ],
};
