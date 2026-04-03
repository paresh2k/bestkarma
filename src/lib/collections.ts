export const READING_PATHS = [
  {
    id: 'sleep',
    tag: 'path:sleep',
    title: 'Fix my sleep',
    description: 'Evidence-based ways to sleep better, starting tonight',
    group: 'goal',
    order: [
      'alcohol-rem-sleep-suppression',
      'cbt-i-insomnia-treatment',
      'the-science-of-deep-sleep',
      'temperature-sleep-core-cooling',
    ],
    notes: {
      'alcohol-rem-sleep-suppression': "Start here \u2014 the most common sleep saboteur people don\u2019t realize",
      'cbt-i-insomnia-treatment': 'The gold-standard treatment most doctors never mention',
      'the-science-of-deep-sleep': "Understanding this changes how you think about enough sleep",
      'temperature-sleep-core-cooling': 'The cheapest, fastest sleep fix most people miss',
    } as Record<string, string>,
  },
  {
    id: 'stress',
    tag: 'path:stress',
    title: 'Calm my nervous system',
    description: 'The science of stress, burnout, and recovery',
    group: 'goal',
    order: [
      'vagus-nerve-polyvagal',
      'burnout-science-brain-body-effects',
      'loneliness-epidemic-health',
      'nervous-system-reset-sympathetic-parasympathetic',
    ],
    notes: {
      'vagus-nerve-polyvagal': 'Reframes stress as a trainable system, not a personality flaw',
      'burnout-science-brain-body-effects': "Makes burnout feel real and medical, not just being tired",
      'loneliness-epidemic-health': 'The most under-discussed health risk of our era',
      'nervous-system-reset-sympathetic-parasympathetic': 'Practical techniques you can use the same day',
    } as Record<string, string>,
  },
  {
    id: 'longevity',
    tag: 'path:longevity',
    title: 'Age better, starting now',
    description: 'Longevity basics without becoming a full-time optimizer',
    group: 'goal',
    order: [
      'grip-strength-longevity',
      'protein-muscle-aging',
      'apob-cardiovascular-risk-longevity',
      'vo2-max-longevity-predictor',
    ],
    notes: {
      'grip-strength-longevity': "Start here \u2014 surprising, practical, and immediately testable",
      'protein-muscle-aging': 'The single dietary change with the biggest longevity payoff',
      'apob-cardiovascular-risk-longevity': 'The one test longevity doctors agree matters most',
      'vo2-max-longevity-predictor': 'The metric that puts everything else in perspective',
    } as Record<string, string>,
  },
  {
    id: 'women',
    tag: 'path:women',
    title: "Women\u2019s healthspan",
    description: 'What changes in your 40s, why, and what to do about it',
    group: 'stage',
    order: [
      'perimenopause-anxiety-brain-chemistry',
      'bone-density-perimenopause-prevention',
      'cortisol-women-hormones-life-stages',
      'creatine-women-benefits',
    ],
    notes: {
      'perimenopause-anxiety-brain-chemistry': "Start here \u2014 validates what many women feel but can\u2019t explain",
      'bone-density-perimenopause-prevention': 'The prevention window is shorter than most women realize',
      'cortisol-women-hormones-life-stages': 'Explains why stress feels different in your 40s',
      'creatine-women-benefits': 'One of the most practical, actionable pieces in the library',
    } as Record<string, string>,
  },
  {
    id: 'men',
    tag: 'path:men',
    title: "Men\u2019s healthspan",
    description: 'Strength, heart health, and what the evidence says works',
    group: 'stage',
    order: [
      'grip-strength-longevity',
      'visceral-fat-metabolic-aging',
      'strength-training-after-40',
      'vo2-max-longevity-predictor',
    ],
    notes: {
      'grip-strength-longevity': 'A 3-second test that predicts more than your blood pressure',
      'visceral-fat-metabolic-aging': 'Why your waist matters more than your weight on a scale',
      'strength-training-after-40': 'The most evidence-backed thing you can do for longevity',
      'vo2-max-longevity-predictor': 'The single fitness metric that predicts how long you will live',
    } as Record<string, string>,
  },
  {
    id: 'genz',
    tag: 'path:genz',
    title: 'Build the foundation now',
    description: 'What you do in your 20s and 30s shapes everything after',
    group: 'stage',
    order: [
      'burnout-science-brain-body-effects',
      'social-jetlag-chronobiology',
      'exercise-depression-antidepressant-dose',
      'habit-formation-neuroscience',
    ],
    notes: {
      'burnout-science-brain-body-effects': 'Burnout is physical, not a mindset problem',
      'social-jetlag-chronobiology': 'Why your irregular schedule is wrecking more than your mornings',
      'exercise-depression-antidepressant-dose': 'Exercise as mental health treatment: the dose that works',
      'habit-formation-neuroscience': 'What neuroscience says about building habits that stick',
    } as Record<string, string>,
  },
  {
    id: 'millennials',
    tag: 'path:millennials',
    title: 'The decade that matters',
    description: 'You are 35\u201345. Prevention is urgent but not too late',
    group: 'stage',
    order: [
      'alcohol-rem-sleep-suppression',
      'protein-muscle-aging',
      'biological-age-testing-guide',
      'time-restricted-eating-evidence',
    ],
    notes: {
      'alcohol-rem-sleep-suppression': 'The article people send to their group chat',
      'protein-muscle-aging': 'The single dietary change with the biggest payoff right now',
      'biological-age-testing-guide': 'How to measure whether you are aging faster than your years',
      'time-restricted-eating-evidence': 'Cuts through fasting hype with what the research shows',
    } as Record<string, string>,
  },
];

export const HOMEPAGE_COLLECTIONS = [
  { id: 'most-shared', tag: 'collection:most-shared', title: 'Most shared', description: 'The articles readers send to friends and family most often' },
  { id: 'women-40', tag: 'collection:women-40', title: 'Best for women 40+', description: 'Healthspan, hormones, and what the evidence says matters most' },
  { id: 'men', tag: 'collection:men', title: 'Best for men', description: 'Strength, heart health, and longevity: evidence only' },
  { id: 'quick-wins', tag: 'collection:quick-wins', title: 'Quick wins', description: 'Short reads with one clear action step' },
  { id: '20s-30s', tag: 'collection:20s-30s', title: 'In your 20s and 30s', description: 'The health foundations that compound over decades' },
  { id: 'midlife', tag: 'collection:midlife', title: 'The midlife playbook', description: 'For the 35\u201345 crowd. Prevention starts now' },
];

// Helper to get articles for a tag, sorted by an optional order array
export function getArticlesForTag(
  allPosts: any[],
  tag: string,
  order?: string[]
) {
  const tagged = allPosts.filter(p => p.data.tags.includes(tag));
  if (!order) return tagged.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  const slugOf = (p: any) => p.id.replace(/\.mdx?$/, '');
  return tagged.sort((a, b) => {
    const ai = order.indexOf(slugOf(a));
    const bi = order.indexOf(slugOf(b));
    // Articles in the order array come first, in that order
    // Articles not in the order array come after, sorted by date
    if (ai >= 0 && bi >= 0) return ai - bi;
    if (ai >= 0) return -1;
    if (bi >= 0) return 1;
    return b.data.pubDate.valueOf() - a.data.pubDate.valueOf();
  });
}
