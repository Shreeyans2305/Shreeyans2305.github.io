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
   <div>
    <img src="/images/shrey.JPG" alt="Contact" className="w-20 rounded-full" />
    <h3>Let's Connect</h3>
    <p>Got an idea? A bug to squash? Or just want to say hi? Feel free to reach out!</p>
    <p>shreeyansv23@gmail.com</p>
    <ul>
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