'use client';

import { useEffect, useRef } from 'react';

const MatrixRain = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*+=-'.split('');
        const fontSize = 18;
        const columns = Math.floor(canvas.width / fontSize);
        const drops = new Array(columns).fill(1);

        const draw = () => {
        if (!ctx) return;

        // Fade effect for trails
        ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Tech blue color
        ctx.fillStyle = '#00d0ff';
        ctx.font = `${fontSize}px monospace`;

        for (let i = 0; i < drops.length; i++) {
            const text = letters[Math.floor(Math.random() * letters.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            // Slower fall speed
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.985) {
            drops[i] = 0;
            }

            drops[i] += 0.5; // slower speed
        }

        requestAnimationFrame(draw);
        };

        draw();

        const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-screen h-screen z-[-1]"
        />
    );
};

export default MatrixRain;