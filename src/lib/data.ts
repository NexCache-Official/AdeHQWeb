export const navLinks = [
  { href: "/product", label: "Product" },
  { href: "/pricing", label: "Pricing" },
  { href: "/use-cases", label: "Use cases" },
  { href: "/about", label: "About" },
] as const;

export const useCases = [
  {
    code: "La",
    title: "Launch a product",
    body: "Research, product, design, engineering, sales, and marketing employees in one launch room.",
  },
  {
    code: "Mr",
    title: "Research a market",
    body: "A long-context research employee compiles the competitor landscape and saves findings to memory.",
  },
  {
    code: "So",
    title: "Sales outreach",
    body: "Sales employee drafts outreach, requests approval before sending, and logs completed work.",
  },
  {
    code: "Cl",
    title: "Client delivery",
    body: "Freelancers assign AI employees per client room with scoped memory and no context bleed.",
  },
  {
    code: "Op",
    title: "Operations & tasks",
    body: "Turn messy ideas into tasks. Track follow-ups across topics and rooms.",
  },
  {
    code: "Ag",
    title: "Agency workflows",
    body: "Manage multiple AI workers across client projects from one workspace.",
  },
];

export const homeFaqs = [
  {
    q: "What is AdeHQ?",
    a: "AdeHQ is an AI workforce workspace. You hire AI employees with roles and personalities, assign them to rooms and topics, and manage their work through messages, tasks, memory, approvals, and work logs.",
  },
  {
    q: "How is this different from ChatGPT?",
    a: "ChatGPT is session-based chat. AdeHQ gives you persistent AI employees with identity, scoped context, team coordination, and auditable work — inside a structured workspace.",
  },
  {
    q: "What are AI Work Hours?",
    a: "AI Work Hours are a simple measure of weekly AI capacity on your plan. More powerful intelligence modes and heavier work consume more hours. You don't need to think about tokens.",
  },
  {
    q: "Can I bring my own API key?",
    a: "BYOK (Bring Your Own Key) is planned for technical users who want to use their own model provider while still getting AdeHQ's workspace, memory, and orchestration.",
  },
  {
    q: "Who is AdeHQ for?",
    a: "Solo founders, freelancers, creators, AI-native agencies, and small teams who want AI help without enterprise complexity.",
  },
  {
    q: "Is my data private?",
    a: "Your workspace data is isolated per workspace. See our Security and Privacy pages for details.",
  },
  {
    q: "What's on the free plan?",
    a: "Free lets you experience the core loop: limited AI employees, rooms, and lightweight hosted AI usage. It's designed to try AdeHQ, not run a full business.",
  },
];

export const pricingFaqs = [
  {
    q: "What happens when I run out of AI Work Hours?",
    a: "Hosted AI pauses for heavier work until the week resets — or you can add a prepaid top-up instantly. There is no surprise overage billing, and human collaboration never stops.",
  },
  {
    q: "Are human seats really unlimited and free?",
    a: "Yes. Invite as many human teammates, co-founders, and clients as you like on every plan, including Free. You only ever pay for hosted AI capacity, never for people.",
  },
  {
    q: "Can I upgrade or downgrade anytime?",
    a: "Yes — change plans whenever you like. Your employees keep their identity, memory, role, and history across plan changes.",
  },
  {
    q: "Do unused AI Work Hours roll over?",
    a: "Plan AI Work Hours reset weekly and do not roll over. Prepaid top-up hours stay on your balance until used.",
  },
  {
    q: "What's the difference between hosted AI and BYOK?",
    a: "Hosted AI is included in your plan and governed by AI Work Hours. BYOK (coming) lets technical users connect their own model provider key while still getting the workspace, memory, orchestration, and governance.",
  },
];

export const phases = [
  {
    n: "1",
    status: "Now",
    headline:
      "Core AI workforce workspace — rooms, topics, DMs, memory, tasks, approvals.",
  },
  {
    n: "2",
    status: "Now",
    headline:
      "AI employee hiring — Recruiting Manager, candidates, job briefs.",
  },
  {
    n: "3",
    status: "Next",
    headline: "Conversation orchestration — lead / collaborator workflows.",
  },
  {
    n: "4",
    status: "Planned",
    headline: "SemPack memory — governed, compressed, role-specific context.",
  },
  {
    n: "5",
    status: "Future",
    headline: "Browser, IDE, and email agents — visible AI work environments.",
  },
];

export const comparison = [
  { cap: "Persistent employee identity", a: "✗", b: "✗", c: "Partial" },
  { cap: "Hire-by-role experience", a: "✗", b: "✗", c: "✗" },
  { cap: "Topic-based workstreams", a: "✗", b: "Partial", c: "✗" },
  { cap: "Conversation orchestration", a: "✗", b: "✗", c: "Partial" },
  { cap: "Work graph & audit trail", a: "✗", b: "✗", c: "Partial" },
  { cap: "Business-friendly pricing", a: "✗", b: "✗", c: "✗" },
];

