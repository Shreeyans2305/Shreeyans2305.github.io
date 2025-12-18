import { Dock, Navbar, Welcome, Home } from "#components"
import { Draggable } from "gsap/Draggable"
import { Safari, Terminal, Resume, Finder, Text, Image, Contact, Photos } from "#windows"
import gsap from "gsap";
gsap.registerPlugin(Draggable);
function App() {
  return (
    <>
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <Text />
      <Image />
      <Contact />
      <Home />
      <Photos />
    </>
  )
}

export default App
