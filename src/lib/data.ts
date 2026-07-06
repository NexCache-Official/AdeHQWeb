export const navLinks = [
  { href: "/product", label: "Product" },
  { href: "/pricing", label: "Pricing" },
  { href: "/use-cases", label: "Solutions" },
  { href: "/about", label: "Company" },
] as const;

export const navMega = {
  product: {
    label: "Product",
    href: "/product",
    sections: [
      {
        title: "Platform",
        links: [
          { href: "/product", label: "Overview", desc: "The operating system for AI employees" },
          { href: "/product#orchestration", label: "Orchestration", desc: "Coordinated replies, not noisy bots" },
          { href: "/product#how-it-works", label: "Intelligence modes", desc: "Efficient to long-context" },
          { href: "/pricing", label: "AI Work Hours", desc: "Weekly capacity, not token math" },
        ],
      },
      {
        title: "Capabilities",
        links: [
          { href: "/product", label: "Hire AI employees", desc: "Roles, briefs, candidates" },
          { href: "/product", label: "Rooms & topics", desc: "Structured workstreams" },
          { href: "/product", label: "Memory & context", desc: "Governed, source-linked" },
          { href: "/product", label: "Approvals & work logs", desc: "Trust by design" },
        ],
      },
    ],
  },
  solutions: {
    label: "Solutions",
    href: "/use-cases",
    sections: [
      {
        title: "By workflow",
        links: [
          { href: "/use-cases#launch", label: "Launch a product", desc: "Research to go-to-market" },
          { href: "/use-cases#research", label: "Market research", desc: "Competitor landscapes" },
          { href: "/use-cases#sales", label: "Sales outreach", desc: "Draft, approve, send" },
          { href: "/use-cases#client", label: "Client delivery", desc: "Scoped per-client rooms" },
        ],
      },
      {
        title: "By team",
        links: [
          { href: "/use-cases", label: "Solo founders", desc: "Your first AI workforce" },
          { href: "/use-cases", label: "Agencies", desc: "Multi-client operations" },
          { href: "/use-cases#ops", label: "Operations", desc: "Tasks across topics" },
          { href: "/pricing", label: "Team & Business", desc: "Scale AI work capacity" },
        ],
      },
    ],
  },
  resources: {
    label: "Resources",
    href: "/blog",
    sections: [
      {
        title: "Learn",
        links: [
          { href: "/blog", label: "Blog", desc: "Product & engineering notes" },
          { href: "/blog/ai-work-hours-explained", label: "AI Work Hours guide", desc: "How metering works" },
          { href: "/blog/hire-ai-employees-not-models", label: "Hire employees, not models", desc: "Why identity matters" },
          { href: "/pricing", label: "Pricing FAQ", desc: "Plans & limits explained" },
        ],
      },
      {
        title: "Company",
        links: [
          { href: "/about", label: "About AdeHQ", desc: "Our story & mission" },
          { href: "/careers", label: "Careers", desc: "Join the team" },
          { href: "/contact", label: "Contact", desc: "Sales & support" },
          { href: "/security", label: "Security", desc: "How we protect data" },
        ],
      },
    ],
  },
};

export const heroRotatingWords = [
  "research",
  "sales",
  "marketing",
  "operations",
  "client work",
  "launch planning",
];

export const logoStrip = [
  "Solo founders",
  "AI-native agencies",
  "Consultancies",
  "Creators",
  "Startup teams",
  "Freelancers",
  "Product studios",
  "Operators",
];

