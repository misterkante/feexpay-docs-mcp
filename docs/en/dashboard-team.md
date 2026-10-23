---
id: dashboard-team
title: "Team"
group: dashboard
lang: en
source: https://docs.feexpay.me/?section=dashboard-team&version=v2
updated_at: 2026-10-23T10:08:13.250Z
---

# Team

Manage team members and their access

The **Team** menu allows you to invite collaborators to access your FeexPay dashboard with specific permissions, without sharing your main credentials.

![Team interface — member list](https://docs.feexpay.me/team/team_overview.png)

### Invite a member

1.  Access the <strong>Team</strong> menu from the sidebar.
2.  Click the <strong>+ Invite</strong> button in the top right.
3.  Enter the member's <strong>first name</strong>, <strong>last name</strong> and <strong>email address</strong>.
4.  Select the <strong>account type</strong> to assign to them.
5.  Check the <strong>permissions</strong> corresponding to the pages they should have access to.
6.  Click <strong>Send invitation</strong> — an invitation email will be sent to them.

![Invite member form — type and permissions](https://docs.feexpay.me/team/team_invite_form.png)

### Account types

| Type | Description |
| --- | --- |
| Developer | Access to technical sections (Developers, Webhooks, API keys). Ideal for a technical integrator. |
| Secondary Admin | Extended access to management sections. Specific permissions are defined during invitation. |

### Available permissions

When inviting, you choose the pages the member will have access to:

-   Dashboard
-   Transactions (Collections)
-   Shop (Boutiques)
-   Feexlinks
-   F-QR Code
-   And other available sections depending on account type

### Bulk payout sub-roles (List)

When a member has the **List** permission, you can give them one or more sub-roles, which define the bulk payout stages they can perform:

| Sub-role | What the member can do |
| --- | --- |
| Initiation | Create and save a payment list, and delete their own drafts. |
| Level 1 validation | Review and approve a list before the final validation. |
| Final validation | Give final approval to a list and trigger the transfer of funds. |

The same member cannot act at two stages of the same list: the initiator, the Level 1 validator and the final validator must be different. Unticking the List permission clears the member's sub-roles.

### Tracking invitations

After sending, the member appears in the list with the **Pending** badge until they accept the invitation. If the collaborator hasn't confirmed, you can **resend the invitation** by clicking the resend button in the Actions column.

![Team list — member pending confirmation](https://docs.feexpay.me/team/team_pending.png)

**Conseil :** Only grant necessary permissions to each member to ensure account security.
