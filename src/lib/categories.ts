export const categories = [
  {
    slug: 'wellness',
    label: 'Wellness',
    description: 'Daily behaviors, habit loops, and foundational wellness practices that hold the whole system together.',
    shortDescription: 'Foundational habits for everyday health.',
    href: '/topics/wellness',
    blogHref: '/blog?category=wellness',
    colorClass: 'bg-sage-light/40 text-sage-dark',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20"/><path d="M2 12h20"/><path d="M4.9 4.9 19.1 19.1"/><path d="M19.1 4.9 4.9 19.1"/></svg>`,
  },
  {
    slug: 'longevity',
    label: 'Longevity',
    description: 'The science of living longer and better, from metabolic health to exercise and healthy aging.',
    shortDescription: 'Healthy aging and long-horizon health science.',
    href: '/topics/longevity',
    blogHref: '/blog?category=longevity',
    colorClass: 'bg-gold-light/50 text-stone',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>`,
  },
  {
    slug: 'nutrition',
    label: 'Nutrition',
    description: 'Evidence-aware eating, metabolic health, gut function, and food choices that support real life.',
    shortDescription: 'Food, metabolism, and practical nutrition.',
    href: '/topics/nutrition',
    blogHref: '/blog?category=nutrition',
    colorClass: 'bg-terracotta-light/30 text-terracotta',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 22 16 8"/><path d="M17.47 3.47a3.47 3.47 0 0 1 4.9 4.9L8 22 2 22l0-6Z"/><path d="m8 9.5 6.5 6.5"/></svg>`,
  },
  {
    slug: 'sleep',
    label: 'Sleep',
    description: 'Recovery, sleep architecture, circadian health, and the habits that make nights restorative.',
    shortDescription: 'Recovery, rest, and circadian health.',
    href: '/topics/sleep',
    blogHref: '/blog?category=sleep',
    colorClass: 'bg-mist text-sage-dark',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`,
  },
  {
    slug: 'mind-body',
    label: 'Mind & Body',
    description: 'Stress, mindfulness, emotional regulation, and the feedback loop between psychology and physiology.',
    shortDescription: 'Stress, mindfulness, and emotional resilience.',
    href: '/topics/mind-body',
    blogHref: '/blog?category=mind-body',
    colorClass: 'bg-cream-dark text-stone',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 12h.01"/><path d="M15 12h.01"/><path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"/><path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3a9 9 0 0 1 7 3.3"/></svg>`,
  },
] as const;

export const categoryMap = new Map(categories.map((category) => [category.slug, category]));

export function getCategory(slug: string) {
  return categoryMap.get(slug);
}
