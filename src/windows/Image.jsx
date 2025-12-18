import WindowWrapper from "../hoc/WindowWrapper"
import WindowControls from '#components/WindowControls'
import useWindowStore from '#store/window'

const Image = () => {
  const { windows } = useWindowStore();
  const data = windows.imgfile?.data;

  if (!data) return null;

  console.log('Image data:', data);

  return (
    <>
      <div id="window-header">
        <WindowControls target="imgfile" />
        <p>{data.name}</p>
      </div>
      <div className="preview">
        {data.imageUrl ? (
          <img src={data.imageUrl} alt={data.name} onError={(e) => console.error('Image load error:', e)} />
        ) : (
          <p>No image URL provided</p>
        )}
      </div>
    </>
  )
}

const ImageWindow = WindowWrapper(Image, 'imgfile');
export default ImageWindow;
