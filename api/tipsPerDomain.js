import config from "../config";

export const tipsPerDomain = domainName =>
  `${config.BASE_URL}/v1/smartTipsPerDomain/${config.CUSTOMER_ID}?auditUser=${config.AUDIT_USER}&domainName=${domainName}`;
