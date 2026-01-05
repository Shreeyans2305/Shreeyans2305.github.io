import { useRef, useLayoutEffect, useEffect, useState } from 'react';
import useWindowStore from '../store/window';
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';

// Check if on mobile
const isMobileDevice = () => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(max-width: 768px)').matches;
};

const WindowWrapper = (Component,windowKey) => {
    const Wrapped = (props) => {
        const {focusWindow, closeWindow, windows} = useWindowStore();
        const { isOpen,zIndex } = windows[windowKey];
        const ref = useRef(null);
        const [isMobile, setIsMobile] = useState(false);

        // Detect mobile on mount and resize
        useEffect(() => {
            const checkMobile = () => setIsMobile(isMobileDevice());
            checkMobile();
            
            window.addEventListener('resize', checkMobile);
            return () => window.removeEventListener('resize', checkMobile);
        }, []);

        // Prevent body scroll when window is open on mobile
        useEffect(() => {
            if (isMobile && isOpen) {
                document.body.style.overflow = 'hidden';
                return () => {
                    document.body.style.overflow = '';
                };
            }
        }, [isMobile, isOpen]);

        useGSAP(() => {
            const el = ref.current;
            if (!el || !isOpen) return;
            el.style.display = "block";
            
            // Different animation for mobile (slide up) vs desktop (scale)
            if (isMobile) {
                gsap.fromTo(el,
                    { y: '100%', opacity: 1 },
                    { y: 0, opacity: 1, duration: 0.3, ease: "power3.out" }
                );
            } else {
                gsap.fromTo(el,
                    { scale: 0.8, opacity: 0, y: 40 },
                    { scale: 1, opacity: 1, y: 0, duration: 0.2, ease: "power3.out" }
                );
            }
        },[isOpen, isMobile]);

        useGSAP(() => {
            const el = ref.current;
            if (!el) return;
            
            // Only enable dragging on desktop
            if (!isMobile) {
                const [instance] = Draggable.create(el, { 
                    onPress: () => focusWindow(windowKey),
                    bounds: "body",
                    trigger: el.querySelector('#window-header')
                });
                return () => instance.kill();
            }
        },[isMobile]);
            
        useLayoutEffect(() => {
            const el = ref.current;
            if (!el) return;
            el.style.display = isOpen ? "block" : "none";
        }, [isOpen]);

        // Handle swipe down to close on mobile
        const handleTouchStart = useRef({ y: 0, startTime: 0 });
        
        const onTouchStart = (e) => {
            if (!isMobile) return;
            handleTouchStart.current = { 
                y: e.touches[0].clientY,
                startTime: Date.now()
            };
        };

        const onTouchEnd = (e) => {
            if (!isMobile) return;
            const deltaY = e.changedTouches[0].clientY - handleTouchStart.current.y;
            const deltaTime = Date.now() - handleTouchStart.current.startTime;
            
            // Fast swipe down (velocity-based)
            if (deltaY > 100 && deltaTime < 300) {
                const el = ref.current;
                gsap.to(el, {
                    y: '100%',
                    duration: 0.2,
                    ease: "power2.in",
                    onComplete: () => closeWindow(windowKey)
                });
            }
        };

        return (
            <section id={windowKey}
            ref = {ref}
            style = {{ zIndex }}
            className="absolute"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            >
                <Component {...props} />
            </section>
        )
    };
    Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || 'Component'})`;
    return Wrapped;
};

export default WindowWrapper