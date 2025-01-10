import '@testing-library/jest-dom/vitest'

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
