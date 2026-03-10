
## 2024-03-08 - Added Global Focus Visible & Missing ARIA Labels
**Learning:** Found an accessibility issue pattern specific to this app's components: interactive elements lack global keyboard focus indicators, and custom modals/lightboxes omit `aria-label`s on their icon-only close buttons.
**Action:** Always check the root CSS for `:focus-visible` styles and verify custom interactive overlays for ARIA compliance when dealing with legacy or static templates.
