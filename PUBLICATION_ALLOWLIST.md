# Publication Allowlist

Only these six paths are authorized for public publication:

- `.nojekyll`
- `index.html`
- `styles.css`
- `script.js`
- `README.md`
- `PUBLICATION_ALLOWLIST.md`

The language dictionaries and local canvas logic in `script.js` are part of
the public candidate content and must be audited in full, in both languages.
No other file from the private Daycare Platform repository may be copied into
this independent portfolio without a new content and sensitive-data review.

## Explicitly Excluded

- application source code
- private repository history or branches
- GitHub Actions workflows
- Terraform source, state, plans, variable files, or backend configuration
- Docker and deployment configuration
- raw AWS Journey documents or the complete private README
- account IDs, full ARNs, resource IDs, generated hostnames, IP addresses, or
  live endpoints
- credentials, password material, hashes, tokens, secrets, database URLs, or
  environment values
- real organization, child, guardian, staff, pilot, or user data
- raw logs, test exports, billing exports, screenshots with operational data,
  or unreviewed architecture exports

## Required Pre-Publication Review

Before every public update:

1. Confirm the complete publication file set matches these six paths. Reject
   nested files, links to outside folders, or generated artifacts.
2. Search for AWS account IDs, ARNs, access keys, session tokens, private keys,
   passwords, password hashes, database URLs, secret keys, private endpoints,
   generated AWS resource IDs, email addresses, and IP addresses.
3. Confirm all architecture claims remain classified as implemented, validated,
   documented, or future production work.
4. Confirm staging is not described as production or highly available.
5. Review both languages on desktop, tablet, and mobile. Verify document
   language, accessible labels, local preference, and reduced-motion behavior.
6. Confirm assets are relative and local, with no external scripts, fonts,
   analytics, forms, or API calls. The only allowed external destination is
   the professional profile link: `https://github.com/flaviobox`.
7. Review the complete public diff before each update. A clean scan does not
   authorize adding paths outside this allowlist.
