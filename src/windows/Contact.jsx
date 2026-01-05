import windowWrapper from "../hoc/WindowWrapper";
import WindowControls from "#components/WindowControls";
import { socials } from "#constants";

const Contact = () => {
  return (
   <>
   <div id="window-header">
    <WindowControls target="contact" />
        <h2>Contact Me</h2>
   </div>
   <div className="flex flex-col items-center text-center md:items-start md:text-left">
    <img src="/images/shrey.JPG" alt="Contact" className="w-16 md:w-20 rounded-full" />
    <h3>Let's Connect</h3>
    <p className="text-gray-600 text-sm md:text-base">Got an idea? A bug to squash? Or just want to say hi? Feel free to reach out!</p>
    <p className="text-gray-800 font-medium">shreeyansv23@gmail.com</p>
    <ul className="w-full mt-3">
    {socials.map(({id,bg,link,icon,text})=>(
        <li key={id} style={{ backgroundColor: bg }}>
            <a href={link} target="_blank" rel="noopener noreferrer" title={text} className="flex items-center gap-2">
                <img src={icon} alt={text} className="size-5" />
                <p>{text}</p>
            </a>
        </li>
    ))}
    </ul>
   </div>
   </>
  )
}

const ContactWindow = windowWrapper(Contact, 'contact');
export default ContactWindow