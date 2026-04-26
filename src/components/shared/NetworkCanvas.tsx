import React, { useEffect, useRef } from 'react';

const DOTS = 35;
const MAX_DIST = 320;
const SPEED = 0.3;

interface Dot {
  x: number; y: number;
  vx: number; vy: number;
  r: number;
  pulse: number;
  hub: boolean;
}

const NetworkCanvas: React.FC<{ className?: string }> = ({ className }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    let raf: number;
    let t = 0;
    const dots: Dot[] = [];

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      // re-seed so dots cover the full (possibly resized) canvas
      dots.length = 0;
      for (let i = 0; i < DOTS; i++) {
        const hub = Math.random() < 0.25;
        dots.push({
          x:  Math.random() * canvas.width,
          y:  Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * SPEED,
          vy: (Math.random() - 0.5) * SPEED,
          r:  hub ? 5 : 2.5,
          pulse: Math.random() * Math.PI * 2,
          hub,
        });
      }
    };
    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      t += 0.016;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const d of dots) {
        d.x += d.vx; d.y += d.vy;
        if (d.x < 0 || d.x > canvas.width)  d.vx *= -1;
        if (d.y < 0 || d.y > canvas.height) d.vy *= -1;
      }

      // lines — white like reference
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.6;
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.strokeStyle = `rgba(255,255,255,${alpha})`;
            ctx.lineWidth = 0.9;
            ctx.stroke();
          }
        }
      }

      // nodes
      for (const d of dots) {
        if (d.hub) {
          // pulsing outer ring
          const p = (Math.sin(t + d.pulse) + 1) / 2;
          ctx.beginPath();
          ctx.arc(d.x, d.y, d.r + 5 + p * 10, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(255,255,255,${0.2 * (1 - p)})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = d.hub ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.7)';
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);

  return <canvas ref={canvasRef} className={className} style={{ display: 'block', width: '100%', height: '100%' }} />;
};

export default NetworkCanvas;
