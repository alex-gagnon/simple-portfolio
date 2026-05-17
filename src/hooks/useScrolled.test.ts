import { renderHook, act } from '@testing-library/react';
import { useScrolled } from './useScrolled';

describe('useScrolled', () => {
    beforeEach(() => {
        Object.defineProperty(window, 'scrollY', { value: 0, writable: true });
    });

    it('returns false when page is at top', () => {
        const { result } = renderHook(() => useScrolled(60));
        expect(result.current).toBe(false);
    });

    it('returns true after scrolling past threshold', () => {
        const { result } = renderHook(() => useScrolled(60));
        act(() => {
            Object.defineProperty(window, 'scrollY', { value: 100, writable: true });
            window.dispatchEvent(new Event('scroll'));
        });
        expect(result.current).toBe(true);
    });

    it('returns false when scroll is below threshold', () => {
        const { result } = renderHook(() => useScrolled(60));
        act(() => {
            Object.defineProperty(window, 'scrollY', { value: 30, writable: true });
            window.dispatchEvent(new Event('scroll'));
        });
        expect(result.current).toBe(false);
    });
});
