import type { SubtopicNote } from '../../types/syllabus';

export const CHAPTER_8_NOTES: SubtopicNote[] = [
  {
    id: '8.1',
    chapterId: 8,
    code: '8.1',
    title: 'Introduction to probability',
    tier: 'Core & Extended',
    summary: 'Calculate theoretical probabilities of single events on the $[0, 1]$ scale and use complementary events $P(A\') = 1 - P(A)$.',
    coreObjectives: [
      'Understand and use the probability scale from $0$ to $1$.',
      'Calculate the probability of a single event as either a fraction, decimal or percentage.',
      'Understand that the probability of an event occurring $= 1 -$ the probability of the event not occurring.',
    ],
    keyFormulas: [
      { label: 'Theoretical probability', latex: 'P(A) = \\frac{\\text{Number of favourable outcomes}}{\\text{Total equally likely outcomes}}' },
      { label: 'Complement rule', latex: 'P(A\') = 1 - P(A)' },
    ],
    studyNotes: [
      {
        heading: 'How to write probability answers in Cambridge exams',
        body: 'Always express probabilities as an exact simplified FRACTION, exact DECIMAL, or exact PERCENTAGE. NEVER write a probability as a ratio like $3 : 5$ or in words like "3 out of 5" — those lose the accuracy mark!',
      },
    ],
    workedExamples: [
      {
        title: 'Complementary probability in a spinner',
        question: 'A biased 4-sided spinner lands on Red, Blue, Green, or Yellow. $P(\\text{Red}) = 0.35$, $P(\\text{Blue}) = 0.2$, and $P(\\text{Green}) = P(\\text{Yellow})$. Find $P(\\text{Green})$.',
        marks: 2,
        steps: [
          'Total probability $= 1$, so $P(\\text{Green or Yellow}) = 1 - (0.35 + 0.2) = 0.45$.',
          'Since they are equal: $P(\\text{Green}) = 0.45 \\div 2 = 0.225$.',
        ],
        answer: '$0.225$',
        markSchemeNotes: 'M1 for $1 - 0.55$, A1 for $0.225$.',
      },
    ],
    commonMistakes: [
      'Writing probabilities as ratios ($1:4$) instead of fractions ($\\frac{1}{4}$) or decimals ($0.25$).',
      'Giving a probability greater than $1$.',
    ],
    quickCheck: {
      id: 'qc-8.1',
      prompt: 'The probability that a bus arrives late is $0.18$. What is the probability it does NOT arrive late?',
      answer: '0.82',
      numericAnswer: 0.82,
      tolerance: 0.0001,
      hint: 'Use $1 - P(\\text{late})$.',
      solution: '$1 - 0.18 = 0.82$.',
    },
  },
  {
    id: '8.2',
    chapterId: 8,
    code: '8.2',
    title: 'Relative and expected frequencies',
    tier: 'Core & Extended',
    summary: 'Estimate probabilities from experimental relative frequency and calculate expected occurrences in $n$ trials.',
    coreObjectives: [
      'Understand relative frequency as an estimate of probability.',
      'Calculate expected frequency $= n \\times P(A)$.',
    ],
    keyFormulas: [
      { label: 'Relative frequency', latex: '\\text{Relative Frequency} = \\frac{\\text{Frequency of event}}{\\text{Total trials}}' },
      { label: 'Expected number of outcomes', latex: '\\text{Expected} = n \\times p' },
    ],
    studyNotes: [
      {
        heading: 'Most reliable estimate in experiments',
        body: 'When two students test a coin $20$ times vs $500$ times, the experiment with the LARGEST number of trials gives the most reliable estimate of the true probability. Expected frequency does NOT need to be rounded unless the question specifies whole items, though keep exact decimals unless asked for an estimate.',
      },
    ],
    workedExamples: [
      {
        title: 'Expected frequency',
        question: 'A weighted die lands on $6$ with probability $0.28$. If the die is rolled $250$ times, how many $6$s are expected?',
        marks: 2,
        steps: [
          'Multiply trials by probability: $250 \\times 0.28 = 70$.',
        ],
        answer: '$70$',
        markSchemeNotes: 'M1 for $250 \\times 0.28$, A1 for $70$.',
      },
    ],
    commonMistakes: [
      'Writing expected frequency as a probability fraction (e.g. $\\frac{70}{250}$) instead of the expected count ($70$).',
    ],
    quickCheck: {
      id: 'qc-8.2',
      prompt: 'A quality check found $12$ faulty bulbs in a batch of $400$. Estimate how many faulty bulbs would be in a shipment of $1000$.',
      answer: '30',
      numericAnswer: 30,
      tolerance: 0,
      hint: 'Relative frequency $= \\frac{12}{400} = 0.03$. Multiply by $1000$.',
      solution: '$\\frac{12}{400} \\times 1000 = 0.03 \\times 1000 = 30$.',
    },
  },
  {
    id: '8.3',
    chapterId: 8,
    code: '8.3',
    title: 'Probability of combined events',
    tier: 'Core & Extended',
    summary: 'Calculate probabilities of combined independent and dependent events using sample space diagrams, Venn diagrams, and probability tree diagrams.',
    coreObjectives: [
      'Calculate the probability of simple combined events, using possibility diagrams, tree diagrams and Venn diagrams.',
    ],
    keyFormulas: [
      { label: 'AND rule (independent)', latex: 'P(A \\text{ and } B) = P(A) \\times P(B)' },
      { label: 'OR rule (mutually exclusive)', latex: 'P(A \\text{ or } B) = P(A) + P(B)' },
      { label: 'At least one shortcut', latex: 'P(\\text{at least one}) = 1 - P(\\text{none})' },
    ],
    studyNotes: [
      {
        heading: 'Branch rules for Probability Trees',
        body: '1. Every pair/group of branches from a single node MUST sum to $1$. 2. Multiply probabilities ALONG a branch path (`AND`). 3. Add the resulting path probabilities DOWN across qualifying outcomes (`OR`). 4. Check "with replacement" vs "without replacement" before labelling the second column of branches!',
      },
    ],
    workedExamples: [
      {
        title: 'Tree diagram without replacement',
        question: 'A bag contains $5$ red and $3$ blue counters. Two counters are drawn at random without replacement. Find the probability they are different colours.',
        marks: 3,
        steps: [
          'Path 1 (Red then Blue): $\\frac{5}{8} \\times \\frac{3}{7} = \\frac{15}{56}$.',
          'Path 2 (Blue then Red): $\\frac{3}{8} \\times \\frac{5}{7} = \\frac{15}{56}$.',
          'Add both qualifying paths: $\\frac{15}{56} + \\frac{15}{56} = \\frac{30}{56} = \\frac{15}{28}$.',
        ],
        answer: '$\\frac{15}{28}$',
        markSchemeNotes: 'M1 for $\\frac{5}{8} \\times \\frac{3}{7}$, M1 for $\\times 2$ (both orders), A1 for $\\frac{15}{28}$.',
      },
    ],
    commonMistakes: [
      'Forgetting to reduce both the numerator and denominator by $1$ on the second draw when items are NOT replaced.',
      'Only counting `Red then Blue` and missing the reverse order `Blue then Red`.',
    ],
    quickCheck: {
      id: 'qc-8.3',
      prompt: 'A coin is tossed and a fair 6-sided die is rolled. What is the probability of getting a Head AND an even number? (Enter as a/b)',
      answer: '1/4',
      acceptedAnswers: ['1/4', '0.25'],
      numericAnswer: 0.25,
      tolerance: 0.001,
      hint: '$P(\\text{Head}) = \\frac{1}{2}$ and $P(\\text{Even}) = \\frac{3}{6} = \\frac{1}{2}$.',
      solution: '$\\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{4}$.',
    },
    sandbox: 'probability-tree',
  },
  {
    id: '8.4',
    chapterId: 8,
    code: '8.4',
    title: 'Conditional probability',
    tier: 'Extended',
    summary: 'Calculate conditional probabilities $P(A \\mid B)$ from Venn diagrams, two-way tables, and non-replacement tree diagrams.',
    coreObjectives: [
      'Restrict sample space counts in two-way tables.',
    ],
    extendedObjectives: [
      'Calculate conditional probability using Venn diagrams, tree diagrams and tables: $P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)}$.',
    ],
    keyFormulas: [
      { label: 'Conditional probability formula', latex: 'P(A \\mid B) = \\frac{n(A \\cap B)}{n(B)} = \\frac{P(A \\cap B)}{P(B)}' },
    ],
    studyNotes: [
      {
        heading: 'Spotting the denominator from "given that..."',
        body: 'In "Find the probability that a student studies Physics, GIVEN THAT they study Chemistry", the condition after "given that" becomes your NEW restricted universe (the denominator!). Only look inside the Chemistry group.',
      },
    ],
    workedExamples: [
      {
        title: 'Conditional probability from a Venn diagram (Extended)',
        question: 'In a group of $30$ athletes, $18$ run ($R$), $12$ swim ($S$), and $6$ do both. One athlete is chosen at random. Given that the athlete runs, find the probability they also swim.',
        marks: 2,
        steps: [
          'Restrict denominator to runners: $n(R) = 18$.',
          'Numerator is athletes who both run and swim: $n(R \\cap S) = 6$.',
          '$P(S \\mid R) = \\frac{6}{18} = \\frac{1}{3}$.',
        ],
        answer: '$\\frac{1}{3}$',
        markSchemeNotes: 'M1 for denominator $18$, A1 for $\\frac{1}{3}$.',
      },
    ],
    commonMistakes: [
      'Dividing by the total population $n(\\mathscr{E})$ instead of the given condition $n(B)$.',
    ],
    quickCheck: {
      id: 'qc-8.4',
      prompt: 'In a table, $24$ students take Art, and $9$ of those $24$ also take Music. Given a randomly picked student takes Art, what is the probability they take Music? (Enter as a/b)',
      answer: '3/8',
      acceptedAnswers: ['3/8', '0.375'],
      numericAnswer: 0.375,
      tolerance: 0.001,
      hint: 'Denominator is $24$.',
      solution: '$\\frac{9}{24} = \\frac{3}{8}$.',
    },
    sandbox: 'probability-tree',
  },
];
