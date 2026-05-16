import '@testing-library/jest-dom';

// jsdom does not implement IntersectionObserver or window.scrollY
const mockIntersectionObserver = vi.fn(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
}));
vi.stubGlobal('IntersectionObserver', mockIntersectionObserver);

Object.defineProperty(window, 'scrollY', { value: 0, writable: true });
