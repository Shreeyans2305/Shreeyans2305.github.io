import { Mail, Search } from 'lucide-react';
import WindowWrapper from '#hoc/WindowWrapper';
import WindowControls from '#components/WindowControls';
import useWindowStore from '#store/window';
import { gallery, photosLinks } from '#constants';

const Photos = () => {
    const { openWindow } = useWindowStore();
  return (
    <>
        <div id="window-header">
            <WindowControls target="photos" />
            <h2 className="md:hidden text-center flex-1 font-medium text-gray-700">Gallery</h2>
            <div className="w-full hidden md:flex justify-end items-center gap-3 text-gray-500">
                <Mail className="icon" size={18} />
                <Search className="icon" size={18} />
            </div>
        </div>
        <div className="flex w-full h-full">
            <div className="sidebar">
                <h2>Photos</h2>
                <ul>
                    {photosLinks.map(({id,title,icon})=>(
                        <li key={id}>
                            <img src={icon} alt={title} />
                            <p>{title}</p>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="gallery flex-1">
                <ul>
                    {gallery.map(({id,img}) => (
                        <li key={id} onClick={() => 
                            openWindow("imgfile",{
                                id,
                                name: "Gallery image",
                                icon: "images/image.png",
                                kind: "file",
                                imageUrl: img,
                            })
                        }>
                            <img src={img} alt={`Gallery Image ${id}`} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </>
  )
}
const PhotosWindow = WindowWrapper(Photos, 'photos');
export default PhotosWindow;