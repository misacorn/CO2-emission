import config from "../config";

export const listByDomainUrl = timePeriod =>
  `${config.BASE_URL}/v1/byDomain/${config.CUSTOMER_ID}?auditUser=${config.AUDIT_USER}&timePeriod=${timePeriod}`;
