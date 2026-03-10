# Palette Persona Learnings

## UX & Accessibility
*   **Icon-Only Buttons:** The lightbox close button (`#close-gallery`) in `main-product.liquid` was missing an `aria-label`. Screen readers need `aria-label="Close Gallery"` to provide context.
*   **Semantic HTML:** Changed the `#open-gallery` div into a `<button>` element with an `aria-label="Open Image Gallery"` in `main-product.liquid` so that it is properly keyboard navigable by screen readers and accessible by standard user inputs.
*   **Cart Actions:** The "Remove" link in `main-cart.liquid` needed an `aria-label` to dynamically specify which item it's removing (`aria-label="Remove {{ item.product.title | escape }} from cart"`).
*   **Form Inputs:** The inputs in the booking form in `main-product.liquid` are properly wrapped in `input-group` divs with explicit `<label>` tags pointing to their respective `id`s. This is good practice.

## Performance
*   Ensure scroll-based UI effects are optimized using `requestAnimationFrame`. Currently, the navbar script in `layout/theme.liquid` binds directly to the scroll event without debouncing or a ticking flag, which could be optimized.

## Code Conventions
*   Ensure changes are kept under 50 lines.
*   No custom CSS additions are allowed for UX changes.
