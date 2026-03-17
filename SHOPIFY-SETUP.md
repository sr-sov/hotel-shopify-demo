# Shopify Booking Integration — Setup Guide

> For **Paradise Cove Eco-Resort** (`resort-demo-v2.html`)

---

## Quick Start

This website is pre-wired for Shopify's **Buy Button SDK** to handle room bookings. When a guest clicks "Book Now", their reservation details (dates, guests, room type) are passed to Shopify checkout as line item properties.

### Step 1: Create a Shopify Store

1. Go to [shopify.com](https://shopify.com) and create a store
2. Choose the Basic plan (affordable for small businesses)

### Step 2: Create Room Products

In **Shopify Admin → Products**, create one product per room:

| Product Title | Price | Product Type |
|---|---|---|
| Rainforest Suite | ₱18,500 | Accommodation |
| River View Room | ₱12,800 | Accommodation |
| Garden Villa | ₱24,000 | Accommodation |

**Tip**: Add room images, descriptions, and use variants for different date ranges or seasons.

### Step 3: Enable Storefront API

1. Go to **Settings → Apps and sales channels → Develop apps**
2. Click **Create an app** → name it "Website Integration"
3. Click **Configure Storefront API scopes** and enable:
   - ✅ `unauthenticated_read_product_listings`
   - ✅ `unauthenticated_write_checkouts`
   - ✅ `unauthenticated_read_checkouts`
4. Click **Install app**
5. Go to **API credentials** tab → copy the **Storefront access token**

### Step 4: Connect to the Website

To maintain security, **do not hardcode your Storefront Access Token** in `shopify-config.js`. Instead, ensure it is provided at runtime via the global `window` object.

1. Create a `.env` file from the provided `.env.example`.
2. Ensure your build or deployment process injects `SHOPIFY_DOMAIN` and `SHOPIFY_TOKEN` into the `window` object of the client-side code.

In `shopify-config.js`, the configuration is pre-wired to read from these global variables:

```javascript
const SHOP_CONFIG = {
  domain: window.SHOPIFY_DOMAIN || 'hotel-ptp.myshopify.com',
  storefrontAccessToken: window.SHOPIFY_TOKEN || '',
};
```

Then update the product IDs in the same file:

```javascript
const ROOM_PRODUCTS = {
  'Rainforest Suite': 'gid://shopify/Product/XXXXXXXXX',  // ← Your product ID
  'River View Room':  'gid://shopify/Product/XXXXXXXXX',
  'Garden Villa':     'gid://shopify/Product/XXXXXXXXX',
};
```

**How to find product IDs**: In Shopify Admin, go to Products → click a product → the ID is the number in the URL (e.g., `admin/products/7654321098` → use `gid://shopify/Product/7654321098`).

### Step 5: Test

1. Open the website in a browser
2. Click any "Book Now" button
3. You should be redirected to your Shopify checkout with the room and booking details

---

## How Booking Details Flow

```
Guest fills booking bar → Clicks "Book Now" on a room
  ↓
JavaScript captures: check-in, check-out, guests, promo code, room type
  ↓
Creates a Shopify checkout with line item customAttributes:
  - Check-in: 2026-03-15
  - Check-out: 2026-03-18
  - Guests: 1 Room, 2 Guests
  - Room Type: Rainforest Suite
  ↓
Guest completes payment on Shopify checkout
  ↓
Order appears in Shopify Admin with all booking details visible
```

---

## Optional: Advanced Booking Features

If the client needs **date-based availability** (block booked dates, calendar picker, etc.):

| App | Cost | What it Does |
|---|---|---|
| [BookThatApp](https://apps.shopify.com/bookthatapp) | $19.95/mo | Full booking/calendar integration |
| [Sesami](https://apps.shopify.com/sesami) | $19/mo | Appointment & resource scheduling |
| [Ira Hotel Booking](https://apps.shopify.com/ira-booking) | $12/mo | Hotel-specific booking engine |

These apps add calendar pickers, prevent double-bookings, and automate confirmation emails.

---

## File Structure

```
portfolio/
├── resort-demo-v2.html    ← Main resort website (all-in-one)
├── resort-demo.html       ← Alt dark theme version
├── SHOPIFY-SETUP.md       ← This guide
└── images/
    ├── hero.png
    ├── room-suite.png
    ├── room-premium.png
    ├── pool.png
    ├── springs.png
    ├── dining.png
    └── spa.png
```

---

*Built by Joshua David — Full-Stack Developer*
