export const legalCompany = {
  legalName: "NexCache Limited",
  shortName: "NexCache",
  tradingName: "AdeHQ",
  companyNumber: "16831347",
  registeredOffice: "C/O 43 High Street, Marlow, England, SL7 1BA",
  website: "https://adehq.com",
  websites: ["https://adehq.com", "https://nexcache.com"] as const,
  domain: "nexcache.com",
  productDomain: "adehq.com",
  effectiveDate: "6 July 2026",
  icoNumber: "N/A",
  vatNumber: "517264004",
  subprocessorLocations:
    "United Kingdom, European Economic Area, and United States",
  email: "support@adehq.com",
  emails: {
    support: "support@adehq.com",
    privacy: "support@adehq.com",
    legal: "support@adehq.com",
    security: "support@adehq.com",
    billing: "support@adehq.com",
  },
  paymentProvider: "Revolut Pay",
  infrastructure:
    "Supabase, Vercel, AI model providers, browser/search providers",
} as const;

export function legalText(template: string): string {
  const contact = legalCompany.email;
  return template
    .replace(/\[INSERT COMPANY NUMBER\]/g, legalCompany.companyNumber)
    .replace(/\[INSERT REGISTERED OFFICE\]/g, legalCompany.registeredOffice)
    .replace(/\[INSERT DATE\]/g, legalCompany.effectiveDate)
    .replace(/\[INSERT IF REGISTERED\]/g, legalCompany.icoNumber)
    .replace(/\[INSERT IF APPLICABLE\]/g, legalCompany.vatNumber)
    .replace(/\[INSERT\]/g, legalCompany.subprocessorLocations)
    .replace(/\[INSERT DOMAIN\]/g, legalCompany.domain)
    .replace(/Nextation Limited/g, legalCompany.legalName)
    .replace(/\(“Nextation”/g, `(“${legalCompany.shortName}”`)
    .replace(/privacy@\[domain\]/g, contact)
    .replace(/legal@\[domain\]/g, contact)
    .replace(/support@\[domain\]/g, contact)
    .replace(/security@\[domain\]/g, contact)
    .replace(/billing@\[domain\]/g, contact)
    .replace(/privacy@nexcache\.com/g, contact)
    .replace(/legal@nexcache\.com/g, contact)
    .replace(/security@nexcache\.com/g, contact)
    .replace(/billing@nexcache\.com/g, contact);
}
