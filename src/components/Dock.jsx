import { dockApps } from '#constants';
import { useRef, useCallback, useEffect, useState } from 'react';
import { Tooltip } from 'react-tooltip';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react'
import useWindowStore from '#store/window';

// Check if device supports hover (desktop) vs touch (mobile/tablet)
const isTouchDevice = () => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(hover: none)').matches;
};

const Dock = () => {
    const { openWindow, closeWindow, windows } = useWindowStore();
    const dockRef = useRef(null);
    const [isTouch, setIsTouch] = useState(false);

    // Detect touch device on mount
    useEffect(() => {
        setIsTouch(isTouchDevice());
        
        const mediaQuery = window.matchMedia('(hover: none)');
        const handleChange = (e) => setIsTouch(e.matches);
        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    useGSAP(() => {
        // Skip hover animation on touch devices for performance
        if (isTouch) return;

        const dock = dockRef.current;
        if (!dock) return;
        const icons = dock.querySelectorAll('.dock-icon');
        const animateIcons = (mouseX) => {

            const { left } = dock.getBoundingClientRect();
            icons.forEach((icon) => {
                const {left:iconLeft,width:w} = icon.getBoundingClientRect();
                const center = iconLeft - left + w / 2;
                const distance = Math.abs(mouseX - center);
                const intensity = Math.exp(-(distance ** 2.5) / 20000);
                gsap.to(icon, {
                    scale: 1 + 0.25 * intensity,
                    y: -15 * intensity,
                    duration: 0.2,
                    ease: 'power1.out' 
                });
            });
        };
    
        const handleMouseMove = (e) => {
            const { left } = dock.getBoundingClientRect();
            animateIcons(e.clientX - left);
        };
        const resetIcons = () => {
            icons.forEach((icon) => 
                gsap.to(icon, {
                    scale: 1,
                    y:0,
                    duration: 0.3,
                    ease: 'power1.out',
                }),
        );
        };
        dock.addEventListener('mousemove', handleMouseMove);
        dock.addEventListener('mouseleave', resetIcons);
        return () => {
            dock.removeEventListener('mousemove', handleMouseMove);
            dock.removeEventListener('mouseleave', resetIcons);
        };
    },[isTouch]);
    

    const toggleApp = (app) => {
        if(!app.canOpen) return;
        const win = windows[app.id];
        if (win.isOpen) {
            closeWindow(app.id);
        } else {
            openWindow(app.id);
        }
    }
    return (
    <section id="dock">
    <div ref={dockRef} className="dock-container">
        {dockApps.map(({id,name,icon,canOpen})=>(
            <div key={id} className="relative flex justify-center">
                <button type="button"
                className="dock-icon"
                aria-label={name}
                data-tooltip-id="dock-tooltip"
                data-tooltip-content={name}
                data-tooltip-delay-show={150}
                disabled={!canOpen}
                onClick={()=> toggleApp({id,canOpen})}>
                    <img src={`/images/${icon}`} alt={name}
                    loading="lazy" className={canOpen ? "" : "opacity-60"}/>
                </button>
            </div>
        ))}
        <Tooltip id="dock-tooltip" place="top"
        className="tooltip"
        />
    </div>
    </section>
  )
}
export default Dock