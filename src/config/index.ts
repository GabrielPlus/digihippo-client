export const PRODUCT_CATEGORIES = [
    {
      label: 'Rings',
      value: 'unisex' as const,
      featured: [
        {
          name: 'Editor picks',
          href: `/products?category=unisex`,
          imageSrc: '/nav/unisex/1.jpg',
        },
        {
          name: 'New Arrivals',
          href: '/products?category=unisex&sort=desc',
          imageSrc: '/nav/unisex/3.jpg',
        },
        {
          name: 'Bestsellers',
          href: '/products?category=unisex',
          imageSrc: '/nav/unisex/2.jpg',
        },
      ],
    },
    {
      label: 'Earings',
      value: 'jewels' as const,
      featured: [
        {
          name: 'Favorite Icon Picks',
          href: `/products?category=jewells`,
          imageSrc: '/nav/jewels/1.jpg',
        },
        {
          name: 'New Arrivals',
          href: '/products?category=jewells&sort=desc',
          imageSrc: '/nav/jewels/2.jpg',
        },
        {
          name: 'Bestselling jewells',
          href: '/products?category=jewells',
          imageSrc: '/nav/jewels/3.jpg',
        },
      ],
    },
  ]