export const platformFeatures = [
  { href: "/product", icon: "users", title: "AI Workforce", desc: "Hire unlimited AI employees with roles, memory, and personality.", tag: "Core" },
  { href: "/product", icon: "message", title: "Rooms & topics", desc: "Organize work by room and focused workstreams — not endless threads.", tag: "Workspace" },
  { href: "/product#orchestration", icon: "git", title: "Orchestration", desc: "Lead, collaborate, or stay quiet — the system reads intent.", tag: "Intelligence" },
  { href: "/product", icon: "brain", title: "Governed memory", desc: "Source-linked context scoped to workspace, room, or employee.", tag: "Memory" },
  { href: "/product", icon: "shield", title: "Approvals", desc: "External actions wait for human sign-off before they execute.", tag: "Trust" },
  { href: "/product", icon: "list", title: "Work logs", desc: "Every meaningful action logged with duration, cost, and reason.", tag: "Audit" },
  { href: "/product", icon: "search", title: "Web search", desc: "Research employees browse, cite, and save findings to memory.", tag: "Research" },
  { href: "/product", icon: "globe", title: "Browser agent", desc: "Visible research with screenshots and source capture.", tag: "Agents" },
  { href: "/pricing", icon: "clock", title: "AI Work Hours", desc: "Weekly capacity you understand — no token math.", tag: "Pricing" },
  { href: "/product#how-it-works", icon: "cpu", title: "Intelligence modes", desc: "Efficient, Balanced, Strong, Long Context, Coding.", tag: "Models" },
  { href: "/use-cases", icon: "briefcase", title: "Client rooms", desc: "Scoped memory per client — no context bleed.", tag: "Agencies" },
  { href: "/contact", icon: "mail", title: "Human + AI DMs", desc: "Unlimited humans collaborate alongside AI in one workspace.", tag: "Teams" },
];

export const quickLinks = [
  { href: "/product", label: "Platform tour" },
  { href: "/pricing", label: "See pricing" },
  { href: "/use-cases", label: "Use cases" },
  { href: "/blog", label: "Read the blog" },
  { href: "/contact", label: "Book a demo" },
];

export const pricingPositioning = {
  headline: "Unlimited teammates. Unlimited AI employees. One simple weekly work allowance.",
  subheadline:
    "Invite your whole team and hire as many AI employees as you want. AdeHQ only meters active AI work — chat, search, browsing, file analysis, and report generation — through simple weekly AI Work Hours.",
  heroHeadline: "Hire an AI workforce. Invite your whole team. Pay for work, not seats.",
  noSeatLine:
    "AdeHQ does not charge per human seat or per AI employee. You get unlimited teammates and unlimited AI employees. Plans are based on weekly AI Work Hours — the actual work your AI workforce performs.",
  slackEdge:
    "Slack charges as teams grow. AdeHQ lets your team grow freely — you only pay for AI work capacity.",
};

export type Plan = {
  id: string;
  name: string;
  price: string;
  annualPrice: string | null;
  workHours: string;
  tagline: string;
  bestFor: string;
  cta: string;
  featured: boolean;
  intelligence: string;
  features: string[];
};

