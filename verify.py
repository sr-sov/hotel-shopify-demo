from playwright.sync_api import sync_playwright
import os

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()

        # Load the index.html page
        file_path = f"file://{os.path.abspath('index.html')}"
        page.goto(file_path, wait_until="load") # Make sure page has fully loaded

        # Wait for a little bit for scripts to execute (just in case)
        page.wait_for_timeout(1000)

        # Check if SHOP_CONFIG and ROOM_PRODUCTS are defined in the global window object
        has_shop_config = page.evaluate("typeof window.SHOP_CONFIG !== 'undefined'")
        has_room_products = page.evaluate("typeof window.ROOM_PRODUCTS !== 'undefined'")

        # In browser, variables declared with `const` in a top-level script tag might not become properties of the `window` object directly.
        # So we can just try to evaluate them directly.
        try:
            shop_config = page.evaluate("SHOP_CONFIG")
            has_shop_config = True
        except Exception as e:
            has_shop_config = False
            print(f"Error accessing SHOP_CONFIG: {e}")

        try:
            room_products = page.evaluate("ROOM_PRODUCTS")
            has_room_products = True
        except Exception as e:
            has_room_products = False
            print(f"Error accessing ROOM_PRODUCTS: {e}")


        # Assert they are present
        assert has_shop_config, "SHOP_CONFIG is not defined in the global scope"
        assert has_room_products, "ROOM_PRODUCTS is not defined in the global scope"

        print("Success: SHOP_CONFIG and ROOM_PRODUCTS are defined in the global scope")

        # Verify their actual values
        shop_domain = page.evaluate("SHOP_CONFIG.domain")
        assert shop_domain == 'hotel-ptp.myshopify.com', f"Expected 'hotel-ptp.myshopify.com', but got {shop_domain}"

        room_products_keys = page.evaluate("Object.keys(ROOM_PRODUCTS)")
        assert 'Rainforest Suite' in room_products_keys, f"Expected 'Rainforest Suite' in ROOM_PRODUCTS, but got {room_products_keys}"

        print("Success: SHOP_CONFIG and ROOM_PRODUCTS values verified successfully")

        browser.close()

if __name__ == '__main__':
    run()