import config from "../config";

export const transactionsByDomain = (timePeriod, domainName) =>
  `${config.BASE_URL}/v1/allTransactionPerDomain/${config.CUSTOMER_ID}?auditUser=${config.AUDIT_USER}&domainName=${domainName}&timePeriod=${timePeriod}`;
