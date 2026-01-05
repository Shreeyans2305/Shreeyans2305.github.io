import React from 'react';
import {useRef, useEffect, useState} from 'react';
import gsap from 'gsap';
import {useGSAP} from "@gsap/react";

// Check if device supports hover
const isTouchDevice = () => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(hover: none)').matches;
};

const FONT_WEIGHTS = {
    subtitle: {min:100,max:400,default:100},
    title: {min:400,max:800,default:400},

};
const renderText = (text,className,baseWeight=400) => {
    return [...text].map((char,i)=>(
        <span key={i}
        className={className}
        style={{fontVariationSettings: `'wght ${baseWeight}`}}
         >{char === " " ? "\u00A0" : char}
            </span>
    ));
};


const setupTextHover = (container,type, isTouch) => {
    if(!container) return () => {};
    const letters = container.querySelectorAll("span");
    const {min,max,default:base} = FONT_WEIGHTS[type];
    
    const animateLetter = (letter,weight,duration=0.25) => {
        return gsap.to(letter,{duration,
            ease:"power2.out",
            fontVariationSettings: `'wght' ${weight}`
        });
    };

    // For touch devices, use a simpler tap animation
    if (isTouch) {
        const handleTouchStart = () => {
            // Animate all letters to max weight on tap
            letters.forEach((letter, i) => {
                gsap.to(letter, {
                    duration: 0.15,
                    delay: i * 0.02,
                    ease: "power2.out",
                    fontVariationSettings: `'wght' ${max}`
                });
            });
        };

        const handleTouchEnd = () => {
            // Animate back after a short delay
            setTimeout(() => {
                letters.forEach((letter, i) => {
                    gsap.to(letter, {
                        duration: 0.3,
                        delay: i * 0.01,
                        ease: "power2.out",
                        fontVariationSettings: `'wght' ${base}`
                    });
                });
            }, 150);
        };

        container.addEventListener("touchstart", handleTouchStart, { passive: true });
        container.addEventListener("touchend", handleTouchEnd, { passive: true });

        return () => {
            container.removeEventListener("touchstart", handleTouchStart);
            container.removeEventListener("touchend", handleTouchEnd);
        };
    }

    // Desktop hover animation
    const handleMouseMove = (e) => {
        const {left} = container.getBoundingClientRect();
        const mouseX = e.clientX - left;
        letters.forEach((letter)=>{
            const {left:l,width:w} = letter.getBoundingClientRect();
            const distance = Math.abs(mouseX - ( l - left + w/2));
            const intensity = Math.exp(-(distance ** 2)/20000);
            animateLetter(letter,min+(max-min)*intensity);
        });
    };
    const handleMouseLeave = () => {
        letters.forEach(letter=>animateLetter(letter,base,0.3));
    };
    container.addEventListener("mousemove",handleMouseMove);
    container.addEventListener("mouseleave",handleMouseLeave);

    return () => {
        container.removeEventListener("mousemove",handleMouseMove);
        container.removeEventListener("mouseleave",handleMouseLeave);
    }
};

const Welcome = () => {
  
    const titleRef=useRef(null);
    const subtitleRef=useRef(null);
    const [isTouch, setIsTouch] = useState(false);

    useEffect(() => {
        setIsTouch(isTouchDevice());
    }, []);

    useGSAP(()=>{
        const titleCleanup = setupTextHover(titleRef.current,"title", isTouch);
        const subtitleCleanup = setupTextHover(subtitleRef.current,"subtitle", isTouch);
        return () => {
            titleCleanup();
            subtitleCleanup();
        };
    },[isTouch]);

    return (
        <section id="welcome">
            <p ref={subtitleRef} className="subtitle text-center px-2">
                {renderText(
                    "Hello, Welcome to my profile page! I'm",
                    "font-georama inline-block",
                    100,)}
            </p>
            <h1 ref={titleRef} className="title mt-4 md:mt-7">
                {renderText("Shreeyans","italic font-georama inline-block")}</h1>
        </section>
  )
}

export default Welcome