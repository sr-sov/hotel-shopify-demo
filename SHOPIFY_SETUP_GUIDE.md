# Shopify Admin Backend Setup Guide

This guide provides exactly what you need to configure your Shopify Admin to match the **Paradise Cove Eco-Resort** Liquid theme. Since you are building a hotel booking experience, you will use standard Shopify Products to represent your *Rooms*.

---

## 1. Product Structure (The Rooms)

You need to create 3 Products in your Shopify Admin (**Products > Add product**). The theme's "Featured Rooms" and "Product Page" layouts are built to read this specific data.

### Room 1: Rainforest Suite
To create the centerpiece suite:
1. **Title**: `Rainforest Suite`
2. **Description**: 
   ```html
   <p>Stay in the heart of the rainforest. This beautifully appointed suite features floor-to-ceiling windows, a private plunge pool, and sustainable luxury finishes designed to blend perfectly with the natural surroundings. Experience unparalleled tranquility while maintaining access to world-class resort amenities.</p>
   ```
3. **Media**: Upload the `room-suite.png` file (found in the `assets/` folder).
4. **Pricing**: Set the price to `$420.00` (or your local equivalent).
5. **Inventory**: Uncheck "Track quantity" (unless you are using a 3rd-party calendar sync app like BookThatApp). Check "Continue selling when out of stock."
6. **Shipping**: Uncheck "This is a physical product".

### Room 2: Ocean View Room
1. **Title**: `Ocean View Room`
2. **Description**:
   ```html
   <p>Wake up to panoramic ocean views from your private balcony. This room features a king-size bed with premium linens, a spa-inspired bathroom, and seamless access to our pristine private beach.</p>
   ```
3. **Media**: Upload the `room-premium.png` file.
4. **Pricing**: Set the price to `$310.00`.
5. **Shipping**: Uncheck "This is a physical product".

### Room 3: Garden Villa
1. **Title**: `Garden Villa`
2. **Description**:
   ```html
   <p>A secluded villa surrounded by lush tropical gardens. Enjoy an expansive open-air living space, handcrafted wooden furnishings, and private pathways leading directly to the resort's central amenities.</p>
   ```
3. **Media**: Upload the `springs.png` or `pool.png` file as a placeholder.
4. **Pricing**: Set the price to `$550.00`.
5. **Shipping**: Uncheck "This is a physical product".

---

## 2. Connecting the Homepage Grid

Once you create the products above, you must link them to the homepage:
1. Go to **Online Store > Themes > Customize**.
2. Click on the **Featured Rooms** section on the left sidebar.
3. For each of the 3 "Room" blocks, click **Select Product** and assign the Rainforest Suite, Ocean View Room, and Garden Villa.
4. The theme will automatically pull their Image, Title, and Price into the grid.

---

## 3. How the Booking Flow Works (Line Item Properties)

The `main-product.liquid` file has been custom-coded to include **Check-in**, **Check-out**, and **Guests** inputs mathematically.

**You do NOT need to install an app for this basic flow to work.**

1. When a guest views the `Rainforest Suite` product page, they select their dates.
2. When they click **Reserve**, Shopify's underlying `<form data-type="add-to-cart-form">` groups these datetimes into standard Shopify "Line Item Properties".
3. Inside your Shopify Admin orders panel (**Orders**), the reservation will look like this:
   - **Product**: Rainforest Suite (x1)
   - **Properties**: 
     - Check-in: 2026-03-15
     - Check-out: 2026-03-20
     - Guests: 2 Adults
   - **Total**: $420.00 (Note: basic Shopify multiplies by quantity of rooms, *not* nights. For automatic per-night multiplication, you will need to add a booking script or app like Sesami/BookThatApp later).

---

## 4. Setting up the Navigation

To make the sticky header links work smoothly:
1. Go to **Online Store > Navigation** > **Main menu**.
2. Add the following menu items, but use **Anchor Links** instead of page URLs:
   - Name: `Rooms` | Link: `/#rooms`
   - Name: `Amenities` | Link: `/#amenities`
   - Name: `Experience` | Link: `/#experience`
3. Because the theme uses a custom hardcoded `<nav>` for the frosted glass effect, the links in the Liquid file currently point directly to these anchors. No further Shopify Admin Menu setup is actually required unless you decide to dynamically generate the links via `linklists.main-menu.links` in the future.

---

## 5. Setting Up Collections

To utilize the new Collection templates:
1. Go to **Products > Collections**.
2. **"All Accommodations"**: Create a collection named exactly `All`. Shopify should give this the handle `all`. Set it to automatically pull in all products with the condition `Product price is greater than 0`.
3. **"Budget Options"**: Create a collection named `Budget`. Shopify should assign the handle `budget`. Set a condition like `Product price is less than $400`.
4. The theme uses a custom `main-collection.liquid` section to display these elegantly, including dynamic item counts and pagination.

---

## 6. Developer Documentation

### Setup & Local Development
- **Shopify CLI**: This theme should be developed locally using Shopify CLI (`shopify theme dev`). 
- **Dependencies**: No 3rd-party CSS frameworks (like Tailwind) or JS libraries (like jQuery) are used. Everything relies on Vanilla CSS and ES6 JavaScript.

### Core Architecture & APIs
- **Liquid Overrides**: The theme uses native Liquid files but relies heavily on Shopify 2.0 JSON templates (`templates/index.json`, `templates/product.json`, `templates/collection.json`) to allow section modularity in the Admin Customizer.
- **Product API Drop**: The codebase explicitly uses modern object drop references (e.g., `block.settings.product` returns a full product object, not a string handle) and modern image filters (`image_url`, not `img_url`). If editing `.liquid` files, strictly adhere to the modern Drops API.
- **CSS Architecture**: All styling logic is maintained inside `assets/theme.css` via CSS Root Variables (`--bg`, `--accent`, etc). The only exception is component-scoped styles loaded at the top of section files (e.g., the grid layouts inside `main-product.liquid`).

### Local vs. Production Nuances
- **Booking Engine Limitations**: As coded, the HTML Booking Form captures Check-In/Check-Out strings as Line Item Properties. In a local dev environment, this simply adds to cart. In Production, Shopify does *not* natively calculate length-of-stay multpliers for prices. You must either integrate a serverless webhook to mutate cart prices or install a booking app (Sesami/BookThatApp) prior to launch.