export const orchestrationModes = [
  {
    name: "Direct reply",
    cmd: "@Sales write this email",
    desc: "Sales responds — no one else chimes in.",
  },
  {
    name: "Social broadcast",
    cmd: "hi everyone",
    desc: "One employee gives a short greeting, not a pile-on.",
  },
  {
    name: "Panel response",
    cmd: "@Research @Sales — thoughts?",
    desc: "Both give staggered, distinct perspectives.",
  },
  {
    name: "Lead / collaborator",
    cmd: "@Research work with @Sales",
    desc: "Research leads; Sales contributes after.",
  },
  {
    name: "Ambient collaboration",
    cmd: "I need research + sales help",
    desc: "The system picks the right team automatically.",
  },
];

export const intelligenceModes = [
  { name: "Efficient", use: "Support, quick replies", dot: "#1BA672" },
  { name: "Balanced", use: "Sales, marketing, product", dot: "#CB8A1B" },
  { name: "Strong", use: "Complex reasoning", dot: "#2563EB" },
  { name: "Long Context", use: "Deep research", dot: "#2F6FED" },
  { name: "Coding", use: "Engineering work", dot: "#9A6BCB" },
  { name: "Creative", use: "Copy, ideation", dot: "#D9483B" },
];

export const plans = {
  free: {
    name: "Free",
    price: "$0",
    tagline: "Feel the product loop.",
    cta: "Start free",
    featured: false,
    features: [
      "1 workspace · 2 AI employees",
      "Unlimited human seats",
      "Limited rooms & topics",
      "Efficient / Balanced intelligence",
      "Basic tasks & memory",
      "Small weekly AI Work Hours",
    ],
  },
  pro: {
    name: "Pro",
    price: "$15",
    tagline: "Run your personal AI workforce.",
    cta: "Get Pro",
    featured: true,
    features: [
      "10 AI employees · 25 rooms",
      "Unlimited human seats",
      "3 parallel AI employees",
      "Approvals, work logs, summaries",
      "Usage dashboard",
      "Limited long-context / coding",
      "~100–150 AI Work Hours / week",
    ],
  },
  plus: {
    name: "Pro Plus",
    price: "$35",
    tagline: "Power-user AI workforce.",
    cta: "Go Pro Plus",
    featured: false,
    features: [
      "30 AI employees · 100 rooms",
      "Unlimited human seats",
      "Multiple workspaces",
      "Long-context, coding, strong modes",
      "Priority runtime",
      "Early access to browser / IDE agents",
      "~300–500 AI Work Hours / week",
    ],
  },
};

export const blogPosts = [
  {
    slug: "hire-ai-employees-not-models",
    title: "Hire AI employees, not models",
    excerpt:
      "Why persistent identity, memory, and accountability matter more than which LLM powers your assistant.",
    date: "Jun 12, 2026",
    category: "Product",
    readTime: "6 min",
  },
  {
    slug: "ai-work-hours-explained",
    title: "AI Work Hours explained",
    excerpt:
      "A business-friendly way to understand weekly AI capacity — without token math or surprise bills.",
    date: "Jun 5, 2026",
    category: "Pricing",
    readTime: "4 min",
  },
  {
    slug: "orchestration-without-noise",
    title: "Orchestration without noise",
    excerpt:
      "How AdeHQ decides who leads, who collaborates, and who stays quiet in a multi-employee room.",
    date: "May 28, 2026",
    category: "Engineering",
    readTime: "8 min",
  },
  {
    slug: "memory-that-sticks",
    title: "Memory that sticks",
    excerpt:
      "Governed, source-linked memory scoped to workspace, room, topic, or employee — and why it matters.",
    date: "May 20, 2026",
    category: "Product",
    readTime: "5 min",
  },
];

export const careers = [
  {
    title: "Full-stack Engineer",
    team: "Product",
    location: "Remote · UK/EU",
    type: "Full-time",
  },
  {
    title: "AI Systems Engineer",
    team: "Engineering",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Product Designer",
    team: "Design",
    location: "Remote · UK/EU",
    type: "Full-time",
  },
  {
    title: "Developer Advocate",
    team: "Growth",
    location: "Remote",
    type: "Contract",
  },
];

export const stats = [
  { value: "∞", label: "Human seats, free" },
  { value: "6", label: "Intelligence modes" },
  { value: "<60s", label: "To hire an employee" },
  { value: "100%", label: "Actions you approve" },
];

export function statusColor(status: string) {
  switch (status) {
    case "Now":
      return "#1BA672";
    case "Next":
      return "#2563EB";
    case "Planned":
      return "#CB8A1B";
    default:
      return "#9B968B";
  }
}

export function compareColor(value: string) {
  if (value === "✓") return "#1BA672";
  if (value === "Partial") return "#CB8A1B";
  return "#C2C6D0";
}
