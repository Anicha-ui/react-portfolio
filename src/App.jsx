import styles from './App.module.css'
import { Navbar } from './Components/Navbar/Navbar';
import { Hero } from './Components/Hero/Hero';
import { About } from "./Components/About/About";
import { Experience } from "./Components/Experience/Experience";
import { Projects } from "./Components/Projects/Projects";
import { Contact } from "./Components/Contact/Contact";

function App() {

  return (
    <div className={styles.App}>
      <Navbar/>
      <About/>
      {/* <Hero/> */}
      <Projects/>
      {/* <Experience/> */}
      <Contact/>
    </div>
  )
}

export default App
