import React from 'react';

export const Logo = ({ size = 50 }: { size?: number }) => (
    <img
        src="/logos/logo.svg"
        alt="Alex Gagnon Logo"
        height={size}
        style={{ width: 'auto', display: 'block' }}
    />
);
