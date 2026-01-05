import React from 'react'
import { X } from 'lucide-react'
import useWindowStore from '../store/window.js';

const WindowControls = ({ target }) => {
    const { closeWindow } = useWindowStore();
    
    const handleClose = (e) => {
        e.stopPropagation();
        closeWindow(target);
    };

  return (
    <>
      {/* Desktop traffic lights */}
      <div id="window-controls" className="hidden md:flex">
          <button 
            className="close" 
            onClick={handleClose}
            aria-label="Close window"
          />
          <div className="minimize" />
          <div className="maximize" />
      </div>
      
      {/* Mobile close button - more prominent */}
      <button 
        className="md:hidden flex items-center justify-center w-8 h-8 rounded-full bg-gray-200/80 hover:bg-gray-300 active:bg-gray-400 transition-colors"
        onClick={handleClose}
        aria-label="Close window"
      >
        <X size={18} className="text-gray-600" />
      </button>
    </>
  )
};

export default WindowControls