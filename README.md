# Mega Contracting NY Group — Web Application

Official web platform for **Mega Contracting NY Group**, licensed general contractor in New York City (NYC DOB GC License #NYC-2005-8942). Built with Next.js App Router, Tailwind CSS, TypeScript, and deployed on Vercel.

---

## Environment Variables

| Variable | Description | Example / Default |
| :--- | :--- | :--- |
| `NEXT_PUBLIC_GA_ID` | **Google Analytics 4 Measurement ID**. When set, loads GA4 gtag script via `next/script` on client hydration. If omitted or empty, GA4 scripts are completely omitted from the rendered HTML. | `G-XXXXXXXXXX` |

### Analytics Tracking Events

When `NEXT_PUBLIC_GA_ID` is configured, the application dispatches the following conversion events:

1. **`generate_lead`**: Dispatched upon successful submission of an estimate request or quote form.
   - Parameters:
     - `service`: Target trade or category (e.g., `Roofing Services`, `Masonry Work`).
     - `borough`: Target NYC borough (e.g., `Bronx`, `Brooklyn`, `Manhattan`).
     - `urgency`: Timeline (e.g., `Emergency`, `This week`, `Within a month`, `Just planning`).
   - *Note: In accordance with privacy standards, zero personal data (names, emails, phone numbers) is transmitted to Google Analytics.*

2. **`phone_click`**: Dispatched on any tap/click on a `tel:` link across mobile and desktop.

3. **`email_click`**: Dispatched on any tap/click on a `mailto:` link across mobile and desktop.

4. **`emergency_click`**: Dispatched on any tap/click on the mobile sticky emergency bar, urgent repair callback request, or 24/7 emergency dispatch link.

---

## Development & Build Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Run ESLint validation
npm run lint

# Production Next.js Turbopack build
npm run build
```
