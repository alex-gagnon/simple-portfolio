import React, { useEffect, useRef } from 'react';

const HEX_SIZE = 46;        // circumradius — controls grid density
const GAP = 2;              // px gap between hexagons
const GLOW_RADIUS = 140;    // px — how far the cursor influence spreads
const DECAY = 0.96;         // per-frame brightness falloff (lower = faster fade)
const BOOST = 0.18;         // how fast a hex brightens per frame when near cursor
const MAX_BRIGHT = 0.38;    // peak fill opacity
const BASE_STROKE = 0.055;  // always-visible faint outline opacity

interface Hex { cx: number; cy: number; b: number }

function hexPath(ctx: CanvasRenderingContext2D, cx: number, cy: number, r: number) {
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
        const a = (Math.PI / 3) * i - Math.PI / 6; // pointy-top
        const x = cx + r * Math.cos(a);
        const y = cy + r * Math.sin(a);
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }
    ctx.closePath();
}

function buildGrid(w: number, h: number): Hex[] {
    const hexes: Hex[] = [];
    const col_w = Math.sqrt(3) * HEX_SIZE;
    const row_h = HEX_SIZE * 1.5;
    const cols = Math.ceil(w / col_w) + 2;
    const rows = Math.ceil(h / row_h) + 2;
    for (let row = -1; row < rows; row++) {
        for (let col = -1; col < cols; col++) {
            const cx = col * col_w + (row % 2) * (col_w / 2);
            const cy = row * row_h;
            hexes.push({ cx, cy, b: 0 });
        }
    }
    return hexes;
}

export const HexGrid = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouse = useRef({ x: -9999, y: -9999 });
    const hexes = useRef<Hex[]>([]);
    const raf = useRef(0);
    const reducedMotion = typeof window !== 'undefined'
        && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d')!;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            hexes.current = buildGrid(canvas.width, canvas.height);
        };

        const drawStatic = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (const h of hexes.current) {
                hexPath(ctx, h.cx, h.cy, HEX_SIZE - GAP);
                ctx.strokeStyle = `rgba(27,160,152,${BASE_STROKE})`;
                ctx.lineWidth = 0.75;
                ctx.stroke();
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const { x: mx, y: my } = mouse.current;

            for (const h of hexes.current) {
                const dx = h.cx - mx;
                const dy = h.cy - my;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < GLOW_RADIUS) {
                    const strength = (1 - dist / GLOW_RADIUS) ** 2;
                    h.b = Math.min(h.b + strength * BOOST, MAX_BRIGHT);
                }
                h.b *= DECAY;

                hexPath(ctx, h.cx, h.cy, HEX_SIZE - GAP);

                if (h.b > 0.004) {
                    ctx.fillStyle = `rgba(27,160,152,${h.b * 0.55})`;
                    ctx.fill();
                    ctx.strokeStyle = `rgba(27,160,152,${Math.max(h.b * 1.8, BASE_STROKE)})`;
                } else {
                    ctx.strokeStyle = `rgba(27,160,152,${BASE_STROKE})`;
                }
                ctx.lineWidth = 0.75;
                ctx.stroke();
            }

            raf.current = requestAnimationFrame(animate);
        };

        const onMouseMove = (e: MouseEvent) => { mouse.current = { x: e.clientX, y: e.clientY }; };
        const onTouchMove = (e: TouchEvent) => {
            mouse.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        };

        resize();
        window.addEventListener('resize', resize);

        if (reducedMotion) {
            drawStatic();
        } else {
            window.addEventListener('mousemove', onMouseMove);
            window.addEventListener('touchmove', onTouchMove, { passive: true });
            raf.current = requestAnimationFrame(animate);
        }

        return () => {
            cancelAnimationFrame(raf.current);
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('touchmove', onTouchMove);
        };
    }, [reducedMotion]);

    return (
        <canvas
            ref={canvasRef}
            aria-hidden="true"
            style={{
                position: 'fixed',
                inset: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 0,
            }}
        />
    );
};
