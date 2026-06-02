import React from 'react';
import './AuroraBackground.scss';

export const AuroraBackground = () => (
    <div className="aurora" aria-hidden="true">
        <div className="aurora__blob aurora__blob--teal" />
        <div className="aurora__blob aurora__blob--purple" />
        <div className="aurora__blob aurora__blob--blue" />
        <div className="aurora__blob aurora__blob--teal-2" />
    </div>
);
