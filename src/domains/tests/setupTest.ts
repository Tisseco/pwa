import '@testing-library/jest-dom/vitest'

vi.mock('zustand') // to make it work like Jest (auto-mocking)

// Explanation:
// The @radix-ui/react-toast library uses hasPointerCapture to determine pointer interactions (e.g., hover states).
// JSDOM, used for testing, does not support this API natively, which causes errors in tests.
// This mock provides a default implementation, returning false to simulate that no element has pointer capture.
// Writable is set to true, allowing override in specific test scenarios if needed.
beforeAll(() => {
  Object.defineProperty(HTMLElement.prototype, 'hasPointerCapture', {
    value: () => false,
    writable: true,
  });
});

if (!window.matchMedia) {
  window.matchMedia = (query) => ({
    matches: false, // Simulate the behavior of media request
    media: query,
    onchange: null,
    addListener: () => {}, // obsolete, but somes libs uses it
    removeListener: () => {}, // obsolete
    addEventListener: () => {},
    removeEventListener: () => {},
    // @ts-expect-error: Type '() => void' is not assignable to type '{ (event: Event): boolean; (event: Event): boolean; }'.
    dispatchEvent: () => {},
  });
}
