import type { LegalBlock } from "@/lib/legal/types";

export const blocks: LegalBlock[] = [
  { type: "p", text: `Effective date: [INSERT DATE]` },
  { type: "p", text: `AdeHQ uses third-party service providers to operate, secure, support, and improve the service. These providers may process personal data as subprocessors where we act as a processor for customer workspace content.` },
  { type: "p", text: `This page lists key subprocessors. The exact providers used may vary depending on feature usage, region, plan, and configuration.` },
  { type: "table", headers: [`Provider`, `Purpose`, `Data processed`, `Location`], rows: [
      [`Supabase`, `Database, authentication, storage`, `Account, workspace, files, metadata`, `[INSERT]`],
      [`Vercel`, `Hosting and deployment`, `Website/app logs, request metadata`, `[INSERT]`],
      [`SiliconFlow`, `AI model inference`, `Prompts, context, outputs, usage metadata`, `[INSERT]`],
      [`Vercel AI Gateway`, `AI gateway/model routing/search tools`, `Prompts, context, outputs, usage metadata`, `[INSERT]`],
      [`OpenAI / Anthropic / Google / other model providers`, `AI model inference where enabled`, `Prompts, context, outputs`, `[INSERT]`],
      [`Tavily / Perplexity / Exa / Parallel`, `Web search where enabled`, `Search queries, source results`, `[INSERT]`],
      [`Browserbase or browser provider`, `Browser research sessions`, `URLs, screenshots, extracted content, session metadata`, `[INSERT]`],
      [`Revolut Pay`, `Payments and billing`, `Billing and payment metadata`, `[INSERT]`],
      [`Email provider`, `Transactional email`, `Email address, email content, delivery metadata`, `[INSERT]`],
      [`Analytics provider`, `Product/website analytics`, `Usage events, device/browser metadata`, `[INSERT]`],
    ] },
  { type: "p", text: `We may update this list as providers change. Where required, customers may subscribe to subprocessor updates by contacting privacy@[domain].` },
];
