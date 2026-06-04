import React, { createContext, useCallback, useContext, useState } from 'react';

interface MotionContextValue {
    hoverEnabled: boolean;
    toggleHover: () => void;
}

const MotionContext = createContext<MotionContextValue>({
    hoverEnabled: true,
    toggleHover: () => {},
});

export const useMotion = () => useContext(MotionContext);

const STORAGE_KEY = 'portfolio-hover-enabled';

export const MotionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [hoverEnabled, setHoverEnabled] = useState(() => {
        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            return stored === null ? true : stored === 'true';
        } catch {
            return true;
        }
    });

    const toggleHover = useCallback(() => {
        setHoverEnabled(prev => {
            const next = !prev;
            try { localStorage.setItem(STORAGE_KEY, String(next)); } catch {}
            return next;
        });
    }, []);

    return (
        <MotionContext.Provider value={{ hoverEnabled, toggleHover }}>
            {children}
        </MotionContext.Provider>
    );
};
