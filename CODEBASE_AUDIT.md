# Codebase Audit

## Overview
The current repository was expected to be a Next.js (App Router) application but is currently a set of static HTML files (`index.html`, `resort-demo.html`) with embedded vanilla CSS and JavaScript. It serves as a static UI prototype for the Paradise Cove Eco-Resort and contains a basic Shopify Buy Button integration.

## Architecture & Tech Stack Gaps
- **Current Stack**: Static HTML, Vanilla CSS, Vanilla JS.
- **Target Stack**: Next.js (App Router), React Server Components, TypeScript, Zustand/Context, date-fns.
- **Gap**: The entire application needs to be initialized as a Next.js App Router project. Existing HTML/CSS must be refactored into React components and a proper design system (e.g., Tailwind CSS).

## Feature Gaps (Against Requirements)

### P0 — Core Booking Flow (Agoda-style UX)
- **Current**: A simple booking bar that captures check-in/out dates, guests, and room type. Clicking "Book Now" directly redirects to Shopify checkout or shows an alert.
- **Missing**:
  - Multi-step booking wizard with animations and progress bar.
  - Visual calendar date range picker with min-stay rules, blocked dates, and real-time availability.
  - Room selection cards showing carousel, amenity chips, occupancy, and price comparisons ("Book Direct — Save X%").
  - Guest details + add-ons selection (breakfast, airport transfer, etc.).
  - Confirmation page with WhatsApp deep link and calendar download.
  - Scarcity indicators ("Only 2 rooms left") and social proof ticker ("Maria from Calamba booked...").
  - Mobile-first bottom-sheet modals.

### P1 — Premium Visual Design
- **Current**: Vanilla CSS implementation. Good baseline design (warm, tropical-premium palette), but lacks a formal design system.
- **Missing**:
  - React-based design system using Tailwind CSS tokens.
  - Micro-animations (hover lift, shimmer states) implemented in Framer Motion or CSS.
  - Glassmorphism effects structured in reusable UI components.
  - Lighthouse mobile optimization (current static site might score well, but a React app needs careful optimization).

### P2 — Conversion Optimization
- **Current**: None implemented.
- **Missing**:
  - Exit-intent modal.
  - Urgency banner.
  - Sticky bottom CTA bar on mobile.
  - Abandoned booking recovery (localStorage).
  - UTM parameter capture.
  - WhatsApp CTA fallback.

### P3 — Resort Owner Dashboard
- **Current**: Not present.
- **Missing**:
  - Dashboard routes and layouts for non-technical users.
  - Calendar view of bookings.
  - Manual booking entry.
  - Basic analytics and guest list export.
  - Room/rate management.
  - Onboarding flow.

### P4 — Multi-tenant Architecture
- **Current**: Static site for a single tenant (Paradise Cove).
- **Missing**:
  - Subdomain routing or custom domain CNAME support in Next.js middleware.
  - Tenant config store (logo, colors, room data) fetched dynamically based on host.
  - Dynamic Shopify product mapping per tenant.
  - Theming via CSS variables or Tailwind config injection per tenant.

## Conclusion
The repository requires a complete ground-up initialization into a Next.js application, followed by migrating the existing static assets and UI into a React component hierarchy, and then building out the complex booking, multi-tenant, and dashboard logic.