export const plans: Plan[] = [
  {
    id: "free",
    name: "Free",
    price: "$0",
    annualPrice: null,
    workHours: "10 / week",
    tagline: "Start your AI workforce for free.",
    bestFor: "Trying AdeHQ",
    cta: "Start free",
    featured: false,
    intelligence: "Efficient",
    features: [
      "Unlimited human team members",
      "Unlimited AI employees",
      "10 AI Work Hours / week",
      "Efficient intelligence",
      "Unlimited human messaging",
      "Basic rooms and topics",
      "Limited web search",
      "Browser research preview",
      "Basic artifacts and reports",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    price: "$19",
    annualPrice: "$199/yr",
    workHours: "125 / week",
    tagline: "For founders and operators who want AI employees working every week.",
    bestFor: "Solo founders & operators",
    cta: "Get Pro",
    featured: true,
    intelligence: "Balanced",
    features: [
      "Unlimited human team members",
      "Unlimited AI employees",
      "125 AI Work Hours / week",
      "Balanced intelligence",
      "Smart model routing",
      "Web search included",
      "Browser research included",
      "File analysis & reports",
      "Workspace memory & work logs",
      "Usage dashboard",
    ],
  },
  {
    id: "team",
    name: "Team",
    price: "$38",
    annualPrice: "$399/yr",
    workHours: "250 / week",
    tagline: "For small teams running daily work through AdeHQ.",
    bestFor: "Small teams",
    cta: "Get Team",
    featured: false,
    intelligence: "Balanced + Strong",
    features: [
      "Everything in Pro",
      "250 AI Work Hours / week",
      "More web search & browser research",
      "Stronger intelligence access",
      "Team usage visibility",
      "Higher file & artifact capacity",
      "Shared workspace memory",
      "Priority email support",
    ],
  },
  {
    id: "business",
    name: "Business",
    price: "$99",
    annualPrice: "$999/yr",
    workHours: "650 / week",
    tagline: "For companies using AI employees across multiple workflows.",
    bestFor: "Growing businesses",
    cta: "Get Business",
    featured: false,
    intelligence: "Strong + Long Context",
    features: [
      "Everything in Team",
      "650 AI Work Hours / week",
      "Advanced intelligence access",
      "Long-context work",
      "High-volume browser research",
      "Advanced usage dashboard",
      "Priority model routing",
      "Advanced admin controls",
      "Priority support",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    annualPrice: "Custom",
    workHours: "Custom",
    tagline: "For larger companies with custom AI workforce needs.",
    bestFor: "Larger companies",
    cta: "Contact sales",
    featured: false,
    intelligence: "Custom",
    features: [
      "Custom AI Work Hours",
      "Custom model & provider routing",
      "Custom security review",
      "Custom onboarding",
      "Dedicated support",
      "Invoicing and contracts",
      "Optional private deployment",
    ],
  },
];

export const pricingComparisonRows = [
  { label: "Price", free: "$0", pro: "$19/mo", team: "$38/mo", business: "$99/mo", enterprise: "Custom" },
  { label: "Annual price", free: "—", pro: "$199/yr", team: "$399/yr", business: "$999/yr", enterprise: "Custom" },
  { label: "Human team members", free: "Unlimited", pro: "Unlimited", team: "Unlimited", business: "Unlimited", enterprise: "Unlimited", highlight: true },
  { label: "AI employees", free: "Unlimited", pro: "Unlimited", team: "Unlimited", business: "Unlimited", enterprise: "Unlimited", highlight: true },
  { label: "Human messaging", free: "Unlimited", pro: "Unlimited", team: "Unlimited", business: "Unlimited", enterprise: "Unlimited", highlight: true },
  { label: "Weekly AI Work Hours", free: "10", pro: "125", team: "250", business: "650", enterprise: "Custom", highlight: true },
  { label: "Weekly reset", free: "Yes", pro: "Yes", team: "Yes", business: "Yes", enterprise: "Custom" },
  { label: "When out of Work Hours", free: "Paused until reset", pro: "Paused until reset", team: "Paused until reset", business: "Paused until reset", enterprise: "Custom limits" },
  { label: "Intelligence level", free: "Efficient", pro: "Balanced", team: "Balanced + Strong", business: "Strong + Long Context", enterprise: "Custom" },
  { label: "Web search", free: "Limited", pro: "Included", team: "Higher usage", business: "Heavy usage", enterprise: "Custom" },
  { label: "Browser research agent", free: "Preview", pro: "Included", team: "More included", business: "High-volume", enterprise: "Custom" },
  { label: "File analysis", free: "Limited", pro: "Standard", team: "Higher limits", business: "High limits", enterprise: "Custom" },
  { label: "Artifacts & reports", free: "Limited", pro: "Included", team: "Included", business: "Included", enterprise: "Custom" },
  { label: "Memory & context", free: "Basic", pro: "Included", team: "Included", business: "Advanced", enterprise: "Custom" },
  { label: "Work logs", free: "Included", pro: "Included", team: "Included", business: "Included", enterprise: "Advanced" },
  { label: "Admin controls", free: "Basic", pro: "Basic", team: "Team controls", business: "Advanced", enterprise: "Enterprise" },
  { label: "Usage dashboard", free: "Basic", pro: "Included", team: "Team usage", business: "Advanced", enterprise: "Custom reporting" },
  { label: "Support", free: "Community / email", pro: "Email", team: "Priority email", business: "Priority support", enterprise: "Dedicated" },
];

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
    q: "Do you charge per human seat or per AI employee?",
    a: "No. Every plan includes unlimited human team members and unlimited AI employees. AdeHQ only meters active AI work through weekly AI Work Hours — not seats.",
  },
  {
    q: "What are AI Work Hours?",
    a: "AI Work Hours are AdeHQ's simple way to measure AI workload. Instead of tokens or credits, every workspace gets a weekly pool. Simple messages use very little. Web research, browser sessions, large files, and long-context analysis use more.",
  },
  {
    q: "What happens when we run out of AI Work Hours?",
    a: "AI employees pause until your weekly reset. Human messaging and collaboration never stop. There is no surprise overage billing.",
  },
  {
    q: "How is this different from ChatGPT or Slack?",
    a: "ChatGPT is session-based chat. Slack charges per seat as teams grow. AdeHQ gives you persistent AI employees, unlimited humans, and team coordination — and you only pay for AI work capacity.",
  },
  {
    q: "Who is AdeHQ for?",
    a: "Solo founders, freelancers, creators, agencies, and small teams who want a real AI workforce without per-seat pricing.",
  },
  {
    q: "What's on the free plan?",
    a: "Unlimited humans, unlimited AI employees, 10 AI Work Hours per week, Efficient intelligence, and the full workspace loop — designed to try AdeHQ and build your first workforce.",
  },
];

