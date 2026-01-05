import WindowControls from '#components/WindowControls'
import { ChevronLeft, ChevronRight, Copy, MoveRight, PanelLeft, Plus, Search, Share, ShieldHalf } from 'lucide-react';
import WindowWrapper from "../hoc/WindowWrapper";
import React from 'react'
import { blogPosts } from '#constants';

const Safari = () => {
  return (
    <>
    <div id="window-header" className="flex-wrap md:flex-nowrap gap-2">
        <WindowControls target="safari" />

        <PanelLeft className="ml-2 md:ml-10 icon hidden md:block" size={18} />
        <div className="hidden md:flex items-center gap-1 ml-2 md:ml-5">
            <ChevronLeft className="icon" size={18} />
            <ChevronRight className="icon" size={18} />
        </div>
        <div className="flex-1 flex-center gap-2 md:gap-3 order-last md:order-none w-full md:w-auto mt-2 md:mt-0">
            <ShieldHalf className="icon hidden md:block" size={18} />
            <div className="search">
                <Search className="icon" size={16} />
                <input type="text" placeholder="Search or enter website name" 
                className="flex-1" />
            </div>
        </div>
        <div className="hidden md:flex items-center gap-5">
            <Share className='icon' size={18} />
            <Plus className='icon' size={18} />
            <Copy className='icon' size={18} />
        </div>
    </div>
        <div className="blog">
            <h2>My Recommendations</h2>
            <div className="space-y-5">
                {blogPosts.map(({id,image,title,date,link}) => (
                <div key={id} className="blog-post">
                    <div className="col-span-2">
                        <img src={image} alt={title}/>
                    </div>
                    <div className="content">
                        <p>{date}</p>
                        <h3>{title}</h3>
                        <a href={link} target="_blank" rel="noopener noreferrer">Keep Looking... <MoveRight className='icon-hover' size={16} /></a>
                    </div>
                </div>
            ))}
            </div>
        </div>
    </>
  )
}
const SafariWindow = WindowWrapper(Safari, 'safari');
export default SafariWindow