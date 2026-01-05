import WindowControls from '#components/WindowControls'
import { locations } from '#constants'
import useLocationStore from '#store/location'
import clsx from 'clsx'
import WindowWrapper from '../hoc/WindowWrapper'
import { Search, FolderOpen } from 'lucide-react'
import useWindowStore from '#store/window'
import { useState } from 'react'

const Finder = () => {
    const { openWindow } = useWindowStore();
    const { activeLocation, setActiveLocation } = useLocationStore();
    const [showMobileSidebar, setShowMobileSidebar] = useState(false);
    
    const renderList = (name, items) => 
        <div>
            <h3>{name}</h3>
        <ul>
        {items.map((item) => (
                    <li key={item.id} onClick={() => {
                        setActiveLocation(item);
                        setShowMobileSidebar(false);
                    }} className={clsx(item.id === activeLocation.id ? 'active' : 'not-active')}>
                        <img src={item.icon} className="w-4" alt={item.name} />
                        <p className="text-sm font-medium truncate">{item.name}</p>
                    </li>
                ))}
        </ul>
        </div>
    const openItem = (item) => {
        if (item.fileType === 'pdf') return openWindow("resume");
        if (item.kind === 'folder') return setActiveLocation(item);
        if (['fig','url'].includes(item.fileType) && item.href) return window.open(item.href,"_blank");
        openWindow(`${item.fileType}${item.kind}`,item);
    }
  return (
    <>
    <div id="window-header">
        <WindowControls target="finder" />
        {/* Mobile folder toggle button */}
        <button 
            className="md:hidden flex items-center gap-2 px-2 py-1 rounded-md bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs"
            onClick={() => setShowMobileSidebar(!showMobileSidebar)}
        >
            <FolderOpen size={14} />
            <span className="truncate max-w-24">{activeLocation?.name || 'Folders'}</span>
        </button>
        <Search className="icon" size={18} />
    </div>

    {/* Mobile sidebar dropdown */}
    {showMobileSidebar && (
        <div className="md:hidden absolute top-12 left-0 right-0 bg-gray-50 border-b border-gray-200 p-3 z-10 max-h-60 overflow-y-auto animate-slideDown">
            {renderList('Favourites',Object.values(locations))}
            {renderList('My Projects', locations.work.children)}
        </div>
    )}

    <div className="bg-white flex h-full">
        <div className="sidebar">
                {renderList('Favourites',Object.values(locations))}
                {renderList('My Projects', locations.work.children)}
        </div>
    <ul className="content">
        {activeLocation?.children.map((item) => (
            <li key={item.id} className={clsx(item.position, "md:absolute")} onClick={()=>openItem(item)}>
                <img src={item.icon} alt={item.name} />
                <p>{item.name}</p>
            </li>
        ))}
    </ul>
    </div>
    </>
  )
}

const FinderWindow = WindowWrapper(Finder, 'finder');
export default FinderWindow