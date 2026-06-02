import { useEffect, useRef } from 'react';

const HEX_SIZE = 46;
const GAP = 2;
const GLOW_RADIUS = 140;
const DECAY = 0.96;
const BOOST = 0.18;
const MAX_BRIGHT = 0.38;
const BASE_STROKE = 0.055;

interface Hex { cx: number; cy: number; b: number; hue: number }

function hexPath(ctx: CanvasRenderingContext2D, cx: number, cy: number, r: number) {
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
        const a = (Math.PI / 3) * i - Math.PI / 6;
        const x = cx + r * Math.cos(a);
        const y = cy + r * Math.sin(a);
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }
    ctx.closePath();
}

function buildGrid(w: number, h: number): Hex[] {
    const hexes: Hex[] = [];
    const colW = Math.sqrt(3) * HEX_SIZE;
    const rowH = HEX_SIZE * 1.5;
    const cols = Math.ceil(w / colW) + 2;
    const rows = Math.ceil(h / rowH) + 2;
    for (let row = -1; row < rows; row++) {
        for (let col = -1; col < cols; col++) {
            const cx = col * colW + (row % 2) * (colW / 2);
            const cy = row * rowH;
            // Map position to hue: teal(178°) top-left → blue(220°) center → purple(268°) bottom-right
            const t = Math.max(0, Math.min(1, (cx / w) * 0.55 + (cy / h) * 0.45));
            const hue = Math.round(178 + t * 90);
            hexes.push({ cx, cy, b: 0, hue });
        }
    }
    return hexes;
}

export const HexGrid = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouse = useRef({ x: -9999, y: -9999 });
    const hexes = useRef<Hex[]>([]);
    const raf = useRef(0);
    const lastTouchEnd = useRef(0);
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
                ctx.strokeStyle = `hsla(${h.hue},75%,52%,${BASE_STROKE})`;
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
                    ctx.fillStyle = `hsla(${h.hue},75%,52%,${(h.b * 0.55).toFixed(3)})`;
                    ctx.fill();
                    ctx.strokeStyle = `hsla(${h.hue},80%,58%,${Math.max(h.b * 1.8, BASE_STROKE).toFixed(3)})`;
                } else {
                    ctx.strokeStyle = `hsla(${h.hue},75%,52%,${BASE_STROKE})`;
                }
                ctx.lineWidth = 0.75;
                ctx.stroke();
            }

            raf.current = requestAnimationFrame(animate);
        };

        const onMouseMove = (e: MouseEvent) => {
            // Ignore synthetic mouse events the browser fires after a touch sequence
            if (Date.now() - lastTouchEnd.current < 500) return;
            mouse.current = { x: e.clientX, y: e.clientY };
        };
        const onTouchMove = (e: TouchEvent) => {
            mouse.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        };
        const onTouchEnd = () => {
            lastTouchEnd.current = Date.now();
            mouse.current = { x: -9999, y: -9999 };
        };

        resize();
        window.addEventListener('resize', resize);

        if (reducedMotion) {
            drawStatic();
        } else {
            window.addEventListener('mousemove', onMouseMove);
            window.addEventListener('touchmove', onTouchMove, { passive: true });
            window.addEventListener('touchend', onTouchEnd);
            raf.current = requestAnimationFrame(animate);
        }

        return () => {
            cancelAnimationFrame(raf.current);
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('touchmove', onTouchMove);
            window.removeEventListener('touchend', onTouchEnd);
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