export const pricingFaqs = [
  {
    q: "What happens when I run out of AI Work Hours?",
    a: "AI employees pause until your weekly reset. Human messaging and collaboration continue without interruption. There is no surprise overage billing.",
  },
  {
    q: "Are human seats and AI employees really unlimited?",
    a: "Yes — on every plan, including Free. Invite your whole team and hire as many AI employees as you want. Plans differ only in weekly AI Work Hours and intelligence capabilities.",
  },
  {
    q: "Can I upgrade or downgrade anytime?",
    a: "Yes. Change plans whenever you like. Your employees keep their identity, memory, role, and history across plan changes.",
  },
  {
    q: "Do unused AI Work Hours roll over?",
    a: "No. Plan AI Work Hours reset weekly and do not roll over. When the pool runs out, AI work pauses until the next reset.",
  },
  {
    q: "Why don't you charge per seat like Slack?",
    a: "Because AdeHQ is an AI workforce platform, not a chat app. Your humans and AI employees should grow freely. You only pay for the AI work your workforce actually performs.",
  },
  {
    q: "What's included in Enterprise?",
    a: "Custom AI Work Hours, custom model routing, security review, dedicated support, invoicing, and optional private deployment discussions.",
  },
];

export const comparison = [
  { cap: "Unlimited human members", a: "✗", b: "✗", c: "✗" },
  { cap: "Unlimited AI employees", a: "✗", b: "✗", c: "✗" },
  { cap: "No per-seat pricing", a: "✗", b: "✗", c: "✗" },
  { cap: "Persistent employee identity", a: "✗", b: "✗", c: "Partial" },
  { cap: "Hire-by-role experience", a: "✗", b: "✗", c: "✗" },
  { cap: "Work graph & audit trail", a: "✗", b: "✗", c: "Partial" },
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
  { value: "∞", label: "Human members" },
  { value: "∞", label: "AI employees" },
  { value: "0", label: "Per-seat fees" },
  { value: "125+", label: "Work Hours on Pro" },
];

export function compareColor(value: string) {
  if (value === "✓") return "#1BA672";
  if (value === "Partial") return "#CB8A1B";
  return "#C2C6D0";
}
