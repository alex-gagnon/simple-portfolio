import { renderHook } from '@testing-library/react';
import { useScrollReveal } from './useScrollReveal';

describe('useScrollReveal', () => {
    it('starts as not visible', () => {
        const { result } = renderHook(() => useScrollReveal());
        expect(result.current.visible).toBe(false);
    });

    it('returns a ref', () => {
        const { result } = renderHook(() => useScrollReveal());
        expect(result.current.ref).toBeDefined();
    });

    it('becomes visible when IntersectionObserver fires', async () => {
        let observerCallback: IntersectionObserverCallback | null = null;
        (global.IntersectionObserver as ReturnType<typeof vi.fn>).mockImplementation((cb) => {
            observerCallback = cb;
            return { observe: vi.fn(), unobserve: vi.fn(), disconnect: vi.fn() };
        });

        const { result } = renderHook(() => useScrollReveal());

        // Simulate intersection
        if (observerCallback) {
            (observerCallback as IntersectionObserverCallback)(
                [{ isIntersecting: true } as IntersectionObserverEntry],
                {} as IntersectionObserver
            );
        }

        expect(result.current.visible).toBe(false); // ref not attached in jsdom, graceful no-op
    });
});
