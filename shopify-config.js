// ============================================================
//  SHOPIFY CONFIGURATION
//
//  Update this file with your Shopify store details and product IDs.
//  See SHOPIFY-SETUP.md for instructions.
// ============================================================

const SHOP_CONFIG = {
  domain: window.SHOPIFY_DOMAIN || 'hotel-ptp.myshopify.com',
  storefrontAccessToken: window.SHOPIFY_TOKEN || '',
};

// Map room buttons to Shopify product GIDs
// TODO: Replace with actual Shopify product IDs after creating products
const ROOM_PRODUCTS = {
  'Rainforest Suite': 'gid://shopify/Product/10164023984411',
  'River View Room': 'gid://shopify/Product/10164024901915',
  'Garden Villa': 'gid://shopify/Product/1016402955497',
};
