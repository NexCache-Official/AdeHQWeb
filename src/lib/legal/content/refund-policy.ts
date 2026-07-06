import type { LegalBlock } from "@/lib/legal/types";

export const blocks: LegalBlock[] = [
  { type: "p", text: `Effective date: [INSERT DATE]` },
  { type: "p", text: `This policy explains how cancellations and refunds work for AdeHQ paid plans, top-ups, and add-ons.` },
  { type: "h2", text: `1. Subscriptions` },
  { type: "p", text: `Paid subscriptions renew automatically unless cancelled before the renewal date.` },
  { type: "p", text: `You can cancel your subscription from your billing settings where available, or by contacting billing@[domain].` },
  { type: "p", text: `If you cancel, you will usually keep access to paid features until the end of the current billing period.` },
  { type: "h2", text: `2. Refunds` },
  { type: "p", text: `Unless required by law or expressly stated, subscription fees are non-refundable.` },
  { type: "p", text: `We may consider refunds at our discretion where:` },
  { type: "ul", items: [
      `you were charged in error`,
      `duplicate payment occurred`,
      `a technical issue prevented meaningful access`,
      `local consumer law requires a refund`,
    ] },
  { type: "h2", text: `3. AI Work Hours, credits, and top-ups` },
  { type: "p", text: `Unused AI Work Hours, credits, top-ups, browser/search capacity, or promotional usage generally do not convert to cash and are non-refundable unless required by law.` },
  { type: "h2", text: `4. Plan changes` },
  { type: "p", text: `If you upgrade, changes may take effect immediately and you may be charged a prorated or full amount depending on the plan.` },
  { type: "p", text: `If you downgrade, changes usually take effect at the next billing cycle unless stated otherwise.` },
  { type: "h2", text: `5. Free trials and promotions` },
  { type: "p", text: `Free trials, promotional credits, discounts, and founder offers may have additional conditions. We may modify or withdraw promotions where necessary to prevent abuse.` },
  { type: "h2", text: `6. Contact` },
  { type: "p", text: `Billing questions can be sent to billing@[domain].` },
];
