import sys
import os
from playwright.sync_api import sync_playwright

def verify_frontend():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        file_path = f"file://{os.path.abspath('index.html')}"
        page.goto(file_path)

        # Tab to room card
        page.keyboard.press("Tab")

        # Open Modal
        page.locator('.room-card').first.click()
        page.wait_for_selector('#roomModal.active')

        # Open Lightbox
        page.locator('#viewAllPhotosBtn').click()
        page.wait_for_selector('#lightbox.active')

        # Take screenshot of the open lightbox
        os.makedirs('/home/jules/verification', exist_ok=True)
        screenshot_path = '/home/jules/verification/lightbox.png'
        page.screenshot(path=screenshot_path)

        browser.close()
        return screenshot_path

if __name__ == "__main__":
    verify_frontend()
