'use client';
import { useEffect, useRef, ReactNode } from 'react';

interface RevealProps {
    children: ReactNode;
    delay?: number;
}

export default function Reveal({ children, delay = 0 }: RevealProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observerOptions = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal');
                }
            });
        }, observerOptions);

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div
            ref={ref}
            className="animate-on-scroll"
            style={{ transitionDelay: `${delay}s` }}
        >
            {children}
        </div>
    );
}
