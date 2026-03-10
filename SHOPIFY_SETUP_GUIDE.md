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
