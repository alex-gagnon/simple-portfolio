import React from 'react';

const size = { height: 50, width: 50 };

// Option A — Polished monogram: dark circle, teal ring, gold Playfair "AG"
export const LogoMonogram = () => (
    <svg viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg" {...size}>
        <circle cx="26" cy="26" r="24.5" fill="#060c14" stroke="#1ba098" strokeWidth="1.5" />
        <circle cx="26" cy="26" r="21.5" fill="none" stroke="rgba(27,160,152,0.18)" strokeWidth="0.75" />
        <text x="26" y="33" textAnchor="middle"
            fontFamily="'Playfair Display', serif" fontSize="19" fontWeight="700" fill="#f0c050">
            AG
        </text>
    </svg>
);

// Option B — Aviation / compass rose: tick marks, inner ring, centered "AG"
export const LogoAviation = () => (
    <svg viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg" {...size}>
        <circle cx="26" cy="26" r="24.5" fill="#060c14" stroke="#1ba098" strokeWidth="1.5" />
        {/* Cardinal ticks */}
        <line x1="26" y1="3.5" x2="26" y2="9"   stroke="#1ba098" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="26" y1="43" x2="26" y2="48.5" stroke="#1ba098" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="3.5" y1="26" x2="9"   y2="26" stroke="#1ba098" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="43" y1="26" x2="48.5" y2="26" stroke="#1ba098" strokeWidth="1.5" strokeLinecap="round" />
        {/* Diagonal ticks */}
        <line x1="9"  y1="9"  x2="12" y2="12" stroke="rgba(27,160,152,0.45)" strokeWidth="1" strokeLinecap="round" />
        <line x1="43" y1="9"  x2="40" y2="12" stroke="rgba(27,160,152,0.45)" strokeWidth="1" strokeLinecap="round" />
        <line x1="9"  y1="43" x2="12" y2="40" stroke="rgba(27,160,152,0.45)" strokeWidth="1" strokeLinecap="round" />
        <line x1="43" y1="43" x2="40" y2="40" stroke="rgba(27,160,152,0.45)" strokeWidth="1" strokeLinecap="round" />
        {/* Inner ring */}
        <circle cx="26" cy="26" r="14.5" fill="none" stroke="rgba(27,160,152,0.25)" strokeWidth="0.75" />
        {/* North dot */}
        <circle cx="26" cy="13" r="1.5" fill="#f0c050" />
        <text x="26" y="31.5" textAnchor="middle"
            fontFamily="'Playfair Display', serif" fontSize="13" fontWeight="700" fill="#f0c050">
            AG
        </text>
    </svg>
);

// Option C — Hexagonal / geometric: angular frame, Inter sans-serif "AG"
export const LogoHex = () => (
    <svg viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg" {...size}>
        {/* Outer hex */}
        <polygon points="26,2 48.5,14.5 48.5,37.5 26,50 3.5,37.5 3.5,14.5"
            fill="#060c14" stroke="#1ba098" strokeWidth="1.5" />
        {/* Inner hex hairline */}
        <polygon points="26,8 43,17.5 43,34.5 26,44 9,34.5 9,17.5"
            fill="none" stroke="rgba(27,160,152,0.2)" strokeWidth="0.75" />
        {/* Corner accent dots */}
        <circle cx="26"  cy="2"    r="1.5" fill="#1ba098" />
        <circle cx="26"  cy="50"   r="1.5" fill="#1ba098" />
        <circle cx="3.5" cy="14.5" r="1.5" fill="rgba(27,160,152,0.5)" />
        <circle cx="48.5" cy="14.5" r="1.5" fill="rgba(27,160,152,0.5)" />
        <circle cx="3.5" cy="37.5" r="1.5" fill="rgba(27,160,152,0.5)" />
        <circle cx="48.5" cy="37.5" r="1.5" fill="rgba(27,160,152,0.5)" />
        <text x="26" y="33" textAnchor="middle"
            fontFamily="'Inter', sans-serif" fontSize="16" fontWeight="700"
            fill="#f0c050" letterSpacing="2">
            AG
        </text>
    </svg>
);
