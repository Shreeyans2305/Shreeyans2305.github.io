import dayjs from "dayjs";
import { navLinks } from '#constants'
import { navIcons } from '#constants'
import useWindowStore from "#store/window";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const { openWindow } = useWindowStore();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleNavClick = (type) => {
        openWindow(type);
        setMobileMenuOpen(false);
    };

  return (
    <>
    <nav>
        <div>
            <img src='/images/logo.svg' className="w-5 h-5 md:w-6 md:h-6" />
            <p className='nav-title'>Shreeyans's Profile</p>
            <ul>
                {navLinks.map(({id,name,type})=>(
                    <li key={id} onClick={() => handleNavClick(type)}>
                        <p>{name}</p>
                    </li>
                ))}
            </ul>
        </div>
        <div className="flex items-center gap-3">
            {/* Mobile menu button */}
            <button 
                className="mobile-menu-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
            >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <ul>
                {navIcons.map(({id,img})=>(
                    <li key={id}>
                        <img src={img} className="icon-hover w-4 h-4" alt={`icon-${id}`} />
                    </li>
                ))}
            </ul>
            <time>{dayjs().format('ddd MMM D h:mm A')}</time>
        </div>
    </nav>

    {/* Mobile dropdown menu */}
    {mobileMenuOpen && (
        <div className="md:hidden fixed top-12 left-0 right-0 z-[100] glass-heavy border-b border-white/20 animate-slideDown">
            <ul className="flex flex-col p-2">
                {navLinks.map(({id,name,type})=>(
                    <li 
                        key={id} 
                        onClick={() => handleNavClick(type)}
                        className="px-4 py-3 text-sm font-medium text-gray-800 hover:bg-white/50 active:bg-white/70 rounded-lg transition-colors cursor-pointer touch-target"
                    >
                        {name}
                    </li>
                ))}
            </ul>
        </div>
    )}

    {/* Mobile menu backdrop */}
    {mobileMenuOpen && (
        <div 
            className="md:hidden fixed inset-0 top-12 z-[99] bg-black/20"
            onClick={() => setMobileMenuOpen(false)}
        />
    )}
    </>
  )
}

export default Navbar