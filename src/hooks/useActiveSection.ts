import { useEffect, useRef, useState } from 'react';

export function useActiveSection(sectionIds: string[]) {
    const [active, setActive] = useState('');
    const idsRef = useRef(sectionIds);

    useEffect(() => {
        const ratios: Record<string, number> = {};
        const observers: IntersectionObserver[] = [];

        idsRef.current.forEach(id => {
            const el = document.getElementById(id);
            if (!el) return;

            const obs = new IntersectionObserver(
                ([entry]) => {
                    ratios[id] = entry.intersectionRatio;
                    const best = Object.entries(ratios).sort((a, b) => b[1] - a[1])[0];
                    if (best && best[1] > 0) setActive(best[0]);
                },
                { threshold: [0, 0.15, 0.3, 0.5], rootMargin: '-15% 0px -55% 0px' }
            );

            obs.observe(el);
            observers.push(obs);
        });

        return () => observers.forEach(o => o.disconnect());
    }, []);

    return active;
}
