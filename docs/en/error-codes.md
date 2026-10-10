---
id: error-codes
title: "Error Codes"
group: api
lang: en
source: https://docs.feexpay.me/?section=error-codes&version=v2
updated_at: 2026-10-10T13:38:59.990Z
---

# Error Codes

This section lists all possible error codes you may encounter when using the FeexPay API, along with their meanings and recommended solutions.

Important Tip

Always check the 'success' field in the response before processing data. If 'success' is false, consult the 'error' object to understand the problem.

### API Error Codes

| Code | Meaning | Description | Solution |
| --- | --- | --- | --- |
| ERR\_INVALID\_API\_KEY | Invalid API Key | The provided API key is not valid or does not exist | Check your API key in the FeexPay dashboard |
| ERR\_SHOP\_NOT\_FOUND | Shop Not Found | The specified shop ID does not exist | Check your shop ID in the Developers menu |
| ERR\_INSUFFICIENT\_BALANCE | Insufficient Balance | Your shop balance is insufficient for this transaction | Top up your shop or reduce the transaction amount |
| ERR\_INVALID\_PHONE\_NUMBER | Invalid Phone Number | The phone number is not valid for the specified network | Check the phone format and ensure it matches the correct network |
| ERR\_INVALID\_AMOUNT | Invalid Amount | The amount is either too low or too high | Respect the amount limits (minimum 100, maximum 2,000,000 XOF) |
| ERR\_NETWORK\_UNAVAILABLE | Network Unavailable | The specified payment network is temporarily unavailable | Try again later or use another available network |
| ERR\_TRANSACTION\_FAILED | Transaction Failed | The transaction failed on the payment provider side | Retry the transaction or contact support if the problem persists |
| ERR\_DUPLICATE\_TRANSACTION | Duplicate Transaction | An identical transaction already exists | Check the status of the existing transaction before retrying |
| ERR\_IP\_NOT\_AUTHORIZED | IP Not Authorized | The server IP address is not authorized | Add your IP address to the whitelist in the dashboard |
| ERR\_PAYOUT\_NOT\_ENABLED | Payout Not Enabled | Payouts are not enabled for this shop | Contact support to enable payouts on your shop |

### FeexLink Error Codes

| HTTP Code | Error Code | Message |
| --- | --- | --- |
| 400 | — | Fill in required parameters |
| 404 | — | Shop not found |
| 404 | FEEXLINK\_NOT\_FOUND | Feexlink not found |
| 400 | — | Feexlink is not active |
| 400 | — | Feexlink usage limit reached |
| 410 | FEEXLINK\_EXPIRED | Feexlink expired |
| 400 | NETWORK\_UNAVAILABLE | Network not supported |
| 404 | — | {channel} channel not configured |

### Shop Error Codes (Public Lookup)

| HTTP Code | Error Code | Message |
| --- | --- | --- |
| 404 | — | Shop not found |
| 400 | — | Shop is disabled |

### Public API Errors

#### Authentication / Token

| HTTP Code | Error Code | Message |
| --- | --- | --- |
| 401 | UNAUTHORIZED | Invalid or expired token |
| 403 | FORBIDDEN | Access forbidden to this resource |
| 429 | RATE\_LIMIT\_EXCEEDED | Too many requests |
| 403 | IP\_NOT\_ALLOWED | IP not allowed |
| 403 | ACCESS\_DENIED | Country/network blocked |

#### Initiate Transaction (payin)

| HTTP Code | Error Code | Message |
| --- | --- | --- |
| 404 | — | Merchant or Shop not found |
| 404 | — | Shop is disabled |
| 404 | — | {channel} channel not configured |
| 400 | NETWORK\_UNAVAILABLE | Network not supported |
| 503 | NETWORK\_UNAVAILABLE | Network under maintenance |
| 502 | — | Bad Gateway (provider error) |
| 400 | MISSING\_REFERENCE | Missing transaction reference |

#### Transaction Status

| HTTP Code | Error Code | Message |
| --- | --- | --- |
| 400 | MISSING\_REFERENCE | Reference is required |
| 404 | NOT\_FOUND | Transaction not found |

### Error Response Format

All errors follow this standard format:

The \`code\` field is only present for business errors that have an explicit code. For validation errors (400), the \`message\` field can be an array of strings.

##### Error response example

```
{
  "statusCode": 404,
  "message": "Transaction not found",
  "code": "NOT_FOUND"
}
```

### Best Practices

-   ✓Always handle appropriate HTTP codes (4xx for client errors, 5xx for server errors)
-   ✓Always check the 'success' field before processing the response
-   ✓Log errors for debugging and tracking
-   ✓Display user-friendly error messages to end users
