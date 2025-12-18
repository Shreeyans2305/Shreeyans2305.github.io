import WindowWrapper from "../hoc/WindowWrapper"
import WindowControls from '#components/WindowControls'
import useWindowStore from '#store/window'

const Text = () => {
  const { windows } = useWindowStore();
  const data = windows.txtfile?.data;

  if (!data) return null;

  return (
    <>
      <div id="window-header">
        <WindowControls target="txtfile" />
        <h2>{data.name}</h2>
      </div>
      <div className="text-window">
        {data.image && (
          <img src={data.image} alt={data.name} className="text-window-image" />
        )}
        {data.subtitle && (
          <h3 className="text-window-subtitle">{data.subtitle}</h3>
        )}
        <div className="text-window-content">
          {data.description?.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </>
  )
}

const TextWindow = WindowWrapper(Text, 'txtfile');
export default TextWindow;
