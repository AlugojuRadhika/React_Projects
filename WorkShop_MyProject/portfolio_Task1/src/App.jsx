import Header from "./component/Header.jsx";
import About from "./component/About.jsx";
import Projects from "./component/Projects.jsx";
import Skills from "./component/Skills.jsx";
import Contact from "./component/Contact.jsx";
import Footer from "./component/Footer.jsx"

const App=()=>{
  return(
    <div>
      <Header/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  );
}
export default App;