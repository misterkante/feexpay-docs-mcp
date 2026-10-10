---
id: dashboard-adresse-ip
title: "IP Address"
group: dashboard
lang: en
source: https://docs.feexpay.me/?section=dashboard-adresse-ip&version=v2
updated_at: 2026-10-10T13:38:59.990Z
---

# IP Address

Manage authorized IP addresses for your store

The **IP Address** menu allows you to define authorized IP addresses to make calls to the FeexPay API from your server. This is an essential security measure for using the **Payout API** — without a registered IP, requests will be rejected.

![IP list — no address registered](https://docs.feexpay.me/adresse-ip/adresse_ip_overview.png)

### Add an IP address

1.  Access the <strong>IP Address</strong> menu from the sidebar.
2.  Click the <strong>+ Add an IP</strong> button in the top right.
3.  Enter your server's **IP address** (ex: `81.91.231.207`).
4.  Add a **label** to identify this IP (ex: _production_, _test-server_).
5.  Click <strong>Add</strong> to save.

![Add new IP modal — IP Address and Label](https://docs.feexpay.me/adresse-ip/adresse_ip_form.png)

### Registered IP list

Once added, the IP appears in the list with the following information:

| Column | Description |
| --- | --- |
| IP Address | The registered IP address. |
| Label | The name you assigned to this IP. |
| Status | Toggle to enable or disable the IP without deleting it (**Active** / inactive). |
| Creation date | Date and time when the IP was added. |
| Actions | Edit or delete the IP address. |

![IP list — active IP with status and actions](https://docs.feexpay.me/adresse-ip/adresse_ip_list.png)

⚠️

**Important :** Adding an IP address is mandatory to use the <strong>Payout API</strong>. Without an authorized IP, all payout API requests will be rejected. Make sure to add your production server's IP before starting your integrations.
