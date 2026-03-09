# PR Roadmap

This document outlines the logical sequence of pull requests (PRs) to transform the current static codebase into a premium, conversion-driven resort reservation platform using Next.js (App Router).

## Phase 1: Foundation & Architecture

### 1. `feat/init-nextjs-app-router`
- **Description**: Initialize the Next.js App Router project with TypeScript and Tailwind CSS.
- **Tasks**:
  - Run `npx create-next-app` inside the repository.
  - Set up `tsconfig.json` and strict typing.
  - Configure Tailwind CSS.
  - Move existing HTML/CSS assets (`index.html`, `images/`) into the `public/` and `src/app/` directories as a baseline static migration.
- **Testing**: Run dev server and verify the page loads identically to `index.html`.

### 2. `feat/design-system-tokens`
- **Description**: Create a shared component library and design system tokens.
- **Tasks**:
  - Extract CSS variables from `index.html` into `tailwind.config.ts`.
  - Create base UI components (Button, Typography, Card) using React and Tailwind.
  - Implement a warm, tropical-premium palette (deep greens, warm whites, gold accents).
- **Testing**: Storybook or usage comments in `src/components/ui`.

### 3. `feat/multi-tenant-subdomain-routing`
- **Description**: Implement multi-tenant routing using Next.js Middleware.
- **Tasks**:
  - Create a Next.js `middleware.ts` to read the Host header and rewrite to `/[tenant]/...`.
  - Setup dynamic routing `src/app/[tenant]/page.tsx` that fetches tenant config (logo, colors, room data) based on the subdomain.
  - Refactor the main page to inject tenant-specific CSS variables.

## Phase 2: Core Booking Flow (P0)

### 4. `feat/booking-state-zustand`
- **Description**: Setup global state management for the booking flow.
- **Tasks**:
  - Initialize a Zustand store (`useBookingStore`).
  - Manage state for check-in/out dates, guests, room type, add-ons, and promo code.
  - Add logic to handle abandoned booking recovery (persist to `localStorage`).

### 5. `feat/booking-date-picker-component`
- **Description**: Build the visual calendar date range picker (Step 1).
- **Tasks**:
  - Integrate `date-fns` (using `Asia/Manila` timezone).
  - Create a calendar component handling min-stay rules, blocked dates, and real-time availability placeholders.
  - Add to the multi-step booking wizard modal.

### 6. `feat/booking-room-selection-step`
- **Description**: Implement room selection cards (Step 2).
- **Tasks**:
  - Create room cards with photo carousels, amenity chips, and occupancy.
  - Add "Book Direct — Save X%" price comparison logic.
  - Add micro-animations (hover lift, shimmer loading).

### 7. `feat/booking-guest-details-step`
- **Description**: Implement guest details and add-ons selection (Step 3).
- **Tasks**:
  - Create form inputs for guest details (name, email, phone).
  - Add a section for selecting add-ons (breakfast, airport transfer, etc.).

### 8. `feat/booking-summary-payment-step`
- **Description**: Implement summary and payment processing (Step 4 & 5).
- **Tasks**:
  - Refactor existing Shopify integration into a server-side or secure client-side module, mapping product/variant per tenant.
  - Create a summary screen.
  - Build a confirmation page (Step 5) with a booking reference, WhatsApp deep link, and `.ics` calendar download.

## Phase 3: Conversion Optimization (P2)

### 9. `feat/conversion-urgency-banners`
- **Description**: Add scarcity and urgency indicators.
- **Tasks**:
  - Add "Only X rooms left this weekend" indicators to room cards.
  - Add "X people viewing this room right now" urgency banner to the booking flow.
  - Implement social proof ticker ("Maria from Calamba booked...").

### 10. `feat/conversion-exit-intent`
- **Description**: Implement exit-intent modals and sticky CTAs.
- **Tasks**:
  - Create an exit-intent modal ("Before you go — here's a special offer").
  - Add a sticky bottom CTA bar on mobile that appears after scrolling past the hero.
  - Capture and store UTM parameters for attribution.
  - Implement a WhatsApp CTA as primary contact fallback.

## Phase 4: Resort Owner Dashboard (P3)

### 11. `feat/dashboard-layout-routing`
- **Description**: Create the protected routes and layout for the owner dashboard.
- **Tasks**:
  - Setup `src/app/dashboard/...` routes.
  - Build the sidebar navigation and layout for non-technical users.

### 12. `feat/dashboard-calendar-view`
- **Description**: Implement the dashboard calendar.
- **Tasks**:
  - Create a calendar view of all bookings (color-coded by status).
  - Add a manual booking entry form for walk-ins and phone bookings.

### 13. `feat/dashboard-analytics-management`
- **Description**: Add analytics and room management to the dashboard.
- **Tasks**:
  - Build basic analytics charts (occupancy rate, monthly revenue, top sources).
  - Add a table for guest list export (CSV).
  - Implement UI for room/rate management (block dates, set seasonal pricing, toggle availability).
  - Add a simple onboarding success screen ("Your booking page is live at [subdomain]").
