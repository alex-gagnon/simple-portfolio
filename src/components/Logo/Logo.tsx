import React from 'react';

export const Logo = ({ size = 50 }: { size?: number }) => (
    <svg viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg"
        height={size} width={size}>
        <polygon points="26,2 48.5,14.5 48.5,37.5 26,50 3.5,37.5 3.5,14.5"
            fill="#060c14" stroke="#1ba098" strokeWidth="1.5" />
        <polygon points="26,8 43,17.5 43,34.5 26,44 9,34.5 9,17.5"
            fill="none" stroke="rgba(27,160,152,0.2)" strokeWidth="0.75" />
        <circle cx="26"   cy="2"    r="1.5" fill="#1ba098" />
        <circle cx="26"   cy="50"   r="1.5" fill="#1ba098" />
        <circle cx="3.5"  cy="14.5" r="1.5" fill="rgba(27,160,152,0.5)" />
        <circle cx="48.5" cy="14.5" r="1.5" fill="rgba(27,160,152,0.5)" />
        <circle cx="3.5"  cy="37.5" r="1.5" fill="rgba(27,160,152,0.5)" />
        <circle cx="48.5" cy="37.5" r="1.5" fill="rgba(27,160,152,0.5)" />
        <text x="26" y="33" textAnchor="middle"
            fontFamily="'Inter', sans-serif" fontSize="16" fontWeight="700"
            fill="#f0c050" letterSpacing="2">
            AG
        </text>
    </svg>
);
